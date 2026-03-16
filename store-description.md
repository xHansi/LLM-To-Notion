## Chrome Web Store Listing Text

You can copy/paste the sections below directly into the Chrome Web Store listing.

---

### Extension name

**LLM to Notion – Math & LaTeX**

---

### Short description

**Copy AI answers with LaTeX math into Notion without breaking formulas or formatting.**

---

### Long description

**LLM to Notion** makes it easy to move math-heavy answers from AI tools (ChatGPT, Gemini, Claude, Grok, and more) into Notion without destroying the formulas.

Normally, when you copy responses with mixed text and LaTeX/KaTeX, you end up with broken equations, missing LaTeX, or ugly markup. This extension cleans up the selection, preserves the LaTeX, and gives you a smooth workflow for turning those equations into native Notion math blocks.

#### What it does

- Detects LaTeX and rendered KaTeX equations in AI chat UIs.
- Normalizes formulas into a consistent `$<…>$` format that survives copy/paste.
- Adds a **“Copy for Notion”** button next to math-heavy selections.
- Helps you step through `$<…>$` equations inside Notion and quickly convert them into real Notion math blocks.

#### How it works

On supported AI sites (ChatGPT, Gemini, Claude, Grok, etc.):

1. Select an answer that contains math with your mouse or keyboard.
2. When the extension detects equations, a floating **“Copy for Notion”** button appears near your selection.
3. Click **“Copy for Notion”** with the mouse (or press **Enter** while it is focused):
   - The extension analyzes the DOM and extracts LaTeX from KaTeX or inline delimiters.
   - The result is normalized into a `$<…>$`‑based format.
   - The cleaned text is copied to your clipboard and stored for advanced workflows.

On Notion pages:

1. Paste (for example with **Ctrl+V** / **Cmd+V**) the text that contains `$<…>$` segments into a Notion block.
2. Then use the keyboard shortcuts:
   - Press **F2** to highlight the next equation’s inner LaTeX.
   - Press **F3** to remove the `$<` / `>$` delimiters for the current equation and automatically move to the next one.
3. Use Notion’s own math shortcut (**Ctrl+Shift+E** / **Cmd+Shift+E**) to turn the highlighted LaTeX into a native Notion math block.

This gives you a fast loop: **AI → cleaned LaTeX → Notion math blocks**.

#### Supported providers

The extension understands different providers and adapts how it extracts math:

- **ChatGPT / Grok** – reads the KaTeX DOM and reconstructs the original LaTeX.
- **Gemini** – focuses on LaTeX blocks and normalizes them for copy/paste.
- **Claude** – KaTeX‑style DOM handling similar to ChatGPT (when present).
- **Generic LLMs** – uses text heuristics to detect and normalize math‑like blocks.

You can also add your own domains in the extension popup and choose which provider strategy to apply.

#### Why it needs access

The extension:

- Injects a small content script into pages you visit so it can:
  - Detect selections that contain math.
  - Render the floating **“Copy for Notion”** button.
  - Read the DOM around your selection to extract LaTeX safely.
- Uses `chrome.storage` to:
  - Remember which domains you configured.
  - Store language preferences for the popup.
  - Cache the last “Copy for Notion” result for advanced workflows.

It does **not** send your content to any server. All processing happens locally in your browser.

#### Configuration

Open the extension popup to:

- See and manage the list of supported domains.
- Enable/disable the extension on specific sites.
- Choose which extraction strategy (provider) to use per domain.
- Change the UI language (English, Deutsch, Español, Italiano, Français).

#### Keyboard workflow in Notion

After pasting text that contains `$<…>$` segments into Notion:

- Use the configured function keys to:
  - Jump between equations.
  - Strip the `$<` / `>$` delimiters around each equation’s inner LaTeX.
  - Quickly convert everything into native Notion math blocks using Notion’s own shortcuts.

This turns a tedious, error‑prone manual cleanup into a quick, repeatable workflow.

