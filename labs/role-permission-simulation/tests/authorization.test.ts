import test from 'node:test'; import assert from 'node:assert/strict'
import { authorize } from '../src/authorize.ts'; import { defaultRoles } from '../src/roles.ts'
const reader = { id:'reader1', roleIds:['reader'], provisionedApps:['demo_app'] }
test('missing permission is denied by default and audited', () => { const d=authorize(reader,'records.manage',defaultRoles,[]); assert.equal(d.allowed,false); assert.equal(d.event.outcome,'denied') })
test('application provisioning is enforced', () => assert.equal(authorize({...reader,provisionedApps:[]},'records.view',defaultRoles,[],'demo_app').event.reason,'application_not_provisioned'))
test('known permission is allowed', () => assert.equal(authorize(reader,'records.view',defaultRoles,[],'demo_app').allowed,true))
