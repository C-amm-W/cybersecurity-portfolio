# Evidence Model

**As of:** 2026-08-04

This directory contains sanitized or wholly synthetic evidence. It contains no production export, private source code, customer record, employee record, secret, token, internal URL, or production hostname.

## Evidence states

- `PUBLICLY_DEMONSTRATED` — runnable or directly inspectable evidence exists in this repository.
- `PRIVATE_IMPLEMENTATION_SANITIZED_EVIDENCE` — implementation exists privately and public evidence is limited to sanitized artifacts.
- `IMPLEMENTED_PENDING_PUBLIC_EVIDENCE` — implementation is reported, but a sufficient public evidence artifact has not yet been added.
- `HISTORICAL_RETIRED` — a previously used architecture or control path is no longer current.
- `DESIGN_ONLY` — a proposed design or policy concept, not an implementation claim.
- `PLANNED` — approved or described future work that has not been implemented.
- `ONGOING_VALIDATION` — implemented work whose coverage continues to be reviewed or expanded.

Synthetic matrices demonstrate security reasoning and expected behavior. They do not prove that a private production system uses identical code or configuration.
