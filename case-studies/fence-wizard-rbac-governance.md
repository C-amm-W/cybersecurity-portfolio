# Fence Wizard RBAC Governance Case Study

| Metadata | Value |
|---|---|
| System | Fence Wizard |
| Case-study status | Implemented; ongoing validation |
| Evidence level | `ONGOING_VALIDATION` |
| As-of date | 2026-08-04 |
| Architecture | Current architecture |
| Validation status | Sanitized implementation review and regression summary |
| Known limitations | Public repository does not contain proprietary migrations, routes, or production tests. |

Evidence-state definitions are maintained in [the evidence model](../evidence/README.md), and current implementation status is governed by [Current Control Status](../docs/current-control-status.md).

## Summary

Fence Wizard is an internal multi-department business platform that required stronger access governance as more workflows, roles, applications, and sensitive operational functions were added. The RBAC effort evolved from a foundational role-and-permission model into a broader production authorization-hardening program.

The work focused on replacing informal role assumptions and scattered legacy checks with explicit permissions, centralized enforcement patterns, multi-role resolution, auditable administrative actions, and documented exceptions for intentionally public or service-facing routes.

## Problem

As the platform expanded, a single legacy role field could no longer represent how employees actually worked. Users could hold multiple responsibilities, operational teams needed scoped capabilities, and connected applications required access decisions that did not always belong inside the same permission model.

The security risks included:

- Excessive access caused by broad role assumptions.
- Inconsistent authorization between UI components and backend routes.
- Hardcoded access logic that conflicted with centralized policy.
- Accidental-public or incompletely protected API routes.
- Stale administrative updates overwriting newer access decisions.
- Application-entry permissions being confused with in-application authorization.

## Security Objectives

- Enforce least privilege and deny-by-default authorization.
- Make backend permission checks authoritative.
- Support users with multiple legitimate business roles.
- Protect privileged role and permission administration.
- Separate authentication, application provisioning, and feature authorization.
- Improve accountability through auditable access changes.
- Build reusable authorization patterns for additional internal applications.

## My Contribution and Validation

I identified or clarified security requirements, defined expected and adversarial behavior, directed AI-assisted implementation revisions where applicable, reviewed changes, tested acceptance criteria, documented outcomes, and coordinated adoption or deployment within my supported contribution boundary. I do not claim sole manual authorship, and private implementation code is not included.

## Controls and Evidence Basis

The controls below are reported from the evidence level in the metadata. They are not presented as publicly demonstrated unless linked to a runnable or inspectable public artifact.

- Database-driven RBAC architecture with a canonical permission registry.
- Multi-role permission resolution rather than relying only on one legacy role value.
- Permission-based route, navigation, dashboard, and workflow enforcement.
- Centralized authorization wrappers for authenticated API routes.
- Route inventory and phased authorization sweeps across high-priority and lower-risk endpoints.
- Explicit documentation of intentional public, OAuth, portal, cron, and service exceptions.
- Protected administrative-role and permission-assignment workflows.
- Stale-write protection for role-assignment changes.
- Permission override governance with expiration and auditability.
- Session invalidation and access re-evaluation after sensitive account changes.
- Application-access registry separated from action-level Compass permissions.
- Regression validation for role grants, route enforcement, and protected workflows.

## Production Hardening Progression

The implementation was not a single feature release. It progressed through several stages:

1. Establish the role, permission, assignment, and administrative-account foundation.
2. Harden privileged account administration and access-change auditing.
3. Expand the model to multi-role users and operational sub-roles.
4. Replace legacy role-dependent paths with permission-aware helpers.
5. Sweep backend routes for missing or inconsistent authorization.
6. Document legitimate exceptions rather than leaving them implicitly exposed.
7. Separate downstream application provisioning from Fence Wizard action permissions.
8. Validate changes with migrations, tests, route inventories, and regression checks.

## Evidence Notes

Sanitized repository evidence supports this case study through:

- Role and permission migrations.
- Centralized authorization helpers.
- Protected admin and analytics surfaces.
- Multi-role and sub-role resolution.
- Route-enforcement inventory documentation.
- Permission regression tests.
- Audited administrative changes.
- Application-access provisioning separated from in-app permissions.

The public portfolio describes the control design and outcomes without copying private source code or exposing company-specific policy data.

## Governance Features

- Permission changes are traceable.
- Temporary exceptions can be documented, expired, and reviewed.
- Authorization decisions follow reusable patterns.
- Administrative actions are auditable.
- Access boundaries can be regression-tested.
- Intentionally public or service-facing routes are documented as exceptions.
- Application provisioning decisions can be reviewed separately from feature permissions.

## Expected Security and Business Benefit

- Reduced authorization ambiguity across departments and workflows.
- Lowered the risk of accidental access to customer, operational, inventory, and administrative data.
- Improved consistency between UI visibility and backend enforcement.
- Reduced dependence on hardcoded access logic.
- Established a stronger foundation for future access reviews and compliance evidence.
- Created reusable identity and authorization architecture for connected internal tools.

## Validation Method

Sanitized implementation review and regression summary. Relevant public evidence is indexed in [the evidence index](../evidence/evidence-index.md); synthetic artifacts demonstrate expected control behavior without reproducing private code.

## Sanitized Evidence

The public evidence is limited to portfolio-safe documentation, synthetic matrices, and the independent runnable lab. No production export is included.

## Outcome and Limitations

Described risk reductions are expected security benefits unless the text explicitly identifies an observed result. Public repository does not contain proprietary migrations, routes, or production tests.

## Status Authority

Legacy roadmap phase labels are superseded by [Current Control Status](../docs/current-control-status.md).
## Lessons Learned

Authorization maturity requires more than creating roles. It requires authoritative backend enforcement, migration away from legacy assumptions, documented trust boundaries, regression testing, and governance around exceptions and privileged changes.
