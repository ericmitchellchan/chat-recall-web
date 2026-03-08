# Chat Recall Web

## Overview
Next.js 15 (App Router) frontend for Chat Recall SaaS. Tailwind CSS 4, TypeScript, pnpm.

## Testing
```
pnpm build
```

## Conventions
- Next.js App Router (src/app/ directory)
- Tailwind CSS 4 via @tailwindcss/postcss
- pnpm for package management
- Read existing code before modifying
- Run `pnpm build` before declaring work complete

### Orchestration Workflow

**Canonical spec**: `nightshift/docs/workflow-spec.md` — full 7-phase workflow (decomposition, review, relationships, execution, verification, exception handling, rollback).

#### Sub-Agent Rules
- Read the full ticket + all blocked-by and related tickets before starting
- **Ask, don't assume** — surface specific questions on the ticket, move to the next clear ticket
- Stay in scope — out-of-scope work becomes a **Request** ticket, not action
- Do not proceed on parts with unanswered **Open Questions**
- Paste context into tickets — do not link to files expecting agents to find them

#### When Things Go Wrong
- **Contract mismatch** (blocker output != expectation): Stop, comment on ticket, wait for orchestrator
- **Missing dependency** (not in any ticket): Stop, comment "Blocked — [thing] required for [reason]"
- **Design-level problem**: Create a Request ticket, orchestrator pauses epic
- **Persistent test failure**: Comment what was tried and why it failed, do not bypass the Stop hook

#### Execution Constraints
- No two Tasks modify the same file (read-only overlap is fine)
- Foundation first — shared types/utilities before features
- Convergence files (barrel exports, route configs) get a dedicated integration task that runs last
- Serial epics per-project; parallel across different projects is fine
- One task, one session — implement, verify, exit
