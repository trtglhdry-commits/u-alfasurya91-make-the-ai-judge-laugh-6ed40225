// Make the AI Judge Laugh — office-life one-liner.
//
// The joke: replying-all to escape a thread only summons 400 more
// reply-alls — a true office observation (everyone has lived it) with a
// surprising turn (the escape attempt is what traps everyone) that reads
// cleanly aloud in a single breath.
//
// Deterministic: writes one fixed line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Gate enforced in code: UTF-8, 1–200 chars, single
// line, not only whitespace, no trailing newline. No randomness, no
// network, no clock — the same input always produces the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I replied-all asking to be removed from the thread, and 400 people replied-all to agree — none of us has been removed.";

// Gate limits from the brief: a single line of 1-200 characters.
// Counted in Unicode code points ([...line]) so the em dash counts once.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function validateLine(line: string): void {
  const chars = [...line];
  if (chars.length < MIN_CHARS || chars.length > MAX_CHARS) {
    throw new Error(`line must be 1-200 chars, got ${chars.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

validateLine(LINE);

// Write the line exactly as-is: no trailing newline, no extra whitespace.
// The file must contain only the joke, byte for byte.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
