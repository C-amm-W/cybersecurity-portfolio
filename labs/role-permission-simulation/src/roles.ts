import type { Permission, Role } from './types.ts'
export const knownPermissions = new Set<Permission>(['records.view', 'records.manage', 'audit.view', 'app.enter'])
export const defaultRoles: Role[] = [
  { id: 'reader', permissions: ['records.view'] },
  { id: 'operator', permissions: ['records.view', 'records.manage'] },
  { id: 'auditor', permissions: ['records.view', 'audit.view'] }
]
