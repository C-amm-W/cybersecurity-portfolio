# Authorization Assurance Matrix

## Purpose

This matrix connects common authorization risks to the safeguards, validation activities, and portfolio evidence used to address them.

| Risk | Primary Safeguard | Validation | Evidence Type |
|---|---|---|---|
| Unauthenticated access | Session validation | Expired, revoked, and missing-session tests | Secure API authorization case study |
| Authenticated but unprovisioned user | Per-user application registry | Application-access denial tests | Persona and app provisioning case study |
| Missing feature permission | Backend permission enforcement | Direct route calls without required grant | RBAC governance and simulation lab |
| Legacy single-role assumptions | Multi-role resolver | Mixed-role user scenarios | RBAC hardening documentation |
| Client-side tampering | Server-side authorization | Manipulated client state | Role permission simulation lab |
| Cross-user object access | Ownership and management-scope checks | Non-owner access attempts | Adversarial review case study |
| Identifier enumeration | Equivalent external errors | Sequential and guessed identifiers | Adversarial review case study |
| Internal metadata leakage | Server-side field filtering | Lower-privilege response inspection | Privacy architecture case study |
| Excessive exceptions | Audited, expiring overrides | Override review and trend monitoring | Permission override governance |
| Unauthorized state reversal | Transition guards | Invalid and stale-link transition tests | Vendor portal and API authorization studies |
| Concurrent false success | Guarded conditional updates | Conflicting simultaneous mutations | Adversarial review case study |
| Service impersonation | Service token or signature verification | Invalid credential and body-tampering tests | SSO and secure handoff case study |
| Weak external portal tokens | Hash-at-rest, rotation, revocation | Expired, revoked, and reused-token tests | Secure external vendor portal case study |
| Insufficient accountability | Centralized audit events | Event-shape and success/failure review | Audit logging and telemetry case study |

## Review Questions

For each new route or workflow:

1. What authenticates the caller?
2. Is the caller provisioned for the application?
3. Which permission authorizes the action?
4. Is object ownership or management scope required?
5. Which response fields are safe for this viewer?
6. Is the requested state transition valid?
7. Can concurrent activity invalidate the decision?
8. What audit event records the result?
9. What regression test prevents recurrence?

## Evidence Standard

Evidence should be sanitized and should describe the risk, control, test, and outcome without publishing private implementation details or company data.
