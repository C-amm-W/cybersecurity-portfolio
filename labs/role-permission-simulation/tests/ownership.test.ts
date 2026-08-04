import test from 'node:test'; import assert from 'node:assert/strict'; import { mayAccessObject } from '../src/ownership.ts'
const user={id:'u1',roleIds:['reader'],provisionedApps:['demo_app']}; const record={id:'r1',ownerId:'u1',title:'Synthetic',internalNote:'Restricted'}
test('owner may access object',()=>assert.equal(mayAccessObject(user,record),true))
test('non-owner is denied unless explicitly managing',()=>{assert.equal(mayAccessObject({...user,id:'u2'},record),false);assert.equal(mayAccessObject({...user,id:'u2'},record,true),true)})
