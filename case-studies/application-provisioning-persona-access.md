# Application Provisioning and Persona-Based Access Case Study

## Summary

This case study documents the separation of identity authentication, application provisioning, and in-application authorization across the Fence Wizard and Compass ecosystem.

The architecture moved away from treating downstream application access as another Fence Wizard action permission. Instead, users receive explicit application-access flags, while Compass remains responsible for its own Persona Engine and feature-level decisions.

## Problem

Connected internal applications often blur three separate questions:

1. Has the user's identity been authenticated?
2. Is the user provisioned to enter a particular application?
3. What may the user do after entering that application?

Combining those questions in one RBAC layer creates excessive coupling. It can also make onboarding, offboarding, access reviews, and future application growth harder to govern.

## Security Objectives

- Separate authentication from application access.
- Separate application entry from in-application authorization.
- Support per-user provisioning instead of broad role assumptions.
- Make access changes administratively visible and auditable.
- Preserve each application's ownership of its internal permission model.
- Create a scalable registry for additional internal applications.

## Controls Implemented

- Central application registry for recognized internal applications.
- Per-user application-access flags.
- Administrative provisioning interface for granting and removing application access.
- Audit support for application-access changes.
- Removal and deactivation of legacy downstream action permissions.
- Direct Azure AD authentication for Compass.
- Persona Engine responsibility for contextual access inside Compass.
- Eligibility restrictions for users who should not receive downstream application access.
- Documentation of identity, provisioning, and authorization ownership boundaries.

## Control Boundaries

### Identity Provider

Microsoft Azure AD authenticates the user's organizational identity.

### Provisioning Layer

The application-access registry determines whether the authenticated user is provisioned for a connected application.

### Application Authorization Layer

Compass evaluates personas, feature permissions, visibility rules, and workflow context after entry.

### Governance Layer

Administrative changes are traceable and can support onboarding, access review, and offboarding processes.

## Security Value

Separating the control layers reduces unintended trust inheritance. A valid organizational identity does not automatically provide access to every application, and access to an application does not automatically provide authority over all of its features or data.

The design also makes it easier to reason about access reviews because each decision has a clear owner and purpose.

## Business Impact

- Cleaner onboarding and offboarding decisions.
- Reduced coupling between Fence Wizard and Compass authorization models.
- More scalable governance for future internal applications.
- Better evidence for identity and application-access reviews.
- Lower risk of broad role grants unintentionally enabling unrelated applications.

## Roadmap Alignment

- Phase 0: Identity governance and access control.
- Phase 0: Application ecosystem documentation.
- Phase 0: Governance workflows and auditability.
- Phase 1 preview: Cloud identity and IAM security.

## Portfolio-Safe Evidence Handling

This case study describes the control boundaries and governance model without exposing employee access records, internal application identifiers, private source code, secrets, or company-specific permission data.
