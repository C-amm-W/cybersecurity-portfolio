export type Permission = 'records.view' | 'records.manage' | 'audit.view' | 'app.enter'
export type OverrideEffect = 'ALLOW' | 'DENY'
export interface Role { id: string; permissions: Permission[] }
export interface User { id: string; roleIds: string[]; provisionedApps: string[] }
export interface PermissionOverride { userId: string; permission: Permission; effect: OverrideEffect; expiresAt: string }
export interface AuditEvent { eventType: string; actorId: string; permission?: string; outcome: 'allowed' | 'denied'; reason: string }
export interface DemoRecord { id: string; ownerId: string; title: string; internalNote: string }
