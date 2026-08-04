import test from 'node:test'; import assert from 'node:assert/strict'; import { filterRecord } from '../src/fieldFilter.ts'
const record={id:'r1',ownerId:'u1',title:'Synthetic',internalNote:'Restricted'}
test('restricted field is omitted',()=>assert.equal('internalNote' in filterRecord(record,false),false))
test('authorized viewer receives restricted field',()=>assert.equal(filterRecord(record,true).internalNote,'Restricted'))
