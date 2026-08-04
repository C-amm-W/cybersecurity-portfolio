# Secure External Vendor Portal Case Study

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

## Controls Implemented

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

## Business Impact

- Reduced risk of automated email scanners changing business records.
- Improved vendor usability without requiring internal accounts.
- Strengthened integrity of rental confirmation and delivery workflows.
- Improved protection for vendor receipts and supporting documents.
- Created a reusable pattern for secure external response portals.

## Roadmap Alignment

- Phase 0: AppSec foundations and secure workflow design.
- Phase 0: Session, token, and audit controls.
- Phase 0: Operational risk reduction.
- Phase 1 preview: Cloud-hosted application security.

## Portfolio-Safe Evidence Handling

This case study describes the control architecture without publishing raw tokens, secrets, vendor information, internal endpoints, private documents, or proprietary workflow data.
