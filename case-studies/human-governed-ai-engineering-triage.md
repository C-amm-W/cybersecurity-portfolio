# Human-Governed AI Engineering Triage Case Study

## Summary

This case study documents an AI-assisted feedback and engineering triage workflow designed with human approval, loop protection, duplicate detection, and safety boundaries.

## Problem

AI automation can speed up product feedback and engineering planning, but unsafe automation can also create operational risk if it changes work items, makes decisions without review, or triggers implementation without human approval.

## Security Objectives

- Use AI as an assistive triage layer, not an autonomous decision-maker.
- Preserve human approval before implementation.
- Avoid automation loops and duplicate processing.
- Identify security-sensitive feedback.
- Keep automated actions limited to comments and planning.
- Prevent destructive or unsafe automation behavior.

## Controls Implemented

- In-app feedback submission with user identity, role, page URL, written description, and optional screenshots.
- Asana task creation with email fallback when task creation or upload fails.
- AI triage comments added after feedback submission.
- Webhook loop protection using completion markers.
- Basic duplicate detection against recent tasks.
- Security escalation comments for security-sensitive issues.
- Acceptability screening before requesting an implementation plan.
- Cursor plan-only requests for acceptable engineering items.
- No automatic code changes, commits, pushes, or pull requests.
- Human approval required before implementation starts.

## Security Value

The strongest security value is the safety model. AI can summarize, classify, route, and propose a plan, but it cannot directly modify production work, assign tasks, move workflow states, or create code changes without human review.

## Business Impact

- Faster feedback triage.
- Better visibility into security-sensitive reports.
- Reduced duplicate/noise processing.
- Safer use of AI in engineering workflows.
- Strong example of governance-aware AI adoption.

## Roadmap Alignment

- Phase 0: Governance workflows and operational controls.
- Phase 0: Auditability and change-management discipline.
- Phase 2 preview: Detection-style event classification and triage.
- Phase 3 preview: AI security and human-governed automation.

## Portfolio-Safe Evidence Handling

The public case study describes the workflow controls and safety model without exposing private Asana configuration, repository internals, or company implementation details.
