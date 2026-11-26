// Make the AI Judge Laugh — office-life one-liner.
// Deterministic: writes one fixed line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Gate enforced in code: UTF-8, 1–200 chars, single
// line, not only whitespace, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I replied-all asking to be removed from the thread, and 400 people replied-all to agree — none of us has been removed.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line must be 1-200 chars, got ${chars.length}`);
}
if (LINE.trim().length === 0) throw new Error("line must not be only whitespace");
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
