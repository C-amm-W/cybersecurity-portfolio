# Adversarial Security Review Case Study

| Metadata | Value |
|---|---|
| System | Fence Wizard reviewed modules |
| Case-study status | ONGOING_VALIDATION |
| Evidence level | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` |
| As-of date | 2026-08-04 |
| Architecture | Current architecture |
| Validation status | Sanitized manual review and regression summary |
| Known limitations | No proprietary findings, routes, or test output is public. |

Evidence-state definitions are maintained in [the evidence model](../evidence/README.md), and current implementation status is governed by [Current Control Status](../docs/current-control-status.md).

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

## My Contribution and Validation

I identified or clarified security requirements, defined expected and adversarial behavior, directed AI-assisted implementation revisions where applicable, reviewed changes, tested acceptance criteria, documented outcomes, and coordinated adoption or deployment within my supported contribution boundary. I do not claim sole manual authorship, and private implementation code is not included.

## Controls and Evidence Basis

The controls below are reported from the evidence level in the metadata. They are not presented as publicly demonstrated unless linked to a runnable or inspectable public artifact.

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

## Expected Security and Business Benefit

- Reduced privacy leakage within internal support workflows.
- Reduced risk of unauthorized asset discovery or association.
- Improved reliability of ticket and asset histories.
- Prevented misleading notifications and audit records.
- Increased confidence in using the module across multiple departments.
- Created reusable review patterns for other production features.

## Validation Method

Sanitized manual review and regression summary. Relevant public evidence is indexed in [the evidence index](../evidence/evidence-index.md); synthetic artifacts demonstrate expected control behavior without reproducing private code.

## Sanitized Evidence

The public evidence is limited to portfolio-safe documentation, synthetic matrices, and the independent runnable lab. No production export is included.

## Outcome and Limitations

Described risk reductions are expected security benefits unless the text explicitly identifies an observed result. No proprietary findings, routes, or test output is public.

## Status Authority

Legacy roadmap phase labels are superseded by [Current Control Status](../docs/current-control-status.md).
## Portfolio-Safe Evidence Handling

This case study presents sanitized security findings and control patterns without exposing private source code, employee notes, ticket contents, asset identifiers, or internal company records.
