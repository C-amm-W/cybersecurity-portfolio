# Current Control Status

**Authoritative as of:** 2026-08-04
**Status authority:** This file supersedes roadmap phase labels and mixed status checklists elsewhere in the repository.

Validation dates identify the most recent sanitized evidence review, not an external assessment.

| Control family | Current status | Evidence level | Validation date | Current architecture | Historical architecture | Residual work |
|---|---|---|---|---|---|---|
| Authentication and session enforcement | Implemented; ongoing validation | `ONGOING_VALIDATION` | 2026-08-04 | Valid sessions required for protected routes | Inconsistent route-local session checks | Expand negative regression coverage |
| Application provisioning | Implemented | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` | 2026-08-04 | Per-user application eligibility separate from feature authorization | Downstream entry coupled to action permissions | Periodic offboarding review |
| Multi-role RBAC | Implemented; ongoing migration assurance | `ONGOING_VALIDATION` | 2026-08-04 | Additive canonical roles with explicit exceptions | Single legacy role and per-user toggles | Continue legacy-path removal |
| Backend route authorization | Implemented in reviewed route families | `ONGOING_VALIDATION` | 2026-08-04 | Central permission checks; documented exceptions | Scattered role and client checks | Review newly added routes |
| Object-level authorization | Implemented in reviewed modules | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` | 2026-08-04 | Ownership or authorized management scope | Route access treated too broadly | Expand automated negative tests |
| Field-level privacy filtering | Implemented in reviewed modules | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` | 2026-08-04 | Viewer-aware response shaping | UI-only hiding or broad payloads | Maintain field-release matrices |
| Protected state transitions | Implemented in reviewed workflows | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` | 2026-08-04 | Permission, status, and concurrency guards | Unguarded or stale transitions | Expand transition regression set |
| Service-to-service trust | Current direct identity path implemented; historical handoff retired | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` | 2026-08-04 | Explicit service authentication where internal calls remain | Signed cross-app handoff | Periodic trust-path inventory |
| External portal token controls | Implemented | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` | 2026-08-04 | Hashed, expiring, revocable portal tokens and guarded POST actions | State-changing bearer links | Continue upload and abuse review |
| Audit logging | Implemented for documented security-sensitive families | `ONGOING_VALIDATION` | 2026-08-04 | Structured decision and change events | Debug-oriented or fragmented history | Normalize taxonomy; build detections |
| Detection engineering | Design foundation only | `DESIGN_ONLY` | 2026-08-04 | Synthetic events and documented opportunities | None | Implement and validate analytics outside this portfolio |
| Break-glass administration | Design only | `DESIGN_ONLY` | 2026-08-04 | Governance principles documented | None verified | Manual design and implementation verification |
| Compliance mappings | Conceptual planning only | `DESIGN_ONLY` | 2026-08-04 | Portfolio crosswalks | Previously advertised mappings were absent | Formal assessment is out of scope |

Historical phase names are retained only as context in superseded documents. They do not define current control completion.
