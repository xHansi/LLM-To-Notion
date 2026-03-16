import {
  extractMathFromGeminiSelection,
  extractMathFromChatGpt,
  extractMathFromClaudeSelection,
  getExtractionStrategy,
  extractMath,
  normalizeGeminiClipboardText,
  extractMathFromSelectionGeneric,
} from "../mathExtraction";
import { getNotionFormatFromSelection } from "../notionFormat";

jest.mock("../notionFormat", () => ({
  getNotionFormatFromSelection: jest.fn(() => "$<mocked>$"),
}));

function createSelectionFromText(text: string): Selection {
  const div = document.createElement("div");
  div.textContent = text;
  document.body.appendChild(div);
  const range = document.createRange();
  range.selectNodeContents(div);
  const sel = window.getSelection();
  if (!sel) {
    throw new Error("No selection");
  }
  sel.removeAllRanges();
  sel.addRange(range);
  return sel;
}

describe("mathExtraction", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    const sel = window.getSelection();
    if (sel) sel.removeAllRanges();
    (getNotionFormatFromSelection as jest.Mock).mockClear();
  });

  describe("normalizeGeminiClipboardText / LaTeX normalization", () => {
    it("wraps $$...$$ blocks", () => {
      const out = normalizeGeminiClipboardText("Text $$x^2$$ more");
      expect(out).toBe("Text\n\n$<x^2>$\n\nmore");
    });

    it("normalizes \\( ... \\) and \\[ ... \\]", () => {
      const out = normalizeGeminiClipboardText("\\(x^2\\) and \\[y^2\\]");
      expect(out).toBe("$<x^2>$ and $<y^2>$");
    });

    it("normalizes inline $...$ segments", () => {
      const out = normalizeGeminiClipboardText("Here is $x^2$ and $y^2$");
      expect(out).toBe("Here is $<x^2>$ and $<y^2>$");
    });

    it("separates markdown headings from following text", () => {
      const out = normalizeGeminiClipboardText("# Heading text continues on same line");
      expect(out).toBe("# Heading\n\ntext continues on same line");
    });

    it("puts $<...>$ math blocks onto their own lines", () => {
      const out = normalizeGeminiClipboardText(
        "Before text $$x^2 + y^2 = 1$$ after text"
      );
      expect(out).toBe("Before text\n\n$<x^2 + y^2 = 1>$\n\nafter text");
    });

    it("returns empty from selection when nothing changes", () => {
      const sel = createSelectionFromText("No math here");
      const result = extractMathFromGeminiSelection(sel);
      expect(result).toBe("");
    });
  });

  describe("Gemini extraction with heuristics", () => {
    it("uses Unicode heuristics for backprop-style equations", () => {
      const sel = createSelectionFromText(
        "To understand backpropagation, think of it as a way for a neural network to look at its mistakes and figure out which weights to change.\n\nδ^L = ∇_a C ⊙ σ'(z^L)"
      );
      const out = extractMath("gemini", sel);
      expect(out.startsWith("$<")).toBe(true);
      expect(out.endsWith(">$")).toBe(true);
      expect(out).toContain("\\delta");
      expect(out).toContain("\\nabla");
      expect(out).toContain("\\sigma");
    });

    it("keeps normal Gemini prose without math as empty extraction", () => {
      const sel = createSelectionFromText(
        "The value = sign is used in many sentences with longerwords."
      );
      const out = extractMath("gemini", sel);
      expect(out).toBe("");
    });
  });

  describe("generic LaTeX normalization", () => {
    it("converts inline $...$ but not $$...$$", () => {
      const sel = createSelectionFromText("a $x^2$ and $$y^2$$");
      const result = extractMathFromSelectionGeneric(sel);
      expect(result).toContain("$<x^2>$");
      expect(result).toContain("$<y^2>$");
    });

    it("returns empty when text does not look like math and is already normalized", () => {
      const sel = createSelectionFromText("Here is $<x>$ already");
      const result = extractMathFromSelectionGeneric(sel);
      expect(result).toBe("");
    });
  });

  describe("Unicode / ASCII heuristics", () => {
    it("detects Unicode math blocks and maps a few symbols", () => {
      const sel = createSelectionFromText("∫_0^1 f(x) dx ≈ π + ∑");
      const result = extractMathFromSelectionGeneric(sel);
      expect(result.startsWith("$<")).toBe(true);
      expect(result.endsWith(">$")).toBe(true);
      expect(result).toContain("\\int");
      expect(result).toContain("\\pi");
    });

    it("detects ASCII math-like blocks", () => {
      const sel = createSelectionFromText("x^2 + y^2 = 1");
      const result = extractMathFromSelectionGeneric(sel);
      expect(result).toBe("$<x^2 + y^2 = 1>$");
    });

    it("returns empty for normal prose with =", () => {
      const sel = createSelectionFromText(
        "The value = sign is used in many sentences with longerwords."
      );
      const result = extractMathFromSelectionGeneric(sel);
      expect(result).toBe("");
    });
  });

  describe("provider routing", () => {
    it("chatgpt strategy delegates to getNotionFormatFromSelection", () => {
      const sel = createSelectionFromText("anything");
      const fn = getExtractionStrategy("chatgpt");
      const out = fn(document, sel);
      expect(getNotionFormatFromSelection).toHaveBeenCalled();
      expect(out).toBe("$<mocked>$");
    });

    it("Claude strategy currently reuses ChatGPT extractor", () => {
      const sel = createSelectionFromText("anything");
      const out = extractMathFromClaudeSelection(sel);
      expect(getNotionFormatFromSelection).toHaveBeenCalled();
      expect(out).toBe("$<mocked>$");
    });

    it("extractMath dispatches based on provider id", () => {
      const sel = createSelectionFromText("$$y^2$$");
      const gemini = extractMath("gemini", sel);
      expect(gemini).toBe("$<y^2>$");

      const generic = extractMath("generic", sel);
      expect(generic).toBe("$<y^2>$");

      const chat = extractMath("chatgpt", sel);
      expect(chat).toBe("$<mocked>$");
    });
  });
});

