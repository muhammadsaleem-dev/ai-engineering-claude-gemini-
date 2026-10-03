#!/usr/bin/env python3
"""
sync_docs.py
Synchronizes repository markdown guides and interactive Jupyter notebooks
into the `docs/` directory structure for MkDocs Material generation.
"""

import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

def sync_file(src: Path, dst: Path):
    """Safely synchronizes a file between src and dst without overwriting newer work."""
    if not src.exists() and not dst.exists():
        return
    if not dst.exists():
        shutil.copy2(src, dst)
        return
    if not src.exists():
        shutil.copy2(dst, src)
        return
    # If identical, no action needed
    if src.read_bytes() == dst.read_bytes():
        return
    # If docs copy was edited more recently, back-propagate to source to prevent regression
    if dst.stat().st_mtime > src.stat().st_mtime:
        print(f"🛡️ Safeguard: Preserving newer docs edit: {dst.relative_to(ROOT)} -> {src.relative_to(ROOT)}")
        shutil.copy2(dst, src)
    else:
        print(f"🔄 Updating docs from source: {src.relative_to(ROOT)} -> {dst.relative_to(ROOT)}")
        shutil.copy2(src, dst)

def setup_docs():
    DOCS.mkdir(parents=True, exist_ok=True)
    (DOCS / "stylesheets").mkdir(parents=True, exist_ok=True)

    # 1. Root index.md: only generate if missing
    if not (DOCS / "index.md").exists():
        readme = ROOT / "README.md"
        if readme.exists():
            content = readme.read_text(encoding="utf-8")
            content = content.replace("01-getting-started/", "module-01/")
            content = content.replace("02-prompt-engineering-evals/", "module-02/")
            content = content.replace("03-tools-and-multimodal/", "module-03/")
            content = content.replace("04-model-context-protocol-mcp/", "module-04/")
            content = content.replace("05-retrieval-augmented-generation-rag/", "module-05/")
            content = content.replace("06-claude-code-computer-use/", "module-06/")
            content = content.replace("07-agentic-workflows/", "module-07/")
            (DOCS / "index.md").write_text(content, encoding="utf-8")

    # 2. Module 01
    m1_src = ROOT / "01-getting-started"
    m1_dst = DOCS / "module-01"
    m1_dst.mkdir(parents=True, exist_ok=True)

    # Module 01 README -> docs/module-01/index.md
    if (m1_src / "README.md").exists():
        m1_readme = (m1_src / "README.md").read_text(encoding="utf-8")
        # Adjust links to sibling files
        m1_readme = m1_readme.replace("(001-", "(notebooks/001-")
        m1_readme = m1_readme.replace("(002-", "(notebooks/002-")
        m1_readme = m1_readme.replace("(003-", "(notebooks/003-")
        m1_readme = m1_readme.replace("(004-", "(notebooks/004-")
        m1_readme = m1_readme.replace("(005-", "(notebooks/005-")
        m1_readme = m1_readme.replace("(006-", "(notebooks/006-")
        m1_readme = m1_readme.replace("(case-study.ipynb)", "(case-study.ipynb)")
        m1_readme = m1_readme.replace("(module-01-dialogue-review.md)", "(dialogue-review.md)")
        (m1_dst / "index.md").write_text(m1_readme, encoding="utf-8")

    # Module 01 Dialogue Review -> docs/module-01/dialogue-review.md
    sync_file(m1_src / "module-01-dialogue-review.md", m1_dst / "dialogue-review.md")

    # Flagship Case Study Notebook -> docs/module-01/case-study.ipynb
    sync_file(m1_src / "case-study.ipynb", m1_dst / "case-study.ipynb")

    # All module-01 companion notebooks -> docs/module-01/notebooks/
    nb_dst = m1_dst / "notebooks"
    nb_dst.mkdir(parents=True, exist_ok=True)
    for nb in sorted(m1_src.glob("00*.ipynb")):
        sync_file(nb, nb_dst / nb.name)

    # 3. Modules 02 through 07
    modules = [
        ("02-prompt-engineering-evals", "module-02"),
        ("03-tools-and-multimodal", "module-03"),
        ("04-model-context-protocol-mcp", "module-04"),
        ("05-retrieval-augmented-generation-rag", "module-05"),
        ("06-claude-code-computer-use", "module-06"),
        ("07-agentic-workflows", "module-07"),
    ]

    for src_dir_name, dst_dir_name in modules:
        s_dir = ROOT / src_dir_name
        d_dir = DOCS / dst_dir_name
        d_dir.mkdir(parents=True, exist_ok=True)
        if (s_dir / "README.md").exists():
            content = (s_dir / "README.md").read_text(encoding="utf-8")
            (d_dir / "index.md").write_text(content, encoding="utf-8")

    print("✅ Documentation source files synchronized to docs/ successfully.")

if __name__ == "__main__":
    setup_docs()
