# Evidence Index

**As of:** 2026-08-04

| Evidence | State | Supports | Limitation |
|---|---|---|---|
| [Authorization validation matrix](authorization-validation-matrix.md) | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` | Session, permission, ownership, provisioning, service trust, state guards | Sanitized expected/observed validation summary; no production requests |
| [Privacy field-release matrix](privacy-field-release-matrix.md) | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` | Field and metadata filtering | Entirely synthetic records and field names |
| [Adversarial review summary](adversarial-review-summary.md) | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` | Threat review and remediation validation | Omits routes, identifiers, and private findings |
| [Synthetic audit events](sanitized-audit-events.json) | `PUBLICLY_DEMONSTRATED` | Event vocabulary and detection-ready structure | Synthetic examples, not production exports |
| [Runnable RBAC lab](../labs/role-permission-simulation/README.md) | `PUBLICLY_DEMONSTRATED` | RBAC, overrides, provisioning, ownership, filtering, fail-closed behavior | Independent synthetic implementation |
| [Current control status](../docs/current-control-status.md) | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` | Authoritative implementation-state summary | Relies on sanitized manual validation records |

Case studies are narrative evidence and must be read with their metadata and limitations. A private implementation claim is not automatically a public demonstration.
