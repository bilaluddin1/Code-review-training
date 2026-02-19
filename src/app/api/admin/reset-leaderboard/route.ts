import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { isAdminSession } from '@/lib/isAdminSession';

const prisma = new PrismaClient();

/**
 * POST /api/admin/reset-leaderboard
 * Resets ONLY the leaderboard data while preserving all challenges and submissions
 * Requires admin authentication
 */
export async function POST(request: NextRequest) {
    // Verify admin session
    if (!(await isAdminSession(request))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        // Delete only leaderboard users, preserve all other data
        const result = await prisma.leaderboardUser.deleteMany();

        return NextResponse.json({
            success: true,
            message: 'Leaderboard reset successfully',
            deletedCount: result.count
        });
    } catch (error) {
        console.error('Error resetting leaderboard:', error);
        return NextResponse.json({
            error: 'Failed to reset leaderboard',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}
