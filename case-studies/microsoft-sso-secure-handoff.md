# Microsoft SSO and Secure App Handoff Case Study

## Summary

This case study documents the evolution of identity and trust-boundary design connecting Microsoft SSO, Fence Wizard access governance, and the Compass application.

The architecture progressed from a signed cross-application handoff model to direct Azure AD authentication with separate application provisioning and in-application authorization responsibilities.

## Problem

As internal applications expand, users expect a seamless sign-in experience across tools. That convenience creates security risk when authentication, callback handling, session validation, application access, and downstream authorization are treated as one control.

A secure design needed to answer several separate questions:

- Who is the user?
- Is the authentication session valid?
- Is the user provisioned for the destination application?
- What can the user do after entering that application?
- How are allowed and denied decisions audited?

## Security Objectives

- Improve Microsoft SSO reliability and production callback behavior.
- Protect inter-application trust boundaries.
- Validate signed handoff and session state during the transitional architecture.
- Keep application provisioning separate from feature-level authorization.
- Ensure the destination application remains responsible for its own persona and permission model.
- Record security-relevant allow, deny, and service-authentication outcomes.
- Retire legacy trust paths after the stronger design is adopted.

## Architecture Evolution

### Phase 1: Signed Cross-Application Handoff

The initial design allowed Fence Wizard to issue a short-lived, signed handoff for Compass. The receiving flow validated the handoff through authenticated internal endpoints, re-evaluated the user and session, and returned only the identity and authorization context needed to continue.

Security controls included:

- Signed handoff tokens.
- Service-authenticated validation requests.
- Session-token validation.
- User identity resolution.
- Application eligibility checks.
- Audit events for allowed, denied, and failed service-authentication decisions.
- Restricted eligibility for inappropriate external or subcontractor roles.

### Phase 2: Direct Azure AD Authentication

The architecture later moved Compass to direct Azure AD authentication. This reduced dependence on Fence Wizard session handoff and allowed Compass to authenticate users through the organization's identity provider.

Associated improvements included:

- Azure AD OAuth/MSAL integration.
- Production callback and redirect corrections.
- User-facing loading states during SSO redirects.
- Standalone destination-application access checks.
- Removal of obsolete handoff and internal authorization paths after migration.

### Phase 3: Separate Application Provisioning

Application entry was separated from action-level RBAC. A per-user application-access registry became the provisioning layer, while Compass retained responsibility for its own Persona Engine and feature authorization.

This separation clarifies that:

- Microsoft SSO authenticates identity.
- Application provisioning determines whether the user may enter Compass.
- Compass personas and permissions determine what the user may do inside Compass.
- Access changes remain auditable and administratively reviewable.

## Controls Implemented

- Microsoft SSO login and redirect handling.
- Public application URL resolution for production callbacks.
- Signed handoff tokens during the transitional architecture.
- Authenticated internal validation endpoints.
- Session and eligibility revalidation.
- Audited allow, deny, and service-authentication decisions.
- Direct Azure AD authentication for Compass.
- Per-user application-access registry and administrative provisioning interface.
- Retirement of legacy Compass action permissions and obsolete trust paths.
- Separation between authentication, app provisioning, and feature authorization.

## Security Value

The primary security value is architectural separation. Identity confirmation does not automatically grant application entry, and application entry does not automatically grant broad feature access. Each decision is made and governed at the appropriate layer.

The evolution also demonstrates an important security-engineering principle: transitional controls should be documented, validated, and retired when a stronger architecture replaces them.

## Business Impact

- Improved sign-in reliability for internal users.
- Reduced support friction around callback and redirect failures.
- Stronger trust boundaries between connected systems.
- Clearer onboarding and offboarding decisions for application access.
- Reduced coupling between Fence Wizard permissions and Compass authorization.
- Better identity-governance evidence for future reviews.

## Roadmap Alignment

- Phase 0: Session security and authentication.
- Phase 0: Identity governance and application access.
- Phase 0: Governance-aware platform security.
- Phase 1 preview: Identity-aware cloud and application security.

## Portfolio-Safe Evidence Handling

The public case study documents the identity decisions and control evolution without exposing private tokens, secrets, callback endpoints, internal route details, or employee records.
