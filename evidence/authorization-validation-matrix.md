# Sanitized Authorization Validation Matrix

**As of:** 2026-08-04
**Evidence state:** `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE`

This matrix records sanitized security behaviors reviewed against private implementations. Names and inputs are synthetic; it is not a production test export. The runnable lab demonstrates equivalent control concepts independently.

| Scenario | Expected behavior | Sanitized validation method | Recorded result | Residual limitation |
|---|---|---|---|---|
| Missing session | Deny before business logic | Request protected operation without session | Denied | No production request included |
| Valid session without permission | Return forbidden; do not mutate | Use synthetic low-privilege actor | Denied, no mutation expected | Route coverage remains ongoing |
| Valid permission without object ownership | Conceal or deny the object | Request another actor's synthetic record | Denied | Module-specific policy varies |
| Nonexistent versus unauthorized object equivalence | Equivalent status and response shape | Compare unknown and unowned synthetic IDs | Equivalent behavior recorded | Timing equivalence not publicly benchmarked |
| Explicit deny override | Deny wins over role grant | Add active deny for granted permission | Denied | Private override implementation not published |
| Expired override | Ignore expired exception | Evaluate after synthetic expiry | Role baseline applied | Clock-skew handling not demonstrated publicly |
| Unknown permission | Fail closed | Request unregistered permission key | Rejected | Public lab demonstrates this behavior |
| Resolver failure | Fail closed and emit failure context | Inject resolver error | Denied | Production failure logs not exported |
| Disabled app provisioning | Deny application entry | Disable synthetic app grant | Denied | Offboarding cadence remains operational work |
| Invalid service authentication | Reject before eligibility data | Supply invalid synthetic credential | Denied and security event expected | Credential format intentionally omitted |
| Stale workflow transition | Conflict; do not emit success event | Submit transition from stale version | Conflict recorded | Concurrency load test not public |
| Protected state rollback | Reject backward transition | Attempt prohibited synthetic rollback | Denied | Workflow names generalized |

“Recorded result” summarizes a sanitized manual review and must not be interpreted as independent certification.
