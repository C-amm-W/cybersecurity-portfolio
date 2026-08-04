# Synthetic Privacy Field-Release Matrix

**As of:** 2026-08-04
**Evidence state:** `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE`

All actors, records, and fields below are synthetic. The matrix demonstrates release decisions without reproducing a production schema.

| Synthetic record | Viewer context | Field | Release | Reason |
|---|---|---|---|---|
| `ticket_demo_01` | requester and owner | `title` | Allow | Required for the requester's workflow |
| `ticket_demo_01` | requester and owner | `publicComments` | Allow | Viewer-visible discussion |
| `ticket_demo_01` | requester and owner | `internalManagerNote` | Deny | Restricted operational context |
| `ticket_demo_01` | requester and owner | `internalNoteCount` | Deny | Count would disclose hidden activity |
| `ticket_demo_01` | authorized manager | `internalManagerNote` | Allow | Authorized management workflow |
| `asset_demo_02` | current synthetic custodian | `assetLabel` | Allow | Required to identify assigned object |
| `asset_demo_02` | current synthetic custodian | `priorCustodianNote` | Deny | Unnecessary information about another actor |
| `review_demo_03` | review subject | `finalSummary` | Allow | Employee-visible output |
| `review_demo_03` | review subject | `reviewerIdentity` | Deny | Synthetic workflow requires anonymity |
| `review_demo_03` | review subject | `rawTranscript` | Deny | Minimize sensitive source material |
| `review_demo_03` | authorized manager | `managerContext` | Allow | Required for authorized management use |
| `document_demo_04` | unrelated portal actor | `storageKey` | Deny | Avoid object and storage metadata disclosure |

The runnable lab includes a smaller executable field-filter example. This matrix does not claim identical private field names.
