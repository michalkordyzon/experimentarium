---
title: "Attention Is All You Need"
date: 2017-06-12
year: 2017
venue: NeurIPS
authors: Vaswani et al.
tags: [transformer, nlp, attention]
pdf: https://arxiv.org/abs/1706.03762
code: https://github.com/tensorflow/tensor2tensor
dataset:
tldr: "Transformer eliminates recurrence with self-attention; faster parallel training and SOTA results."
status: summarised
bibtex: |
  @inproceedings{vaswani2017attention,
    title={Attention Is All You Need},
    author={Vaswani, Ashish and others},
    booktitle={Advances in Neural Information Processing Systems},
    year={2017}
  }
---

## Summary
- **Problem**: Sequence transduction without recurrence.
- **Method**: Multi-head self-attention + positional encoding.
- **Results**: SOTA on WMT'14 En–Fr/En–De.
- **Takeaways**: Parallelism + long-range dependencies.

## Notes
- Add your bullet points, figures, or quotes.

## Critique / Questions
- Where does it fail? What ablations matter?