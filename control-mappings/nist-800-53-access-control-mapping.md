# NIST SP 800-53 Access-Control Conceptual Mapping

> **This is a conceptual planning crosswalk for communication and portfolio purposes. It is not an assessment, attestation, certification, audit result, or claim of control effectiveness.**

**As of:** 2026-08-04

| Portfolio control | NIST SP 800-53 concept | Portfolio evidence |
|---|---|---|
| Per-user provisioning and lifecycle review | AC-2 Account Management | [Current status](../docs/current-control-status.md) |
| Backend permission and object enforcement | AC-3 Access Enforcement | [Authorization matrix](../evidence/authorization-validation-matrix.md) |
| Role grants and deny-by-default behavior | AC-6 Least Privilege | [Runnable lab](../labs/role-permission-simulation/README.md) |
| Security-event taxonomy | AU-2 Event Logging | [Synthetic events](../evidence/sanitized-audit-events.json) |
| Actor, target, outcome, and reason fields | AU-3 Content of Audit Records | [Audit schema](../docs/audit/audit-event-schema.md) |
| Review-oriented event design | AU-6 Audit Record Review, Analysis, and Reporting | [Telemetry case study](../case-studies/audit-logging-telemetry-design.md) |
| Session and Microsoft Entra ID architecture | IA-2 Identification and Authentication | [SSO case study](../case-studies/microsoft-sso-secure-handoff.md) |

Only conceptual relationships supported by repository documentation are listed. Control implementation and operating effectiveness require scoped evidence and qualified assessment outside this portfolio.
