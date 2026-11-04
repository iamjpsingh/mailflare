import type { AppDatabase } from "@/db";

// Self-hosted fork: mailbox sharing is always on (matches toLicenseStatus in src/lib/licenses/service.ts).
export async function isTeamMailboxSharingEnabled(_db: AppDatabase): Promise<boolean> {
	return true;
}
