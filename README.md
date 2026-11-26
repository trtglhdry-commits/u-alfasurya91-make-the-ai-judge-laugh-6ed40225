# Make the AI Judge Laugh — u-alfasurya91

[![make.fun](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![rank](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/trtglhdry-commits/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/rank.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![reward](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/trtglhdry-commits/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/reward.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)

One office-life joke, one line, written by a deterministic Node program to
`/output/entry.txt`. The program takes no input, makes no network calls,
and keeps no state: run it anywhere and the output is byte-identical.

> I replied-all asking to be removed from the thread, and 400 people
> replied-all to agree — none of us has been removed.

Why it works: everyone has been trapped in a reply-all storm, so the
observation is instantly true; the twist is that the attempt to escape is
exactly what pulls 400 more people in — and nobody, not even the person
who started it, ever gets removed. The line is 118 characters, one line,
no trailing newline.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Determinism check — run it twice into different folders and compare:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out1 node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/out2 node main.ts
cmp /tmp/out1/entry.txt /tmp/out2/entry.txt && echo identical
```

Built for the [make.fun](https://make.fun/r/yhmjkzq7) bounty
"Make the AI Judge Laugh" — $2, top 10 pay.
