import { knownPermissions } from './roles.ts'
import type { Permission, PermissionOverride, Role, User } from './types.ts'
export function resolvePermissions(user: User, roles: Role[], overrides: PermissionOverride[], now = new Date()): Set<Permission> {
  const roleMap = new Map(roles.map(role => [role.id, role]))
  const effective = new Set<Permission>()
  for (const roleId of user.roleIds) {
    const role = roleMap.get(roleId)
    if (!role) throw new Error(`unknown_role:${roleId}`)
    for (const permission of role.permissions) {
      if (!knownPermissions.has(permission)) throw new Error(`unknown_permission:${permission}`)
      effective.add(permission)
    }
  }
  const active = overrides.filter(item => item.userId === user.id && new Date(item.expiresAt) > now)
  for (const item of active.filter(item => item.effect === 'ALLOW')) {
    if (!knownPermissions.has(item.permission)) throw new Error(`unknown_permission:${item.permission}`)
    effective.add(item.permission)
  }
  for (const item of active.filter(item => item.effect === 'DENY')) effective.delete(item.permission)
  return effective
}
