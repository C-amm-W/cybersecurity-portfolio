# Microsoft SSO and Secure App Handoff Case Study

| Metadata | Value |
|---|---|
| System | Fence Wizard and Compass |
| Case-study status | Current identity path implemented; handoff retired |
| Evidence level | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` |
| As-of date | 2026-08-04 |
| Architecture | Current and historical architecture |
| Validation status | Sanitized architecture and migration review |
| Known limitations | No tenant configuration, callback URL, credential, or private route is public. |

Evidence-state definitions are maintained in [the evidence model](../evidence/README.md), and current implementation status is governed by [Current Control Status](../docs/current-control-status.md).

## Summary

This case study documents the evolution of identity and trust-boundary design connecting Microsoft SSO, Fence Wizard access governance, and the Compass application.

The architecture progressed from a signed cross-application handoff model to direct Microsoft Entra ID authentication with separate application provisioning and in-application authorization responsibilities.

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

### Historical: Signed Cross-Application Handoff

The initial design allowed Fence Wizard to issue a short-lived, signed handoff for Compass. The receiving flow validated the handoff through authenticated internal endpoints, re-evaluated the user and session, and returned only the identity and authorization context needed to continue.

Security controls included:

- Signed handoff tokens.
- Service-authenticated validation requests.
- Session-token validation.
- User identity resolution.
- Application eligibility checks.
- Audit events for allowed, denied, and failed service-authentication decisions.
- Restricted eligibility for inappropriate external or subcontractor roles.

### Transitional: Centralized Authorization and Direct Microsoft Entra ID Authentication

The architecture later moved Compass to direct Microsoft Entra ID authentication. This reduced dependence on Fence Wizard session handoff and allowed Compass to authenticate users through the organization's identity provider.

Associated improvements included:

- Microsoft Entra ID OAuth/MSAL integration.
- Production callback and redirect corrections.
- User-facing loading states during SSO redirects.
- Standalone destination-application access checks.
- Removal of obsolete handoff and internal authorization paths after migration.

### Current: Per-User Provisioning and Persona Engine Authorization

Application entry was separated from action-level RBAC. A per-user application-access registry became the provisioning layer, while Compass retained responsibility for its own Persona Engine and feature authorization.

This separation clarifies that:

- Microsoft Entra ID authenticates identity.
- Application provisioning determines whether the user may enter Compass.
- Compass personas and permissions determine what the user may do inside Compass.
- Access changes remain auditable and administratively reviewable.

## My Contribution and Validation

I identified or clarified security requirements, defined expected and adversarial behavior, directed AI-assisted implementation revisions where applicable, reviewed changes, tested acceptance criteria, documented outcomes, and coordinated adoption or deployment within my supported contribution boundary. I do not claim sole manual authorship, and private implementation code is not included.

## Controls and Evidence Basis

The controls below are reported from the evidence level in the metadata. They are not presented as publicly demonstrated unless linked to a runnable or inspectable public artifact.

- Microsoft SSO login and redirect handling.
- Public application URL resolution for production callbacks.
- Signed handoff tokens during the transitional architecture.
- Authenticated internal validation endpoints.
- Session and eligibility revalidation.
- Audited allow, deny, and service-authentication decisions.
- Direct Microsoft Entra ID authentication for Compass.
- Per-user application-access registry and administrative provisioning interface.
- Retirement of legacy Compass action permissions and obsolete trust paths.
- Separation between authentication, app provisioning, and feature authorization.

## Security Value

The primary security value is architectural separation. Identity confirmation does not automatically grant application entry, and application entry does not automatically grant broad feature access. Each decision is made and governed at the appropriate layer.

The evolution also demonstrates an important security-engineering principle: transitional controls should be documented, validated, and retired when a stronger architecture replaces them.

## Expected Security and Business Benefit

- Improved sign-in reliability for internal users.
- Reduced support friction around callback and redirect failures.
- Stronger trust boundaries between connected systems.
- Clearer onboarding and offboarding decisions for application access.
- Reduced coupling between Fence Wizard permissions and Compass authorization.
- Better identity-governance evidence for future reviews.

## Validation Method

Sanitized architecture and migration review. Relevant public evidence is indexed in [the evidence index](../evidence/evidence-index.md); synthetic artifacts demonstrate expected control behavior without reproducing private code.

## Sanitized Evidence

The public evidence is limited to portfolio-safe documentation, synthetic matrices, and the independent runnable lab. No production export is included.

## Outcome and Limitations

Described risk reductions are expected security benefits unless the text explicitly identifies an observed result. No tenant configuration, callback URL, credential, or private route is public.

## Status Authority

Legacy roadmap phase labels are superseded by [Current Control Status](../docs/current-control-status.md).
## Portfolio-Safe Evidence Handling

The public case study documents the identity decisions and control evolution without exposing private tokens, secrets, callback endpoints, internal route details, or employee records.
