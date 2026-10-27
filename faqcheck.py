import re
from collections import defaultdict
from pathlib import Path

groups = defaultdict(str)
for f in sorted(Path("src/app").rglob("*.tsx")):
    groups[str(f.parent)] += "\n" + f.read_text(encoding="utf-8", errors="replace")

def norm(s):
    return re.sub(r"[^a-z0-9]", "", s.lower())

rows = []
for d, t in groups.items():
    # FAQPage blocks (whole object literals that mention FAQPage)
    blocks = []
    for m in re.finditer(r"FAQPage", t):
        start = t.rfind("{", 0, m.start())
        depth, i = 0, start
        while i < len(t):
            if t[i] == "{": depth += 1
            elif t[i] == "}":
                depth -= 1
                if depth == 0:
                    break
            i += 1
        blocks.append(t[start:i + 1])
    if not blocks:
        continue
    schema_q = set()
    for b in blocks:
        for q in re.findall(r'(?:name|question)"?\s*:\s*"([^"]{6,160})"', b):
            if q.strip().endswith("?"):
                schema_q.add(q)
        for q in re.findall(r"\[\s*'([^']{6,160}\?)'", b):
            schema_q.add(q)
    if not schema_q:
        continue
    outside = t
    for b in blocks:
        outside = outside.replace(b, " ")
    vis_q = set()
    for q in re.findall(r"<summary[^>]*>(.{0,200}?)</summary>", outside, re.S):
        q = re.sub(r"<[^>]+>", "", q)
        q = re.sub(r"\{[^}]*\}", "", q)
        if q.strip().endswith("?"):
            vis_q.add(q.strip())
    for q in re.findall(r"'([^']{6,160}\?)'", outside):
        vis_q.add(q)
    for q in re.findall(r'`([^`]{6,160}\?)`', outside):
        vis_q.add(q)
    missing = [q for q in schema_q if not any(norm(q)[:40] in norm(v) or norm(v)[:40] in norm(q) for v in vis_q)]
    if missing:
        rows.append((d, len(schema_q), len(vis_q), missing))

print("FAQ markup/visible drift:", len(rows), "routes")
for d, n, v, missing in sorted(rows):
    print(f"\n== {d} (schema {n} / visible {v})")
    for m in missing[:8]:
        print("   -", m[:95])
