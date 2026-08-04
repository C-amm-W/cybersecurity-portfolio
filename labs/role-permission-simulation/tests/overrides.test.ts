import test from 'node:test'; import assert from 'node:assert/strict'; import { resolvePermissions } from '../src/resolver.ts'; import { defaultRoles } from '../src/roles.ts'
const user={id:'u1',roleIds:['operator'],provisionedApps:['demo_app']}
test('active explicit deny takes precedence',()=>assert.equal(resolvePermissions(user,defaultRoles,[{userId:'u1',permission:'records.manage',effect:'DENY',expiresAt:'2099-01-01T00:00:00Z'}],new Date('2026-08-04')).has('records.manage'),false))
test('expired deny does not remove role grant',()=>assert.equal(resolvePermissions(user,defaultRoles,[{userId:'u1',permission:'records.manage',effect:'DENY',expiresAt:'2000-01-01T00:00:00Z'}],new Date('2026-08-04')).has('records.manage'),true))
