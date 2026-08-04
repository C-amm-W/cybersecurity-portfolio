# Role-Permission Simulation Lab

**As of:** 2026-08-04
**Evidence state:** `PUBLICLY_DEMONSTRATED`
**Data classification:** Entirely synthetic; independent of private implementations.

## Purpose

This runnable TypeScript lab demonstrates multi-role additive permission resolution, deny-by-default authorization, explicit-deny precedence, expiring overrides, unknown-role and unknown-permission rejection, application provisioning, object ownership, field-level filtering, fail-closed resolver behavior, and synthetic audit-event creation.

## Requirements and commands

Node.js 22.18 or newer is required for native TypeScript type stripping. TypeScript is used for static checking.

```bash
npm install
npm test
npm run typecheck
```

## Structure

- `src/` contains the synthetic resolver and layered authorization controls.
- `data/` contains obviously synthetic users, roles, and overrides.
- `tests/` contains runnable positive and negative security tests.

## Security decisions

1. Role permissions combine additively.
2. Active explicit denies are evaluated after allows and take precedence.
3. Expired overrides do not affect the role baseline.
4. Unknown roles and resolver errors fail closed.
5. Unknown permissions are rejected rather than silently created.
6. Application provisioning is checked independently of feature permission.
7. Route permission does not replace object ownership.
8. Field filtering removes restricted values from returned objects.
9. Every authorization result returns a synthetic audit-event representation.

## Limitations

This is a compact teaching artifact, not a production authorization library. It uses an in-memory model, does not persist events, and does not implement distributed clocks, database transactions, cryptographic identity, or policy administration. Its role and permission names are synthetic and do not reproduce private schemas.
