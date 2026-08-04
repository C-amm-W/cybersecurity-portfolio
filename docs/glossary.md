# Security Architecture Glossary

**As of:** 2026-08-04

- **Authentication:** confirmation of a user or service identity and the validity of its session or credential.
- **Application provisioning:** the per-user eligibility decision that permits entry to an application; it does not grant every feature permission.
- **Role-based access control (RBAC):** assignment of canonical permissions through one or more business roles.
- **Object-level authorization:** a decision about whether the caller may act on a particular record after route permission succeeds.
- **Field-level filtering:** removal of fields or derived metadata the caller is not authorized to receive.
- **Persona:** application-specific workflow context used to shape experience or contextual decisions; it does not replace authoritative permissions.
- **Permission override:** a documented, expiring allow or deny exception evaluated after role grants, with explicit deny taking precedence.
- **Service-to-service trust:** authentication and authorization of one service calling another, independently of an end-user browser session.
- **PMA:** a synthetic portfolio role representing proposal or project-management assistant workflows.
- **PM profile:** capacity or assignment context associated with project-management workflows, not an RBAC role.

Current identity-provider references use **Microsoft Entra ID**. Historical references may say **Azure Active Directory, now Microsoft Entra ID**.
