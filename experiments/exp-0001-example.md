---
title: "Exp 0001 — Masking Handwritten Signatures"
date: 2025-08-08
hypothesis: "Fine-tuned detector on signature subset reduces miss rate by 30%."
tags: [ocr, security, redaction]
links:
  - label: Notebook
    url: https://colab.research.google.com/...
  - label: Issue
    url: https://github.com/<you>/<repo>/issues/1
---

## Setup
- **Data**: 500 scanned docs with labeled signatures.
- **Model**: YOLOv8n + custom head.
- **Metrics**: mAP@0.5, recall, precision.

## Results
- mAP@0.5 = 0.71 (baseline 0.54)
- Recall = 0.76 (baseline 0.61)

## Artifacts
- Model weights: `weights/exp0001.pt`
- Sample outputs: `assets/exp0001/*.png`

## Discussion
- Failure cases: low-contrast scans; cursive overlaps.
- Next: augment with ink bleed + rotation.