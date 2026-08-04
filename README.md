# Cybersecurity Portfolio — C. Wilkerson

This portfolio presents sanitized security-engineering case studies, synthetic public evidence, and a runnable authorization lab. It distinguishes public demonstration from private implementation summaries and design-only work through the [evidence model](evidence/README.md).

## Start Here

1. **[Fence Wizard authorization hardening](case-studies/fence-wizard-rbac-governance.md)** — multi-role RBAC, backend enforcement, provisioning, object authorization, field filtering, and guarded transitions.
2. **[Adversarial security review](case-studies/adversarial-security-review.md)** — metadata disclosure, object probing, concurrency, audit correctness, and regression-oriented remediation.
3. **[Secure external vendor portal](case-studies/secure-external-vendor-portal.md)** — hashed and expiring tokens, explicit state-changing actions, private documents, and replay resistance.

For verification-oriented review, continue to the [evidence index](evidence/evidence-index.md), [current control status](docs/current-control-status.md), and [runnable RBAC lab](labs/role-permission-simulation/README.md).

## Featured Case Studies

| Case study | Evidence posture |
|---|---|
| [Fence Wizard RBAC Governance](case-studies/fence-wizard-rbac-governance.md) | Private implementation, sanitized evidence, ongoing validation |
| [Secure API Authorization](case-studies/secure-api-authorization.md) | Private implementation, sanitized evidence, ongoing validation |
| [Microsoft SSO and Secure App Handoff](case-studies/microsoft-sso-secure-handoff.md) | Current Microsoft Entra ID architecture plus retired handoff history |
| [Application Provisioning and Persona Access](case-studies/application-provisioning-persona-access.md) | Private implementation, sanitized evidence |
| [Adversarial Security Review](case-studies/adversarial-security-review.md) | Sanitized finding and validation summary |
| [Secure External Vendor Portal](case-studies/secure-external-vendor-portal.md) | Private implementation, sanitized threat/control evidence |
| [Password Reset Hardening](case-studies/password-reset-hardening.md) | Implemented; additional public evidence pending |
| [Compass Audit and Privacy Architecture](case-studies/compass-audit-privacy-architecture.md) | Private implementation, synthetic privacy evidence |
| [Human-Governed AI Engineering Triage](case-studies/human-governed-ai-engineering-triage.md) | Implemented; additional public evidence pending |
| [Audit Logging and Telemetry Design](case-studies/audit-logging-telemetry-design.md) | Ongoing validation; detection implementation remains design-only |
| [Break-Glass Administrative Access](case-studies/break-glass-admin-access.md) | Design only |

## Technical Evidence and Architecture

- [Evidence model](evidence/README.md)
- [Evidence index](evidence/evidence-index.md)
- [Authoritative current control status](docs/current-control-status.md)
- [Authorization validation matrix](evidence/authorization-validation-matrix.md)
- [Privacy field-release matrix](evidence/privacy-field-release-matrix.md)
- [Adversarial review summary](evidence/adversarial-review-summary.md)
- [Synthetic audit events](evidence/sanitized-audit-events.json)
- [RBAC routing diagram](docs/fence-wizard-rbac-routing.md)
- [Authorization matrix](docs/rbac/authorization-matrix.md)
- [Audit-event schema](docs/audit/audit-event-schema.md)
- [Fence Wizard hardening evidence hub](fence-wizard-rbac-security-hardening/README.md)
- [Security architecture glossary](docs/glossary.md)

## Labs

- [Runnable role-permission simulation](labs/role-permission-simulation/README.md) — synthetic TypeScript implementation and negative security tests.

## Control Mappings

- [NIST SP 800-53 Access-Control Conceptual Mapping](control-mappings/nist-800-53-access-control-mapping.md)
- [CMMC Level 2 Conceptual Alignment Notes](control-mappings/cmmc-level-2-alignment.md)

Both mappings are planning crosswalks only. They are not assessments, attestations, certifications, audit results, or claims of control effectiveness.

## Historical and Transitional Documentation

- [Historical RBAC migration architecture](historical/rbac-migration-architecture.md)
- [Historical route-enforcement inventory](historical/route-enforcement-inventory.md)
- [SSO architecture evolution](case-studies/microsoft-sso-secure-handoff.md)

Historical documents preserve decision context but do not override [current control status](docs/current-control-status.md).

## Contribution, Evidence, and Use

- [Contribution and AI-assistance statement](CONTRIBUTION_AND_AI_ASSISTANCE.md)
- [Portfolio-use notice](PORTFOLIO_USE_NOTICE.md)

Private repositories are not copied into this public portfolio. Production claims identify their evidence boundary; synthetic artifacts are clearly labeled and never represented as production exports.

## Explicit Scope Exclusion

The enterprise email and notification architecture is intentionally excluded. It remains pending a separate manual verification of contribution boundaries and is not represented as completed proof-of-work.

## Current Focus

Governance-aware security engineering: layered authorization, privacy-aware application security, auditable operations, adversarial validation, and detection-engineering foundations.
