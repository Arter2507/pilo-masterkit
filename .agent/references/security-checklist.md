# 🛡️ Security Checklist & Hardening

> **Purpose**: A comprehensive security checklist for Agents and developers to adhere to when writing code and auditing systems.

---

## 1. Secrets Management

- [ ] **Zero Secrets in Code**: Absolutely never commit API keys, passwords, tokens, or certificates to the repository.
- [ ] Use environment variable files (`.env`), AWS Secrets Manager, or HashiCorp Vault. Ensure `.env` is listed in `.gitignore`.
- [ ] Do not log sensitive information (PII, passwords, tokens) to the console or log files.

## 2. Authentication & Authorization

- [ ] Verify access permissions at every Endpoint/Action level. Do not rely solely on hiding UI elements.
- [ ] Use secure, salted password hashing algorithms (e.g., `bcrypt`, `argon2`). Never roll your own crypto.
- [ ] Implement short-lived Access Tokens (JWT) coupled with a secure Refresh Token mechanism.
- [ ] Enforce the principle of Least Privilege for all roles and services.

## 3. Input Validation & Sanitization

- [ ] Never trust input originating from the client.
- [ ] Prefer Whitelisting over Blacklisting for data validation.
- [ ] Prevent SQL Injection (SQLi) by strictly using Parameterized Queries or ORMs instead of string concatenation.
- [ ] Prevent XSS by properly escaping output data and enforcing a strict Content Security Policy (CSP).

## 4. Web & API Security

- [ ] Enable CSRF (Cross-Site Request Forgery) protection on all state-changing requests (POST, PUT, DELETE).
- [ ] Implement Rate Limiting to mitigate Brute Force and DDoS attacks.
- [ ] Set essential security headers: `Strict-Transport-Security` (HSTS), `X-Frame-Options`, `X-Content-Type-Options`.

## 5. Dependencies

- [ ] Regularly scan for known vulnerabilities in dependencies (e.g., `npm audit`, `pip-audit`, `cargo audit`).
- [ ] Beware of Supply Chain Attacks: Only use reputable libraries and always lock exact dependency versions.

## 6. Business Logic Flaws

- [ ] Prevent Insecure Direct Object References (IDOR): If a user requests `/api/orders/123`, explicitly verify that the current user owns or has permission to view `order 123`.
- [ ] Prevent Mass Assignment: Strictly constrain which fields a user is permitted to update.

---
> **Red Alert**: Any pull request or modification related to Auth, Billing, or Permissions that lacks a dedicated Security Review must be halted immediately.
