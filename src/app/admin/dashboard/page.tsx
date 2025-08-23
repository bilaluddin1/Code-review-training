"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AdminPanel } from "@/components/code-review-challenge"
import { ChallengeEditor } from "@/components/admin/challenge-editor"
import { UserCount } from "@/components/ui/user-count"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Settings,
  Code,
  Users,
  BarChart3,
  Lock,
  LogOut
} from "lucide-react"
import { io } from 'socket.io-client'
import type { Challenge } from "@/types/challenge"

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:4001';

export default function AdminDashboard() {
  console.log("Admin Socket: ", SOCKET_URL)
  const [locks, setLocks] = useState<Record<string, boolean>>({});
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("challenges");
  const router = useRouter();

  // Debug challenges state
  useEffect(() => {
    console.log('Admin Dashboard - Challenges state changed:', {
      challengesLength: challenges.length,
      loading,
      challenges: challenges
    });
  }, [challenges, loading]);

  useEffect(() => {
    // Only allow access if admin session
    fetch(`/api/admin-login`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        if (!data.authenticated) {
          router.replace("/admin");
        } else {
          // Fetch locks from API
          fetch(`/api/challenge-locks`)
            .then(res => res.json())
            .then(data => setLocks(data));

          // Fetch challenges
          fetchChallenges();
        }
        setLoading(false);
      });
  }, [router]);

  const fetchChallenges = async () => {
    try {
      console.log('Fetching challenges...');
      const res = await fetch('/api/admin/challenges');
      console.log('Response status:', res.status);

      if (res.ok) {
        const data = await res.json();
        console.log('Challenges fetched:', data);
        setChallenges(data);
      } else {
        console.error('Failed to fetch challenges:', res.status, res.statusText);
        const errorData = await res.json().catch(() => ({}));
        console.error('Error data:', errorData);
      }
    } catch (error) {
      console.error('Error fetching challenges:', error);
    }
  };

  const handleToggleLock = async (id: string) => {
    try {
      const isLocked = locks[id] !== false;
      const newLocked = !isLocked;

      // Optimistically update UI
      setLocks(prev => ({ ...prev, [id]: newLocked }));

      console.log('Toggling lock for challenge:', id, 'new state:', newLocked);

      const response = await fetch(`/api/challenge-locks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, locked: newLocked })
      });

      if (!response.ok) {
        console.error('Failed to update lock:', response.status, response.statusText);
        // Revert optimistic update
        setLocks(prev => ({ ...prev, [id]: isLocked }));
        return;
      }

      console.log('Lock updated successfully');

      // Reset timer if locking the challenge
      if (newLocked) {
        try {
          const socket = io(SOCKET_URL, { transports: ['websocket'] });
          socket.emit('admin:resetTimer', { challengeId: id });
          socket.disconnect();
        } catch (socketError) {
          console.error('Socket error:', socketError);
        }
      }
    } catch (error) {
      console.error('Error toggling lock:', error);
      // Revert optimistic update on error
      const isLocked = locks[id] !== false;
      setLocks(prev => ({ ...prev, [id]: isLocked }));
    }
  };

  const handleSaveChallenge = async (challenge: Challenge) => {
    try {
      const existingChallenge = challenges.find(c => c.id === challenge.id);
      const method = existingChallenge ? 'PUT' : 'POST';

      console.log('Saving challenge:', { method, challengeId: challenge.id, existing: !!existingChallenge });

      const res = await fetch('/api/admin/challenges', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(challenge),
      });

      const responseData = await res.json();

      if (!res.ok) {
        console.error('API Error:', responseData);
        throw new Error(responseData.error || 'Failed to save challenge');
      }

      console.log('Challenge saved successfully:', responseData);
      await fetchChallenges();
    } catch (error) {
      console.error('Error saving challenge:', error);
      throw error;
    }
  };

  const handleDeleteChallenge = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/challenges?id=${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Failed to delete challenge');
      }

      await fetchChallenges();
    } catch (error) {
      console.error('Error deleting challenge:', error);
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logout: true }),
        credentials: 'include',
      });
      router.replace('/admin');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <UserCount isAdmin={true} />
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="challenges" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Challenges
            </TabsTrigger>
            <TabsTrigger value="locks" className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Challenge Locks
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="challenges" className="space-y-6">
            <ChallengeEditor
              challenges={challenges}
              onSave={handleSaveChallenge}
              onDelete={handleDeleteChallenge}
              onRefresh={fetchChallenges}
            />
          </TabsContent>

          <TabsContent value="locks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Challenge Lock Management
                </CardTitle>
                <CardDescription>
                  Lock or unlock challenges to control user access
                </CardDescription>
              </CardHeader>
              <CardContent>
                {console.log('Rendering AdminPanel with:', { locks, challengesLength: challenges.length, challenges })}
                <AdminPanel locks={locks} onToggleLock={handleToggleLock} challenges={challenges} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Analytics Dashboard
                </CardTitle>
                <CardDescription>
                  View user statistics and challenge performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  Analytics dashboard coming soon...
                  <br />
                  This will include user statistics, challenge completion rates, and performance metrics.
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 