import { audit } from './audit.ts'
import { knownPermissions } from './roles.ts'
import type { AuditEvent, Permission, PermissionOverride, Role, User } from './types.ts'
import { resolvePermissions } from './resolver.ts'
export interface Decision { allowed: boolean; event: AuditEvent }
export function authorize(user: User, permission: Permission, roles: Role[], overrides: PermissionOverride[], app?: string, now = new Date()): Decision {
  if (!knownPermissions.has(permission)) return { allowed: false, event: audit(user.id, permission, false, 'unknown_permission') }
  if (app && !user.provisionedApps.includes(app)) return { allowed: false, event: audit(user.id, permission, false, 'application_not_provisioned') }
  try {
    const allowed = resolvePermissions(user, roles, overrides, now).has(permission)
    return { allowed, event: audit(user.id, permission, allowed, allowed ? 'effective_permission' : 'missing_permission') }
  } catch {
    return { allowed: false, event: audit(user.id, permission, false, 'resolver_failure') }
  }
}
