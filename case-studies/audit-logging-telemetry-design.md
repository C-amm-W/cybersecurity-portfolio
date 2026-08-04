# Audit Logging and Telemetry Design Case Study

| Metadata | Value |
|---|---|
| System | Fence Wizard and connected workflows |
| Case-study status | Ongoing validation |
| Evidence level | `ONGOING_VALIDATION` |
| As-of date | 2026-08-04 |
| Architecture | Current architecture |
| Validation status | Sanitized schema and event-category review |
| Known limitations | No production log export or deployed detection is included. |

Evidence-state definitions are maintained in [the evidence model](../evidence/README.md), and current implementation status is governed by [Current Control Status](../docs/current-control-status.md).

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

## My Contribution and Validation

I identified or clarified security requirements, defined expected and adversarial behavior, directed AI-assisted implementation revisions where applicable, reviewed changes, tested acceptance criteria, documented outcomes, and coordinated adoption or deployment within my supported contribution boundary. I do not claim sole manual authorship, and private implementation code is not included.

## Controls and Evidence Basis

The controls below are reported from the evidence level in the metadata. They are not presented as publicly demonstrated unless linked to a runnable or inspectable public artifact.

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

## Expected Security and Business Benefit

- Improved administrative accountability.
- Better evidence for access reviews and security documentation.
- More reliable reconstruction of operational incidents.
- Stronger foundation for future SIEM and alerting work.
- Reduced risk of misleading audit trails during failed or concurrent updates.
- More understandable audit exports for technical and non-technical stakeholders.

## Validation Method

Sanitized schema and event-category review. Relevant public evidence is indexed in [the evidence index](../evidence/evidence-index.md); synthetic artifacts demonstrate expected control behavior without reproducing private code.

## Sanitized Evidence

The public evidence is limited to portfolio-safe documentation, synthetic matrices, and the independent runnable lab. No production export is included.

## Outcome and Limitations

Described risk reductions are expected security benefits unless the text explicitly identifies an observed result. No production log export or deployed detection is included.

## Status Authority

Legacy roadmap phase labels are superseded by [Current Control Status](../docs/current-control-status.md).
## Portfolio-Safe Evidence Handling

The public case study describes event categories, control patterns, and security outcomes without exposing private schemas, employee data, customer information, secrets, or internal identifiers.
