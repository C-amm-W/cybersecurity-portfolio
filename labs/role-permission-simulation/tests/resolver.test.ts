import test from 'node:test'; import assert from 'node:assert/strict'
import { resolvePermissions } from '../src/resolver.ts'; import { defaultRoles } from '../src/roles.ts'
const multi = { id:'u1', roleIds:['operator','auditor'], provisionedApps:['demo_app'] }
test('multi-role grants are additive', () => assert.deepEqual([...resolvePermissions(multi, defaultRoles, [])].sort(), ['audit.view','records.manage','records.view']))
test('unknown role is rejected', () => assert.throws(() => resolvePermissions({...multi,roleIds:['unknown']}, defaultRoles, []), /unknown_role/))
