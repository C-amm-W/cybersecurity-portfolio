import test from 'node:test'; import assert from 'node:assert/strict'; import { authorize } from '../src/authorize.ts'; import type { Permission } from '../src/types.ts'
const user={id:'u1',roleIds:['missing'],provisionedApps:['demo_app']}
test('resolver failure denies and creates synthetic audit event',()=>{const d=authorize(user,'records.view',[],[]);assert.equal(d.allowed,false);assert.equal(d.event.reason,'resolver_failure')})
test('unknown permission fails closed',()=>{const d=authorize({...user,roleIds:[]},'unknown' as Permission,[],[]);assert.equal(d.allowed,false);assert.equal(d.event.reason,'unknown_permission')})
