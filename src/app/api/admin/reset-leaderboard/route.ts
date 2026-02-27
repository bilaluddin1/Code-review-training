import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { isAdminSession } from '@/lib/isAdminSession';

const prisma = new PrismaClient();

/**
 * POST /api/admin/reset-leaderboard
 * Resets leaderboard scores AND all challenge/flag submissions.
 * This gives every user a clean slate — attempt counters reset,
 * solved states reset, scores zeroed out.
 * Requires admin authentication.
 */
export async function POST(request: NextRequest) {
    // Verify admin session
    if (!(await isAdminSession(request))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        // Delete all data in order (submissions first, then users)
        const [submissionsResult, flagSubmissionsResult, leaderboardResult] = await Promise.all([
            prisma.challengeSubmission.deleteMany(),
            prisma.flagSubmission.deleteMany(),
            prisma.leaderboardUser.deleteMany(),
        ]);

        return NextResponse.json({
            success: true,
            message: 'Leaderboard and all submissions reset successfully',
            deleted: {
                leaderboardUsers: leaderboardResult.count,
                challengeSubmissions: submissionsResult.count,
                flagSubmissions: flagSubmissionsResult.count,
            }
        });
    } catch (error) {
        console.error('Error resetting leaderboard:', error);
        return NextResponse.json({
            error: 'Failed to reset leaderboard',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}
