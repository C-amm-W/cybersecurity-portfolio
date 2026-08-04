import type { DemoRecord, User } from './types.ts'
export function mayAccessObject(user: User, record: DemoRecord, canManageAll = false): boolean {
  return canManageAll || record.ownerId === user.id
}
