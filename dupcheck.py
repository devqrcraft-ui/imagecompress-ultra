"""Near-duplicate detector: visible-prose shingles per route directory.

Usage: python dupcheck.py [threshold]   (default 0.72)
Prints route pairs whose Jaccard similarity of visible text exceeds the threshold.
"""
import re
import sys
from pathlib import Path

THRESHOLD = float(sys.argv[1]) if len(sys.argv) > 1 else 0.72
ROOT = Path("src/app")


def prose(text):
    chunks = []
    # 1. JSX text nodes with no embedded expressions
    for m in re.findall(r">([^<>{}]{25,})<", text):
        chunks.append(m)
    # 2. long quoted strings (FAQ answers, bullet copy)
    for m in re.findall(r"'([^'`\n{}]{40,})\"?'|\"([^\"`\n{}]{40,})\"", text):
        chunks.append(m[0] or m[1])
    words = re.findall(r"[a-z0-9]+", " ".join(chunks).lower())
    return {" ".join(words[i:i + 6]) for i in range(len(words) - 5)}


groups = {}
for f in sorted(ROOT.rglob("*.tsx")):
    if any(part.startswith("[") for part in f.parts):
        continue
    if f.name not in ("page.tsx", "client.tsx", "component.tsx"):
        continue
    route = str(f.parent).replace("\\", "/")
    groups.setdefault(route, "")
    groups[route] += "\n" + f.read_text(encoding="utf-8", errors="replace")

routes = sorted(groups)
shingles = {r: prose(groups[r]) for r in routes}

pairs = []
for i, a in enumerate(routes):
    if len(shingles[a]) < 40:
        continue
    for b in routes[i + 1:]:
        if len(shingles[b]) < 40:
            continue
        inter = len(shingles[a] & shingles[b])
        union = len(shingles[a] | shingles[b])
        if union and inter / union >= THRESHOLD:
            pairs.append((inter / union, a, b))

pairs.sort(reverse=True)
print("near-duplicate pairs above %.2f: %d" % (THRESHOLD, len(pairs)))
for s, a, b in pairs[:60]:
    print("  %.2f  %s  <->  %s" % (s, a, b))
