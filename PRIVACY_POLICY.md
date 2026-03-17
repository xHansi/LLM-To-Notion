## LLM to Notion – Privacy Policy and License Notice

_Last updated: **2026-03-17**_

This Privacy Policy explains how the **LLM to Notion** browser extension (“we”, “us”, “our”, “the Extension”) handles data when you install and use it in your browser.

This document is intentionally **very detailed** to make our practices transparent and to clearly limit our responsibilities. Nothing in this document is intended to contradict applicable law; in case of conflict, applicable law prevails.

> **Important note (not legal advice):**  
> This Privacy Policy is provided for transparency and good-faith compliance. It does **not** constitute legal advice. As the publisher of the extension, you are responsible for ensuring that this text and your actual behavior comply with all relevant laws and platform policies.

---

## 1. Overview

**Purpose of the Extension**

LLM to Notion is a browser extension whose **sole purpose** is:

- To help you copy content — especially **mathematical expressions and LaTeX-like formulas** — from Large Language Model (LLM) chat interfaces (such as ChatGPT, Gemini, Claude, etc.)  
- To **normalize and reformat** those mathematical expressions into a format that Notion can better interpret, and  
- To copy that normalized content to your system clipboard or local browser storage so you can paste it into Notion (or similar tools).

The Extension **does not**:

- Send your data to its own servers.
- Sell, rent, or transfer your data to third parties.
- Track your browsing history across websites.
- Use your data for advertising, profiling, or creditworthiness assessment.

All processing happens **locally in your browser**, within the context of the pages for which you granted permission.

---

## 2. What Data We Access and Process

The Extension may access and process the following categories of data, solely for its core functionality:

### 2.1 Website Content (LLM Chat Content and Selected Text)

**What is accessed**

- Text content in the active tab on specific, supported host sites (for example: pages hosting ChatGPT, Gemini, Claude, or other LLM/chat interfaces).
- In particular, the Extension reads:
  - The **text you select** with your mouse or keyboard.
  - In some cases, nearby DOM context needed to detect and normalize equations or formatting.

**How and why it is accessed**

- To detect whether the selected text includes mathematical expressions or LaTeX-like syntax.
- To normalize LaTeX and mathematical notation (e.g., `$...$`, `$$...$$`, Unicode math symbols, subscripts/superscripts) into a consistent format that Notion can interpret.
- To prepare a cleaned-up representation for copying to your clipboard or saving in local browser storage for later use.

**Retention**

- This text is **not sent to our servers** (we do not operate a backend for this extension).
- The text is processed **in-memory only**, except where you explicitly trigger:
  - A copy action to your **system clipboard**, or
  - Storage of prepared text in the browser’s **`chrome.storage` / `storage`** API (which remains on your device).
- We do not create persistent logs or databases of your content.

---

### 2.2 User Activity on Supported Pages (Selection and Interaction)

**What is accessed**

- The fact that you have made a selection (highlighted text) on a supported page.
- Bounding rectangles / positions of your selection in the viewport (for example, to position a “Copy for Notion” button near the selection).

**How and why it is accessed**

- To decide **when to show the Extension’s UI**, such as a copy button near your selection.
- To know whether the selected text looks like mathematical content that can be normalized and copied.

**Retention**

- This data is handled **transiently in your browser’s memory**.
- The Extension does not persist your selection positions or interaction traces.
- No logs are sent to us or to third parties.

---

### 2.3 Local Extension Settings (using `storage` permission)

**What is stored**

Using the browser extension `storage` APIs (such as `chrome.storage.local` or the equivalent), the Extension may store small configuration values, for example:

- Preferred language or UI locale.
- Preferred LLM provider (e.g., defaulting to ChatGPT, Gemini, or Claude).
- Feature toggles or user preferences related to formatting or normalization style.
- Most recent normalized Notion text (for immediate reuse within the extension’s UI).

**How and why it is stored**

- To give you a consistent experience across browser sessions (e.g., remembering your provider choice).
- To avoid asking you for the same preferences repeatedly.
- To allow quick re-use of the last prepared Notion snippet if you re-open the Extension UI.

