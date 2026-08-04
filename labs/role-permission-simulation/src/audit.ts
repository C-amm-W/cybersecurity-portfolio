import type { AuditEvent } from './types.ts'
export function audit(actorId: string, permission: string, allowed: boolean, reason: string): AuditEvent {
  return { eventType: allowed ? 'authorization_allowed' : 'authorization_denied', actorId, permission, outcome: allowed ? 'allowed' : 'denied', reason }
}
