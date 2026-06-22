# Compass Audit and Privacy Architecture Case Study

## Summary

Compass is an internal review and 1:1 platform with security-relevant requirements around confidentiality, anonymized review flows, access requests, audit events, manager visibility, and privacy-preserving AI-assisted workflows.

## Problem

HR and leadership-review systems handle sensitive employee information. A useful platform must support operational workflows while protecting reviewer identity, limiting unnecessary data exposure, and preserving auditability for administrative actions.

## Security Objectives

- Protect sensitive employee and review data.
- Preserve reviewer anonymity where required by workflow design.
- Support access requests and administrative review.
- Maintain audit events for important actions.
- Minimize employee-facing data exposure.
- Protect AI-assisted 1:1 workflows with encryption and data minimization.

## Controls Implemented

- Anonymous reviewer submission model.
- Review cycles with controlled open and closed states.
- Access request rows for administrator review.
- Matching audit events for seeded test actions.
- Manager dashboards and report workflows.
- Transcript encryption for 1:1 records.
- Direct-to-object-storage audio upload using presigned URLs.
- Audio deletion on finalization.
- Employee-facing redaction that excludes transcript, audio key, and manager notes.
- Server-side AI calls so AI provider keys are not exposed to the browser.

## Security Value

This work demonstrates privacy-aware application security. The focus is not only whether a feature works, but whether the system limits data exposure, preserves auditability, and separates manager-only information from employee-visible records.

## Business Impact

- Improved confidence in HR-style review workflows.
- Reduced unnecessary exposure of sensitive employee records.
- Created audit-ready evidence for access requests and review activity.
- Established a reusable privacy pattern for AI-assisted internal tools.

## Roadmap Alignment

- Phase 0: Audit logging and governance workflows.
- Phase 0: Operational controls.
- Phase 1 preview: Cloud-integrated application security.
- Phase 3 preview: AI security and privacy-aware AI workflow design.

## Portfolio-Safe Evidence Handling

The public case study describes the security architecture and privacy controls without exposing employee data, private repository code, or internal business records.
