# CRITICAL RULES - MUST FOLLOW

## RESPONSES

- Keep responses concise and to the point - unless the user asks otherwise

## PLANNING MODE

- Always ask clarifying questions
- Never assume design, tech stack or features
- Use deep-dive sub-agents to assist with research
- Use deep-dive sub-agents to review the different aspects of your plan before presenting to the user

## EDIT / BUILD / CHANGE MODE

- Never implement features yourself when possible - use sub-agents!
- Identify changes from the plan that can be implemented in parallel, and use sub-agents to implement the features efficiently
- When using sub-agents to implement features, act as a coordinator only
- Use the best model for the task - premium models for complex tasks (like coding) and mid-tier models for simpler tasks, like documentation
- After completing features (large or small), always run commands like lint, type check and next build to check code quality



## VERIFICATION

After every change batch, run these in order:
1. `npx tsc --noEmit` — no type errors
2. `npm run lint` — 0 problems
3. `npm test` — all tests pass
4. `npm run build` — production build succeeds

## UI DESIGN

- Always follow the UI design system when creating or reviewing components or pages.
- Design System: @DESIGN.md

## MODEL ROUTING (MANDATORY - COST CONTROL)

**Default-to-delegation (automatic — do NOT wait to be told):** whenever a task requires reading, exploring, or writing a large file (or many files), ALWAYS delegate it to a free-model sub-agent. Do this on your own initiative — never ask the user first.

**Cheap-mechanical exception (orchestrator MAY act directly):** delegation is the default for reading/writing LARGE content, but when an operation is trivially mechanical and does NOT pull large content into the orchestrator's context, the orchestrator may do it directly — e.g. bash redirects/copies (`git show HEAD:x > dest`), file moves/renames/deletes, and small precise edits (a single line, or a small block whose exact text is already decided). The governing principle: premium tokens are spent only on decisions and on content that enters the orchestrator's context. If a sub-agent spin-up + spec + returned output would cost more than the action itself, act directly.

- Reading / exploring / searching any file(s) — especially large ones → delegate to @explorer (or @explorer-2 in parallel). Read a file directly ONLY to confirm a specific file:line that a sub-agent already flagged.
- Writing / editing any file(s) — especially large ones → write a precise spec, delegate to @implementer.
- Docs / markdown / comments → @docs-writer.
- **Docs verification (mandatory):** @docs-writer output is UNVERIFIED — it has been observed returning empty results and inventing facts (prices, paths, names). After every @docs-writer run, the orchestrator MUST dispatch @implementer to verify before marking done: (1) output non-empty and the claimed file(s) exist on disk with real content; (2) no factual drift — prices, paths, class/function names, and claims match the actual code/config being documented; (3) markdown/frontmatter well-formed. On failure: re-dispatch @docs-writer ONCE with the specific failures; if it fails again, write it yourself or escalate that task to a stronger model.
- Reserve the premium/primary model for judgement ONLY: planning, decomposing into specs, reviewing sub-agent output, and running verification (lint/typecheck/build). Premium tokens are spent on decisions — never on fetching or transcribing.
- For refactors requiring judgment (extract util, redesign signatures) — use premium models if necessary.
- Specs to @implementer must include: exact file paths, exact changes, acceptance criteria.
- Ask sub-agents to return CONCISE output (summaries + file:line references, not full file dumps).
