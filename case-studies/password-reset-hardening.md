# Fence Wizard Password Reset Hardening Case Study

## Summary

This case study documents password reset hardening work for Fence Wizard, an internal production business platform. The work focused on strengthening account recovery as an application security and identity governance workflow, not just adding a convenience feature.

The implementation evidence is based on Fence Wizard commit `371e1eac6c3b68b3df223c4687dab47263ab7ebc`, which hardened password reset with rate limiting, admin send-reset support, reset-token validation/resolve APIs, audit events, and shared authentication UI improvements.

## Problem

Forgot-password workflows are high-risk identity paths. If they are not carefully controlled, they can create opportunities for account takeover, reset-link abuse, email enumeration, excessive reset attempts, or unaudited administrative intervention.

Fence Wizard needed a safer account recovery flow that could support both user self-service and administrator-assisted recovery while preserving accountability, abuse resistance, and evidence for future governance review.

## Security Objectives

- Reduce password reset abuse risk.
- Limit excessive reset attempts by IP and account scope.
- Avoid unsafe manual password handling where possible.
- Make reset activity visible in audit records.
- Support administrator-assisted recovery through a controlled workflow.
- Validate reset tokens and reset tickets before allowing credential changes.
- Preserve portfolio-safe evidence without exposing private implementation details.

## Controls Implemented

- Self-service forgot-password rate limiting.
- Per-IP reset attempt throttling.
- Per-account/email reset request throttling.
- Cooldown controls for repeated reset email delivery.
- Admin send-reset email workflow for controlled account recovery.
- Reset-token validation and resolution APIs.
- Reset-ticket issue and verification logic.
- Audit events for reset requests and rate-limit abuse.
- Human-readable audit labels for reset-related activity.
- Credential lock and session revocation behavior for admin-triggered resets.
- Shared authentication UI shell for consistent login and recovery flows.

## Security Value

Password reset hardening improves identity security by making the recovery path more resistant to abuse and more reviewable after the fact. Rate limits reduce automated abuse. Token validation and ticket verification reduce the risk of accepting malformed, expired, or untrusted reset requests. Audit events make reset activity visible for administrative review and future detection engineering.

The admin send-reset workflow also improves governance because administrators can trigger a controlled recovery path without directly handling or setting a user's password in an informal way.

## Detection and Audit Value

The hardening work created useful event categories for future review and detection logic, including:

- Password reset requested.
- Password reset completed through email flow.
- Admin-triggered password reset email.
- Password reset rate limited.
- Account locked pending password reset.
- Credential lifecycle activity connected to reset workflows.

These events can help answer who initiated the action, what account was affected, when it occurred, whether the request was throttled, and whether abuse indicators were present.

## Business Impact

- Reduced manual password recovery risk.
- Improved account recovery reliability.
- Increased accountability for administrator-assisted recovery.
- Added abuse visibility for suspicious reset behavior.
- Strengthened the platform's access governance story.
- Created evidence that supports future security documentation, access reviews, and CMMC/NIST-style control alignment.

## Roadmap Alignment

- Phase 0: AppSec foundations.
- Phase 0: Authentication and account recovery hardening.
- Phase 0: Session security and audit logging.
- Phase 0: Governance workflows and operational controls.
- Phase 1 preview: Identity-aware cloud and application security.
- Phase 2 preview: Detection-ready event design.

## Portfolio-Safe Evidence Handling

This public case study summarizes the security controls, risk reduction, and governance value of the work without copying proprietary source code, internal routes, database details, secrets, or private company data.

## Interview Talking Points

- I helped harden a production password reset workflow by thinking about account recovery as a security control, not just a UX feature.
- The work connected application security, identity governance, audit logging, rate limiting, and operational support.
- The implementation created evidence useful for future access reviews, incident investigation, and detection engineering.
