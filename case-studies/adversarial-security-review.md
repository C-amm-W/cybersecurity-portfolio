# Adversarial Security Review Case Study

## Summary

This case study documents an adversarial review of a production support and asset-management module. The review focused on how legitimate application features could unintentionally expose private metadata, permit object probing, create inconsistent authorization outcomes, or record misleading events during concurrent updates.

The work demonstrates security engineering after feature implementation: challenge assumptions, identify abuse paths, remediate confirmed findings, and add regression protections.

## System Context

The reviewed module supported:

- IT and maintenance ticketing.
- Requester and manager comment workflows.
- Internal manager-only notes.
- Company asset assignment and custody history.
- Status transitions and resolution workflows.
- User-facing notifications and deep links.

Because users had different relationships to tickets, assets, and internal notes, broad route access was not enough. The module required object-level and field-level authorization.

## Threat Questions

The review asked questions such as:

- Can a requester infer that a hidden internal note exists?
- Can a user access or probe an asset that is not assigned to them?
- Are manager notes or assignment metadata exposed indirectly?
- Do missing and unauthorized identifiers behave differently?
- Can concurrent updates create false status events or notifications?
- Can stale client state cause an action to target the wrong record?
- Do write routes enforce the same validation rules as create routes?

## Confirmed Risk Areas

### Metadata Leakage

Hiding internal-note text was insufficient when event labels or counts still revealed the existence of restricted activity.

### Object-Level Authorization

Users with legitimate access to the module still needed ownership checks before associating or viewing specific assets.

### Identifier Probing

Different responses for nonexistent and unauthorized resources could reveal whether protected identifiers were valid.

### Sensitive Field Exposure

Asset-level and assignment notes could contain information about other employees and required manager-only filtering.

### Concurrency and Audit Correctness

A stale request could conflict with a manager's newer action. Without guarded updates, the system could record a false transition, notification, or response flag even when the database change did not occur.

### Client-State Integrity

Slow responses and stale component state could display or act on the wrong record if views were not remounted or refreshed correctly.

## Controls Implemented

- Filtered internal-note events from unauthorized activity feeds.
- Counted only comments visible to the requesting user.
- Restricted non-manager asset custodians to their own custody records.
- Removed manager-only asset and assignment notes from lower-privilege responses.
- Required ownership or management authority before accepting asset associations.
- Used equivalent failure behavior for missing and unauthorized asset identifiers.
- Guarded workflow updates using affected-row checks and conflict responses.
- Prevented false audit events and notifications when concurrent changes won the race.
- Applied consistent input-length validation across create and update routes.
- Refreshed detail views after board-level changes.
- Added regression tests and review notes for confirmed findings.

## Security Value

The review shows that authorization must be evaluated at several levels:

- Route access.
- Resource ownership.
- Field visibility.
- Metadata visibility.
- Workflow transition authority.
- Concurrency correctness.

It also demonstrates that audit integrity is part of security. A misleading audit event can harm investigations even when the underlying data remains protected.

## Business Impact

- Reduced privacy leakage within internal support workflows.
- Reduced risk of unauthorized asset discovery or association.
- Improved reliability of ticket and asset histories.
- Prevented misleading notifications and audit records.
- Increased confidence in using the module across multiple departments.
- Created reusable review patterns for other production features.

## Roadmap Alignment

- Phase 0: AppSec foundations and authorization enforcement.
- Phase 0: Audit logging and operational controls.
- Phase 0: Risk identification and remediation.
- Phase 2 preview: Adversary-informed detection and validation.

## Portfolio-Safe Evidence Handling

This case study presents sanitized security findings and control patterns without exposing private source code, employee notes, ticket contents, asset identifiers, or internal company records.
