// The Houseplant Out-of-Office — make.fun bounty entry.
// Writes the fern's out-of-office auto-reply as one text file.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "I'm out of office and out of water — your email will be answered the next time it rains indoors.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), REPLY, "utf8");
}

main();
