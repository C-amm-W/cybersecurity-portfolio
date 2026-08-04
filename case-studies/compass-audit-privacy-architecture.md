# Compass Audit and Privacy Architecture Case Study

| Metadata | Value |
|---|---|
| System | Compass |
| Case-study status | Implemented in reviewed workflows |
| Evidence level | `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` |
| As-of date | 2026-08-04 |
| Architecture | Current architecture |
| Validation status | Sanitized privacy and authorization review |
| Known limitations | No private schema, employee record, prompt, or provider configuration is public. |

Evidence-state definitions are maintained in [the evidence model](../evidence/README.md), and current implementation status is governed by [Current Control Status](../docs/current-control-status.md).

## Summary

Compass is an internal review and 1:1 platform with security-relevant requirements around confidentiality, anonymized review flows, access requests, audit events, manager visibility, application provisioning, and privacy-preserving AI-assisted workflows.

The security architecture focuses on minimizing unnecessary exposure while preserving enough accountability for administrators and managers to operate the platform responsibly.

## Problem

HR and leadership-review systems handle sensitive employee information. A useful platform must support operational workflows while protecting reviewer identity, limiting unnecessary data exposure, separating manager-only context from employee-visible records, and maintaining auditability for administrative actions.

The key risk is not only unauthorized entry into the application. It is also overexposure inside legitimate workflows—for example, returning internal-note metadata, manager-only content, transcripts, or sensitive identifiers to users who do not need them.

## Security Objectives

- Protect sensitive employee and review data.
- Preserve reviewer anonymity where required by workflow design.
- Support access requests and administrative review.
- Maintain audit events for important actions.
- Minimize employee-facing and requester-facing data exposure.
- Separate application provisioning from in-application Persona Engine permissions.
- Protect AI-assisted 1:1 workflows with encryption and data minimization.
- Reduce object-probing and metadata-disclosure risks.

## My Contribution and Validation

I identified or clarified security requirements, defined expected and adversarial behavior, directed AI-assisted implementation revisions where applicable, reviewed changes, tested acceptance criteria, documented outcomes, and coordinated adoption or deployment within my supported contribution boundary. I do not claim sole manual authorship, and private implementation code is not included.

## Controls and Evidence Basis

The controls below are reported from the evidence level in the metadata. They are not presented as publicly demonstrated unless linked to a runnable or inspectable public artifact.

- Anonymous reviewer submission model.
- Review cycles with controlled open and closed states.
- Access request rows for administrator review.
- Matching audit events for seeded test actions.
- Manager dashboards and report workflows.
- Transcript encryption for 1:1 records.
- Direct-to-object-storage audio upload using presigned URLs.
- Audio deletion on finalization.
- Employee-facing redaction that excludes transcript, audio key, and manager notes.
- Server-side AI calls so provider keys are not exposed to the browser.
- Per-user application provisioning separate from Compass action permissions.
- Persona Engine ownership of in-application access and experience decisions.
- Restricted visibility for internal notes and manager-only metadata.
- Equivalent not-found/unauthorized behavior where identifier probing would create disclosure risk.
- Auditability for access decisions and administrative actions.

## Privacy-Aware Authorization Principles

### Return Only What the User Needs

Access to a parent record does not automatically justify returning every field. Sensitive transcripts, manager notes, internal comments, storage identifiers, and review metadata are filtered based on the caller's role and workflow context.

### Separate Entry from Authority

Microsoft identity confirms who the user is. Application provisioning controls whether the user may enter Compass. The Persona Engine and feature permissions determine what the user may see or do after entry.

### Protect Metadata, Not Only Content

Even when note content is hidden, counts, event labels, timestamps, or object identifiers can reveal that restricted activity exists. Privacy controls therefore consider both content and metadata.

### Minimize AI Data Exposure

AI-assisted workflows use server-side calls, encrypted records, temporary audio handling, and deletion after processing to reduce the amount of sensitive material retained or exposed.

## Security Value

This work demonstrates privacy-aware application security. The focus is not only whether a feature works or whether a route is authenticated, but whether each user receives the minimum information required for their role and whether sensitive workflow context remains compartmentalized.

## Expected Security and Business Benefit

- Improved confidence in HR-style review and 1:1 workflows.
- Reduced unnecessary exposure of employee records and manager context.
- Clearer governance over application entry and in-application authority.
- Created audit-ready evidence for access requests and review activity.
- Established reusable privacy patterns for AI-assisted internal tools.
- Reduced the risk of metadata leakage and identifier-based probing.

## Validation Method

Sanitized privacy and authorization review. Relevant public evidence is indexed in [the evidence index](../evidence/evidence-index.md); synthetic artifacts demonstrate expected control behavior without reproducing private code.

## Sanitized Evidence

The public evidence is limited to portfolio-safe documentation, synthetic matrices, and the independent runnable lab. No production export is included.

## Outcome and Limitations

Described risk reductions are expected security benefits unless the text explicitly identifies an observed result. No private schema, employee record, prompt, or provider configuration is public.

## Status Authority

Legacy roadmap phase labels are superseded by [Current Control Status](../docs/current-control-status.md).
## Portfolio-Safe Evidence Handling

The public case study describes the security architecture and privacy controls without exposing employee data, private repository code, internal prompts, storage identifiers, access tokens, or business records.
