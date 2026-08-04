# Audit Logging and Telemetry Design Case Study

## Summary

This case study documents audit logging and telemetry design used to make internal platform activity more reviewable, explainable, and detection-ready.

The logging model expanded beyond basic administrative history to cover security decisions, workflow transitions, service-authentication outcomes, assignment failures, custody changes, sensitive account actions, and operational events that may later support detection engineering.

## Problem

A system can have strong access controls and still be difficult to govern if important actions are not recorded with enough context to explain what happened. Logs that exist only for debugging do not necessarily support investigations, access reviews, or compliance evidence.

The design needed to support multiple audiences:

- Security reviewers investigating access decisions.
- Administrators reviewing privileged changes.
- Operations teams reconstructing workflow activity.
- Future detection logic looking for suspicious patterns.
- Governance stakeholders collecting evidence.

## Security Objectives

- Capture meaningful security and governance events.
- Record both successful and denied security decisions.
- Preserve actor, target, action, time, and outcome context.
- Keep audit records understandable to non-developers.
- Support future SIEM, alerting, and threat-hunting use cases.
- Avoid overexposing sensitive content in logs.
- Distinguish security events from ordinary operational telemetry.

## Event Categories

### Security Decisions

- Authorization allowed and denied outcomes.
- Service-authentication failures.
- Application eligibility denials.
- Session-loss and session-expiration reasons.
- Rate-limit and account-recovery abuse signals.

### Administrative Audit Events

- Role and permission changes.
- Permission overrides and expiration.
- Administrator-triggered password-reset actions.
- Protected account and application-access changes.
- Sensitive delete or override operations.

### Operational Workflow Events

- Ticket status transitions.
- Assignment and reassignment activity.
- Asset custody assignment and return history.
- Inventory and receiving workflow transitions.
- Yard-pull and dispatch activity timelines.
- Notification and escalation events.

### Detection-Oriented Telemetry

- Repeated denied authorization attempts.
- Failed internal service authentication.
- Unusual privileged changes.
- Resource-access probing indicators.
- Assignment failures caused by missing eligible users.
- Security-sensitive upload validation failures.

## Controls Implemented

- Centralized audit-event foundation for access and workflow activity.
- Human-readable labels in audit interfaces and exports.
- Metadata-rich event patterns for actors, targets, outcomes, and reasons.
- Audit events for role, permission, password-reset, and application-access changes.
- Allowed, denied, and failed service-authentication events for connected applications.
- Append-only histories for ticket activity and asset custody.
- Guarded workflow updates that avoid writing false events during concurrency conflicts.
- Password-reset telemetry for requests, admin-triggered actions, and rate-limit abuse.
- Security event logging for invalid or rejected portal and authorization activity.
- Documentation framing audit data as future detection telemetry rather than only debugging output.

## Design Principles

- Log decisions, not only errors.
- Record why an action was allowed or denied.
- Avoid storing secrets or unnecessary sensitive payloads.
- Use append-only histories where reconstruction matters.
- Prevent stale or failed transactions from creating misleading events.
- Keep event terminology consistent enough for future detection rules.

## Security Value

Audit logs should help answer:

- Who initiated the action?
- What resource or workflow was affected?
- What changed?
- Why was it allowed or denied?
- When did it happen?
- Was the result successful, rejected, or conflicted?

This supports incident review, compliance evidence, access governance, and future detection engineering.

## Business Impact

- Improved administrative accountability.
- Better evidence for access reviews and security documentation.
- More reliable reconstruction of operational incidents.
- Stronger foundation for future SIEM and alerting work.
- Reduced risk of misleading audit trails during failed or concurrent updates.
- More understandable audit exports for technical and non-technical stakeholders.

## Roadmap Alignment

- Phase 0: Audit logging and operational controls.
- Phase 0: Security dashboards and operational writeups.
- Phase 1 preview: Cloud logging and identity-abuse visibility.
- Phase 2 preview: Detection engineering, alert logic, and threat hunting.

## Portfolio-Safe Evidence Handling

The public case study describes event categories, control patterns, and security outcomes without exposing private schemas, employee data, customer information, secrets, or internal identifiers.
