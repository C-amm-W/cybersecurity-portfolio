# Secure External Vendor Portal Case Study

| Metadata | Value |
|---|---|
| System | External vendor response portal |
| Case-study status | Implemented |
| Evidence level | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` |
| As-of date | 2026-08-04 |
| Architecture | Current architecture |
| Validation status | Sanitized threat/control review |
| Known limitations | No token values, vendor data, private documents, routes, or production test output is public. |

Evidence-state definitions are maintained in [the evidence model](../evidence/README.md), and current implementation status is governed by [Current Control Status](../docs/current-control-status.md).

## Summary

This case study documents the security design of an external vendor response portal used to replace unauthenticated, state-changing email links.

The goal was to let outside vendors confirm rentals, submit line-item availability and pricing, acknowledge delivery or pickup, and upload supporting documents without creating a full internal account—while still protecting workflow integrity and company data.

## Problem

State-changing links embedded directly in email are risky. Security scanners and link-preview services may automatically open those URLs, unintentionally triggering application actions. Long-lived bearer links can also be forwarded, replayed, or discovered in logs and inboxes.

The external workflow needed a stronger design that remained usable on mobile devices and did not expose private internal records.

## Security Objectives

- Eliminate state changes from unauthenticated GET requests.
- Protect portal links against database disclosure and casual forwarding.
- Require explicit user confirmation before workflow changes.
- Reduce automated-link-scanner and replay risks.
- Limit information returned during failed authentication.
- Protect uploaded vendor documents.
- Preserve auditability for rejected and successful actions.
- Prevent external actions from moving workflows backward.

## My Contribution and Validation

I identified or clarified security requirements, defined expected and adversarial behavior, directed AI-assisted implementation revisions where applicable, reviewed changes, tested acceptance criteria, documented outcomes, and coordinated adoption or deployment within my supported contribution boundary. I do not claim sole manual authorship, and private implementation code is not included.

## Controls and Evidence Basis

The controls below are reported from the evidence level in the metadata. They are not presented as publicly demonstrated unless linked to a runnable or inspectable public artifact.

- Replaced multiple state-changing email links with one hosted portal entry point.
- Stored only cryptographic token hashes rather than raw portal tokens.
- Rotated tokens when new portal invitations were sent.
- Supported token revocation and expiration.
- Used generic failure responses for invalid, expired, revoked, or unknown tokens.
- Applied rate limiting before sensitive portal resolution.
- Added a secondary access factor based on information included in the legitimate business communication.
- Required explicit POST actions for availability, decline, delivery, extension, and pickup decisions.
- Logged rejected portal activity as security events.
- Prevented workflow actions from moving a request backward from a later state.
- Stored vendor documents in private storage.
- Served documents through authenticated, ownership-checked routes.
- Restricted accepted upload formats and applied document policy validation.
- Added no-index behavior and minimized server-rendered sensitive information.

## Threat Scenarios Addressed

### Email Security Scanner Prefetch

Automated scanners may follow links before the vendor sees the message. Moving all state changes behind an interactive portal prevents a preview request from accepting, declining, or updating a rental.

### Database Disclosure

If a portal-token table were exposed, hashed token storage would prevent the stored value from being used directly as a portal credential.

### Forwarded Link

A secondary access factor reduces the value of possessing the URL alone.

### Token Replay

Rotation, expiration, revocation, and state-transition guards limit reuse.

### Resource Enumeration

Generic error responses avoid confirming whether a particular portal token, request, or document exists.

### Malicious or Accidental Upload

Private storage, format validation, ownership checks, and controlled download routes reduce document-handling risk.

## Security Value

The portal demonstrates how to build a limited external workflow without extending internal trust to outside users. It combines token security, interaction design, workflow guards, document protection, and auditability.

## Expected Security and Business Benefit

- Reduced risk of automated email scanners changing business records.
- Improved vendor usability without requiring internal accounts.
- Strengthened integrity of rental confirmation and delivery workflows.
- Improved protection for vendor receipts and supporting documents.
- Created a reusable pattern for secure external response portals.

## Validation Method

Sanitized threat/control review. Relevant public evidence is indexed in [the evidence index](../evidence/evidence-index.md); synthetic artifacts demonstrate expected control behavior without reproducing private code.

## Sanitized Evidence

The public evidence is limited to portfolio-safe documentation, synthetic matrices, and the independent runnable lab. No production export is included.

## Outcome and Limitations

Described risk reductions are expected security benefits unless the text explicitly identifies an observed result. No token values, vendor data, private documents, routes, or production test output is public.

## Status Authority

Legacy roadmap phase labels are superseded by [Current Control Status](../docs/current-control-status.md).
## Portfolio-Safe Evidence Handling

This case study describes the control architecture without publishing raw tokens, secrets, vendor information, internal endpoints, private documents, or proprietary workflow data.
