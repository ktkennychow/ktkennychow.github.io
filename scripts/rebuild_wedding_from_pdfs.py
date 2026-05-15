#!/usr/bin/env python3
"""
Regenerate wedding/1–5/index.html body text from assets/Jiseong-QR.pdf and
assets/Kenny - QR.pdf. Requires: pip install pypdf

Run from repo root: python3 scripts/rebuild_wedding_from_pdfs.py
"""

from __future__ import annotations

import re
import sys
from html import escape
from pathlib import Path

try:
    from pypdf import PdfReader
except ImportError:
    print("Install pypdf: pip install pypdf", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]


def extract_pages(pdf_name: str) -> list[str]:
    path = ROOT / "assets" / pdf_name
    r = PdfReader(path)
    return [(p.extract_text() or "").strip() for p in r.pages]


def norm_western(text: str) -> str:
    for lab in ("English", "Korean", "Chinese"):
        if text.lstrip().lower().startswith(lab.lower()):
            text = re.sub(r"^%s\s*" % lab, "", text.lstrip(), flags=re.I)
            break
    t = text.replace("\n", " ")
    t = re.sub(r" +", " ", t).strip()
    t = re.sub(r"(\w),([A-Za-z])", r"\1, \2", t)
    t = re.sub(r"(\w)\.([A-Z])", r"\1. \2", t)
    t = t.replace("seen,/ ", "seen, ")
    t = re.sub(r"\s+([,?.!;:])", r"\1", t)
    t = re.sub(r"\(\s+", "(", t)
    t = re.sub(r"\s+\)", ")", t)
    return t


def norm_chinese(text: str) -> str:
    text = re.sub(r"^Chinese\s*", "", text.lstrip(), flags=re.I)
    return re.sub(r"\s+", "", text)


def paragraphs_western(s: str) -> list[str]:
    parts = re.split(
        r"(?<=[.?!])\s+(?=[(\uac00-\ud7a3A-Z\"\u201c\u2018\u300c0-9])", s
    )
    out: list[str] = []
    for p in parts:
        p = p.strip()
        if not p:
            continue
        if len(p) < 20 and out:
            out[-1] += " " + p
        else:
            out.append(p)
    merged: list[str] = []
    i = 0
    while i < len(out):
        cur = out[i]
        while i + 1 < len(out) and len(cur) < 80:
            cur = cur + " " + out[i + 1]
            i += 1
        merged.append(cur)
        i += 1
    return merged


def paragraphs_chinese(s: str) -> list[str]:
    parts = re.split(r"(?<=[。！？])", s)
    out: list[str] = []
    buf = ""
    for p in parts:
        buf += p
        if re.search(r"[。！？]$", buf):
            out.append(buf.strip())
            buf = ""
    if buf.strip():
        out.append(buf.strip())
    return out


def prose_html(paras: list[str]) -> str:
    lines = ['      <article class="wedding-prose">']
    for p in paras:
        lines.append(f"        <p>{escape(p)}</p>")
    lines.append("      </article>")
    return "\n".join(lines)


def main() -> None:
    jp = extract_pages("Jiseong-QR.pdf")
    kp = extract_pages("Kenny - QR.pdf")
    jiseong_ko = norm_western(jp[1] + " " + jp[2])
    jiseong_en = norm_western(jp[0])
    kenny_ko = norm_western(kp[1])
    kenny_en = norm_western(kp[0])
    kenny_zh = norm_chinese(kp[2] + kp[3])

    pages = {
        "1": ("ko", "← 목록", "지성 혼인서약서", "(한국어)", paragraphs_western(jiseong_ko)),
        "2": (
            "en",
            "← Back",
            "Jiseong's Wedding Speech",
            "(English)",
            paragraphs_western(jiseong_en),
        ),
        "3": ("ko", "← 목록", "케니 혼인서약서", "(한국어)", paragraphs_western(kenny_ko)),
        "4": (
            "zh-Hant",
            "← 返回",
            "Kenny 結婚演講",
            "（中文）",
            paragraphs_chinese(kenny_zh),
        ),
        "5": (
            "en",
            "← Back",
            "Kenny's Wedding Speech",
            "(English)",
            paragraphs_western(kenny_en),
        ),
    }

    template = """<!DOCTYPE html>
<html lang="{lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Cache-Control" content="public, max-age=3600, must-revalidate" />
    <title>{head_title}</title>
    <link rel="stylesheet" href="../wedding.css" />
  </head>
  <body class="wedding-doc">
    <header class="wedding-doc-header">
      <a class="wedding-back" href="../">{back_label}</a>
      <h1 class="wedding-doc-title">
        <span class="wedding-title-main">{title_main}</span><span class="wedding-lang">{title_lang}</span>
      </h1>
    </header>
    <div class="wedding-prose-wrap">
{article}
    </div>
  </body>
</html>
"""

    for num, (lang, back, main, ltag, paras) in pages.items():
        head_title = escape(f"{main} {ltag}")
        html = template.format(
            lang=lang,
            head_title=head_title,
            back_label=back,
            title_main=escape(main),
            title_lang=escape(ltag),
            article=prose_html(paras),
        )
        outpath = ROOT / "wedding" / num / "index.html"
        outpath.write_text(html, encoding="utf-8")
        print(outpath, len(paras), "paragraphs")


if __name__ == "__main__":
    main()
