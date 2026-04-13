# IB Design Technology 2027 → Edexcel 9DT0

A practical teaching resource for online delivery of **IB Design Technology 2027** and **Edexcel A Level Design & Technology (9DT0)** simultaneously.

Built for teachers transitioning between qualifications or co-teaching both to different student cohorts. All pages are fully self-contained HTML — no build tools, no dependencies, no frameworks.

**Live site:** https://davidxhart-spec.github.io/IB-Design-2027-to-EDEXCEL-9DT0/

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Overview and recommended reading order |
| Two-Year SoW & NEA Guide | `sow.html` | Full Y12–Y13 scheme of work for Edexcel 9DT0 online delivery, plus NEA brief guidance for remote students |
| Lesson 1 Plan | `lesson1.html` | Complete 60-minute first lesson plan — product analysis as entry point, five-lens framework, timing, differentiation |
| Student Onboarding | `onboarding.html` | Student-facing pre-course checklist with live progress tracking |
| Lesson 1: IB ↔ Edexcel | `lesson1-comparison.html` | Side-by-side comparison of Lesson 1 content, vocabulary bridge, five-lens map, IB teacher confidence assessment |
| Full Syllabus Map | `syllabus-map.html` | Six thematic clusters across both full syllabuses, content overlap scores, week-by-week teaching sequence, divergence analysis |

---

## Deployment

1. Fork or clone this repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Site will be live at `https://davidxhart-spec.github.io/IB-Design-2027-to-EDEXCEL-9DT0/`

No build step required. All files are static HTML/CSS/JS.

---

## Structure

```
index.html              Home — navigation and overview
sow.html                Two-Year SoW & NEA Guide (Edexcel 9DT0)
lesson1.html            Lesson 1 Plan
onboarding.html         Student Onboarding Checklist
lesson1-comparison.html IB DT 2027 ↔ Edexcel 9DT0 Lesson 1 comparison
syllabus-map.html       Full Syllabus Thematic Map
style.css               Shared styles including print stylesheet
nav.js                  Shared navigation bar (injected on each page)
README.md               This file
```

---

## Features

- Fixed navigation bar on every page with active page highlighted
- Print button in nav — each page has a dedicated print stylesheet
- Student onboarding checklist with live progress bar
- No external dependencies — works fully offline once loaded
- System fonts only — no Google Fonts CDN required

---

## Notes

- Verify all content against the current **IB DT 2027 Subject Guide** and **Edexcel 9DT0 Specification Issue 2 (February 2022)** before use in delivery
- NEA dates and moderation requirements should be checked against the current **Pearson Administrative Support Guide (ASG)** each academic year
- Prepared April 2026

---

## Qualifications covered

| Qualification | Code | Assessment |
|---|---|---|
| IB Design Technology | DP DT 2027 | Criteria A–E · IA Portfolio · Paper 1 (SL) + Paper 2 (HL) |
| Edexcel A Level Design & Technology | 9DT0 | Component 1: 2h 30min exam (50%) · Component 2: NEA (50%) |
