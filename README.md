# Cybersecurity Portfolio — C. Wilkerson

## Strategic Focus

This portfolio documents hands-on cybersecurity work focused on governance-aware security engineering, access-control architecture, secure application design, audit logging, identity governance, privacy-aware AI workflows, and detection engineering foundations.

The goal is to show practical proof-of-work beyond tool familiarity: secure design decisions, authorization enforcement, operational risk reduction, adversarial review, documentation discipline, and telemetry that can support future detection engineering.

## Core Themes

- Security engineering for business platforms
- Role-based access control and permission governance
- Least privilege and deny-by-default authorization design
- API authentication, ownership checks, and session enforcement
- Microsoft SSO and secure application handoff design
- Application provisioning and persona-based access
- Audit logging and security event visibility
- Privacy-preserving AI workflow design
- Adversarial security review and remediation
- Secure external portal and token design
- Human-governed AI automation
- Break-glass access governance
- Access-control regression validation
- NIST/CMMC-style control mapping
- Detection engineering foundations

## Featured Case Studies

| Case Study | Focus Area |
|---|---|
| [Fence Wizard RBAC Governance](case-studies/fence-wizard-rbac-governance.md) | Production RBAC migration, multi-role permissions, authorization hardening |
| [Secure API Authorization](case-studies/secure-api-authorization.md) | Sessions, route permissions, resource ownership, field-level privacy, service trust |
| [Microsoft SSO and Secure App Handoff](case-studies/microsoft-sso-secure-handoff.md) | Identity evolution, callback reliability, signed handoff, Azure AD migration |
| [Application Provisioning and Persona-Based Access](case-studies/application-provisioning-persona-access.md) | Authentication, per-user app access, Persona Engine authorization boundaries |
| [Adversarial Security Review](case-studies/adversarial-security-review.md) | Metadata leakage, object authorization, enumeration resistance, concurrency safety |
| [Secure External Vendor Portal](case-studies/secure-external-vendor-portal.md) | Hashed tokens, rotation, second factor, guarded state changes, private documents |
| [Password Reset Hardening](case-studies/password-reset-hardening.md) | Account recovery security, rate limiting, reset-token handling, audit telemetry |
| [Compass Audit and Privacy Architecture](case-studies/compass-audit-privacy-architecture.md) | Audit logs, application provisioning, anonymized reviews, encryption, data minimization |
| [Human-Governed AI Engineering Triage](case-studies/human-governed-ai-engineering-triage.md) | AI triage, duplicate detection, security escalation, plan-only automation, human approval |
| [Permission Override Governance](case-studies/permission-override-governance.md) | Exception-based access, expiration, auditability |
| [Break-Glass Admin Access](case-studies/break-glass-admin-access.md) | Emergency privileged access, logging, review/rotation |
| [Access-Control Regression Checklist](case-studies/access-control-regression-checklist.md) | Secure change review, authorization validation |
| [Audit Logging and Telemetry Design](case-studies/audit-logging-telemetry-design.md) | Security decisions, administrative events, workflow history, detection-ready logging |

## Control Mappings

| Mapping | Purpose |
|---|---|
| [NIST 800-53 Access Control Mapping](control-mappings/nist-800-53-access-control-mapping.md) | Connect RBAC and audit work to access-control concepts |
| [CMMC Level 2 Alignment Notes](control-mappings/cmmc-level-2-alignment.md) | Planning-oriented control alignment for future compliance work |

## Portfolio Standard

Each project should answer four questions:

1. What risk or security problem was being addressed?
2. What control, process, or technical safeguard was implemented?
3. How was the safeguard validated or documented?
4. What business or operational risk was reduced?

## Evidence Handling Standard

Private company repositories should not be copied into this public portfolio. Case studies should use sanitized summaries, diagrams, control mappings, and evidence notes that explain the security value without exposing proprietary implementation details.

AI-assisted implementation is described through the security decisions, review process, testing, and operational outcomes rather than claims that every line was manually written.

## Scope Note

The enterprise email and notification architecture is intentionally not included in this refresh. The framework contribution requires a separate manual authorship review before it is represented as portfolio proof-of-work.

## Current Identity

Governance-aware security engineering and detection-focused operator building hardened operational platforms with cloud and AI security integration.