**Retention**

- These settings are stored **only in your browser’s local extension storage**, not on any external server.
- You can clear this storage at any time by:
  - Removing the extension,
  - Resetting extension data through the browser’s extension management UI, or
  - Clearing the browser profile / data.

---

## 3. What Data We Do **Not** Collect

The Extension is specifically designed **not** to:

- Collect or store:
  - Your name, email address, or other directly identifying information, unless such data happens to be part of the selected text that **you** choose to process.
  - Passwords, authentication tokens, or login details.
  - Payment card numbers, bank details, or other financial information (unless part of selected text you explicitly highlight for copying).
  - Health, financial, or highly sensitive personal data in any systematic way.

- Create profiles of your activity:
  - We do not monitor all your browsing.
  - We do not keep a history of which websites you visit.
  - We do not build profiles or analytics on your behavior.

If any of these categories appear in the **text you select**, the Extension only processes them **locally and transiently** to perform the requested formatting/copying. We do not separately classify or treat such data as a separate collection; it remains part of your selected content.

---

## 4. Legal Basis (Where Applicable)

If and to the extent data protection regulations such as the **EU GDPR** or **UK GDPR** apply, we process data under the following legal bases:

- **Contractual necessity / performance of a service**  
  When you install and use the Extension for its intended functionality, we process your selected content and related data to perform actions you request (e.g., normalizing and copying text for Notion).

- **Legitimate interest**  
  We have a legitimate interest in ensuring the Extension functions as described, improving the formatting of mathematical expressions and LaTeX for use in Notion, while minimizing the amount of data processed and avoiding external transfers.

We do **not** rely on consent for any form of tracking, profiling, or advertising, because the Extension does not perform those activities.

---

## 5. Data Sharing and Transfers

### 5.1 No Transfer to Developer Servers

- We do **not** operate a backend service for this extension that receives your content.
- No selected text, chat content, or Notion data is sent from the Extension to the developer’s servers.

### 5.2 Third Parties

- We do **not** sell, rent, or license your data to third parties.
- We do **not** share your selected text or normalized content with advertisers or analytics providers.
- Only the platforms you already use (e.g., the LLM provider, your browser vendor, Notion, and any other tools you paste your content into) process your data under their own terms.

### 5.3 Operating System and Browser

- When you copy content, it is placed on your **system clipboard** using normal OS/browser mechanisms.  
  Your operating system, clipboard managers, or other applications on your device may be able to read that clipboard content according to their own policies and permissions.

We encourage you to review the privacy policies of:

- Your browser (e.g., Chrome, Edge, Brave).
- Your OS vendor (e.g., Apple, Microsoft, Google).
- Any clipboard manager or third-party tool installed on your system.

---

## 6. Permissions Explanation

The Extension requests a minimal set of permissions needed to fulfill its purpose.

### 6.1 `host_permissions` / Content Script Matches

We request host permissions for specific domains where LLM chats are hosted (e.g. `https://chat.openai.com/*`, `https://gemini.google.com/*`, `https://claude.ai/*`, or similar). These are required to:

- Inject a content script on those pages only.
- Read selected text and local DOM structure to detect math content.
- Render a small UI element (e.g., “Copy for Notion” button) adjacent to your selection.

We do **not** request wild-card permissions such as `<all_urls>` unless strictly necessary for functionality explicitly described.

### 6.2 `storage`

We use the `storage` permission only to:

- Save small configuration settings and preferences.
- Optionally store your last prepared Notion text locally so it’s quickly accessible.

No tracking, profiling, or remote syncing of these storage values is performed by the Extension itself.

### 6.3 `clipboardWrite` / Related Clipboard APIs

If required by the browser, the Extension uses clipboard-related APIs solely to:

- Copy the normalized content into your clipboard when you explicitly trigger this action (e.g., by clicking a button).

The Extension does not continuously monitor or harvest clipboard contents.

---

## 7. Remote Code Policy

The Extension **does not use “Remote Code”** as defined by the Chrome Web Store and similar browser extension marketplaces:

