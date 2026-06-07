---
created: 2026-06-06
updated: 2026-06-06
udc: 025.4:004
tags: [resource, udc, digital, knowledge-management]
---

# UDC & Digital Knowledge Management

> **Resource:** Application of UDC classification in digital environments and personal knowledge management.

---

## UDC in the Digital Age

As a century-old classification system, UDC faces new opportunities and challenges in the digital era:

### Advantages
- **Full subject coverage** — No need to define tags one by one
- **Hierarchical scalability** — Expandable from broad to fine-grained
- **Composite expression** — `:` symbol enables multi-dimensional classification
- **Language-independent** — Numeric identifiers ease multilingual switching

### Challenges
- **Learning curve** — Requires familiarity with the classification table
- **Granularity gaps** — Limited coverage for frontier fields (e.g., LLMs)
- **Maintenance cost** — Classification mapping needs continuous updates

## Usage in Obsidian

### Method 1: Frontmatter Field
```yaml
---
udc: 004.8:519.6
tags: [ai, transformer]
---
```
Search `udc:004.8` in Obsidian to find all AI-related notes.

### Method 2: Dataview Query
````markdown
```dataview
TABLE udc, tags
FROM "en/3 Resources"
WHERE contains(udc, "004.8")
SORT file.name
```
````

## Integration with PARA

```
┌─────────────────────────────────┐
│         KOS_LLM-Wiki            │
├──────────┬──────────────────────┤
│  PARA    │  UDC                 │
│──────────┼──────────────────────┤
│ Operational │ Subject dimension │
│ Context     │ Classification    │
│ Tree structure │ Networked classification │
│ Folders   │ frontmatter + tags  │
└──────────┴──────────────────────┘
```

The two provide **orthogonal dimensions**: PARA answers "which lifecycle stage is this note in?", UDC answers "which subject does this note belong to?".

## Related Notes

- [[en/3 Resources/UDC/udc-overview|UDC Overview]]
- [[en/3 Resources/UDC/udc-classification-index|UDC Classification Index]]
- [[en/3 Resources/PARA/para-and-knowledge-management|PARA & Knowledge Management]]

## Core Content

UDC adapts naturally to digital knowledge management through its flexible, faceted structure.

**Digital Advantages:**
- **Colon notation (:)** enables compound classifications that digital systems can parse and query
- **Auxiliary tables** provide multi-dimensional indexing without fixed hierarchies
- **Universal scope** avoids the domain-specific limitations of other systems

**In KOS_LLM-Wiki:**
- UDC numbers serve as machine-readable metadata for every note
- The classification supports both browsing (hierarchy) and searching (tags + UDC)
- Digital tools enable automatic classification suggestions and cross-lingual UDC matching

**Future Directions:**
- AI-assisted UDC classification of new content
- Linked Data integration with UDC as a vocabulary
- Automated crosswalks between UDC and other classification systems
