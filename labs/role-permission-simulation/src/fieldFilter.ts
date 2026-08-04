import type { DemoRecord } from './types.ts'
export type ReleasedRecord = Omit<DemoRecord, 'internalNote'> & { internalNote?: string }
export function filterRecord(record: DemoRecord, mayViewInternal: boolean): ReleasedRecord {
  const { internalNote, ...publicFields } = record
  return mayViewInternal ? { ...publicFields, internalNote } : publicFields
}
