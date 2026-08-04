# Human-Governed AI Engineering Triage Case Study

| Metadata | Value |
|---|---|
| System | Internal engineering triage workflow |
| Case-study status | Implemented pending additional public evidence |
| Evidence level | `IMPLEMENTED_PENDING_PUBLIC_EVIDENCE` |
| As-of date | 2026-08-04 |
| Architecture | Current architecture |
| Validation status | Private workflow review |
| Known limitations | No private task data, webhook configuration, prompts, or execution logs are public. |

Evidence-state definitions are maintained in [the evidence model](../evidence/README.md), and current implementation status is governed by [Current Control Status](../docs/current-control-status.md).

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

## My Contribution and Validation

I identified or clarified security requirements, defined expected and adversarial behavior, directed AI-assisted implementation revisions where applicable, reviewed changes, tested acceptance criteria, documented outcomes, and coordinated adoption or deployment within my supported contribution boundary. I do not claim sole manual authorship, and private implementation code is not included.

## Controls and Evidence Basis

The controls below are reported from the evidence level in the metadata. They are not presented as publicly demonstrated unless linked to a runnable or inspectable public artifact.

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

## Expected Security and Business Benefit

- Faster feedback triage.
- Better visibility into security-sensitive reports.
- Reduced duplicate/noise processing.
- Safer use of AI in engineering workflows.
- Strong example of governance-aware AI adoption.

## Validation Method

Private workflow review. Relevant public evidence is indexed in [the evidence index](../evidence/evidence-index.md); synthetic artifacts demonstrate expected control behavior without reproducing private code.

## Sanitized Evidence

The public evidence is limited to portfolio-safe documentation, synthetic matrices, and the independent runnable lab. No production export is included.

## Outcome and Limitations

Described risk reductions are expected security benefits unless the text explicitly identifies an observed result. No private task data, webhook configuration, prompts, or execution logs are public.

## Status Authority

Legacy roadmap phase labels are superseded by [Current Control Status](../docs/current-control-status.md).
## Portfolio-Safe Evidence Handling

The public case study describes the workflow controls and safety model without exposing private Asana configuration, repository internals, or company implementation details.