- All JavaScript and WebAssembly code executed by the Extension is bundled in the Extension package distributed through the web store.
- We **do not** load external scripts or code via:
  - Remote `<script src="https://...">` tags,
  - Dynamic imports from external domains,
  - `eval()` or similar mechanisms that evaluate dynamic code from untrusted or remote sources.

Any network access performed by your browser (for example, the normal page loads of LLM services or Notion itself) is under the control of those services and your browser, not the Extension.

---

## 8. Security

We take a **defense-in-depth** approach to minimize risk:

- **Minimal permissions**: Only those host permissions and APIs strictly necessary for the described functionality are requested.
- **Local only**: The Extension is designed so that content is processed locally, without remote submission.
- **No telemetry by default**: We do not implement custom telemetry, analytics, or background tracking.

However, please be aware:

- No software system is perfectly secure.
- If your browser, OS, or machine is compromised (e.g., by malware), an attacker may be able to read clipboard content or browser data regardless of this Extension.

---

## 9. Your Choices and Controls

You have full control over the Extension:

- **Install / Uninstall**:  
  You can remove the Extension at any time via your browser’s extensions settings page. This immediately stops all future processing and typically deletes the Extension’s local storage data.

- **Disable Per-Site Access** (when supported by your browser):  
  In some browsers, you can restrict extension host access (e.g., “On click”, “On specific sites”). Doing so may limit or disable the Extension’s functionality on those pages.

- **Clear Local Data**:  
  You can clear extension data by removing the extension, resetting browser data, or using browser-specific extension-data-clearing functions.

If you have questions or concerns about how your data is used, you should:

- Review this Privacy Policy.
- Review your browser’s extension and privacy settings.

---

## 10. Children’s Privacy

The Extension is not directed at children and does not include functionality specifically targeting minors. It does not attempt to identify or categorize users by age.

If you are a parent or guardian and believe that your child is using the Extension in a way that raises privacy concerns, you can:

- Uninstall the Extension from the child’s browser.
- Use parental controls or browser settings to restrict extension installation and usage.

---

## 11. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect:

- Changes in the Extension’s functionality,
- Updates in platform or marketplace requirements (e.g., Chrome Web Store policy changes),
- Changes in applicable law or best practices.

When we update this document:

- We will change the “Last updated” date at the top.
- If required by relevant platforms or laws, we may also provide in-extension or store-level notices of significant changes.

Your continued use of the Extension after such changes constitutes your acceptance of the updated Privacy Policy.

---

## 12. Contact

If you have questions, requests, or concerns about this Privacy Policy or the behavior of the Extension, you can contact the developer at:

- **Email:** _[replace with your contact email]_  
- **Project repository / issue tracker:** _[replace with your GitHub or project URL]_

Please do not include sensitive personal data in your initial contact message.

---

## 13. License Notice for the Extension Code

The source code of the LLM to Notion extension is distributed under an open-source license.

> **Important:** Update the text below to match the actual license (e.g. MIT, Apache-2.0) and ensure it is consistent with the `LICENSE` file in the repository.

For example, if you use the MIT License:

> The source code of this extension is licensed under the MIT License.  
> You can find the full license text in the LICENSE file of the project repository:  
> `https://github.com/[your-user]/[your-repo]/blob/main/LICENSE`  
>  
> In summary (without replacing the full legal text), this means:  
> - You are permitted to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,  
> - subject to the conditions and copyright notice contained in the LICENSE file.  
> The Software is provided "as is", without warranty of any kind.

If you use a different license (e.g. Apache 2.0, GPL, etc.), adjust the wording accordingly:

> This browser extension and its source code are made available under the [LICENSE NAME] license.  
> Please refer to the LICENSE file in the repository for the exact legal terms and conditions.

---

## 14. No Warranty

To the maximum extent permitted by applicable law, the Extension is provided:

> **“AS IS” AND “AS AVAILABLE”**, WITHOUT WARRANTIES OF ANY KIND,  
> whether express or implied, including but not limited to fitness for a particular purpose, non-infringement, or correctness of its mathematical or LaTeX normalization behavior.

You are responsible for reviewing the final content you paste into Notion or any other destination.

