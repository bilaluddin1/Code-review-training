import { NextRequest, NextResponse } from 'next/server';
import { isAdminSession } from '@/lib/isAdminSession';
import { challenges } from '@/data/challenges';
import type { Challenge } from '@/types/challenge';
import fs from 'fs/promises';
import path from 'path';

const CHALLENGES_FILE_PATH = path.join(process.cwd(), 'src/data/challenges.ts');

// GET: Return all challenges
export async function GET(req: NextRequest) {
  try {
    console.log('GET /api/admin/challenges called');

    // Temporarily bypass session check for development
    // const isAdmin = await isAdminSession(req);
    const isAdmin = true; // Temporary bypass
    console.log('Admin session check result:', isAdmin);

    if (!isAdmin) {
      console.log('Unauthorized access attempt');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('Returning challenges:', challenges.length, 'challenges');
    return NextResponse.json(challenges);
  } catch (error) {
    console.error('Error in GET /api/admin/challenges:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST: Create a new challenge
export async function POST(req: NextRequest) {
  try {
    // Temporarily bypass session check for development
    // const isAdmin = await isAdminSession(req);
    const isAdmin = true; // Temporary bypass

    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const challenge: Challenge = await req.json();

    // Validate required fields
    if (!challenge.id || !challenge.title || !challenge.code || !challenge.vulnerableLines) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if challenge already exists
    const existingIndex = challenges.findIndex(c => c.id === challenge.id);
    if (existingIndex !== -1) {
      return NextResponse.json({ error: 'Challenge with this ID already exists' }, { status: 409 });
    }

    // Add new challenge
    challenges.push(challenge);
    await updateChallengesFile();

    return NextResponse.json(challenge, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/admin/challenges:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT: Update an existing challenge
export async function PUT(req: NextRequest) {
  try {
    // Temporarily bypass session check for development
    // const isAdmin = await isAdminSession(req);
    const isAdmin = true; // Temporary bypass

    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const challenge: Challenge = await req.json();

    // Validate required fields
    if (!challenge.id || !challenge.title || !challenge.code || !challenge.vulnerableLines) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Find and update challenge
    const existingIndex = challenges.findIndex(c => c.id === challenge.id);
    if (existingIndex === -1) {
      return NextResponse.json({ error: 'Challenge not found' }, { status: 404 });
    }

    challenges[existingIndex] = challenge;
    await updateChallengesFile();

    return NextResponse.json(challenge);
  } catch (error) {
    console.error('Error in PUT /api/admin/challenges:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE: Delete a challenge
export async function DELETE(req: NextRequest) {
  try {
    // Temporarily bypass session check for development
    // const isAdmin = await isAdminSession(req);
    const isAdmin = true; // Temporary bypass

    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Challenge ID is required' }, { status: 400 });
    }

    // Prevent deletion of DEMO challenge
    if (id === 'DEMO') {
      return NextResponse.json({ error: 'Cannot delete DEMO challenge' }, { status: 403 });
    }

    // Find and remove challenge
    const existingIndex = challenges.findIndex(c => c.id === id);
    if (existingIndex === -1) {
      return NextResponse.json({ error: 'Challenge not found' }, { status: 404 });
    }

    const deletedChallenge = challenges.splice(existingIndex, 1)[0];
    await updateChallengesFile();

    return NextResponse.json({ message: 'Challenge deleted successfully', challenge: deletedChallenge });
  } catch (error) {
    console.error('Error in DELETE /api/admin/challenges:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Helper function to update the challenges file
async function updateChallengesFile() {
  try {
    const challengesContent = `import type { Challenge } from "../types/challenge"

export const challenges: Challenge[] = ${JSON.stringify(challenges, null, 2)}`;

    await fs.writeFile(CHALLENGES_FILE_PATH, challengesContent, 'utf-8');
  } catch (error) {
    console.error('Error updating challenges file:', error);
    throw new Error('Failed to update challenges file');
  }
}
