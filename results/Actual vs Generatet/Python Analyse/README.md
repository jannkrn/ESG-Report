# Python Analyse - Generated vs. Actual

This folder contains the Python text-analysis outputs comparing DataNXT-generated ESG reports with official ESG, sustainability, impact, or integrated reports.

Main files:

- `analysis.ipynb`: notebook copy for the generated-vs-actual analysis.
- `requirements.txt`: Python dependencies.
- `document_metrics_generated_vs_actual.csv`: length, sentence, lexical, and numeric evidence metrics.
- `esg_coverage_generated_vs_actual.csv`: E, S, and G keyword coverage.
- `tone_metrics_generated_vs_actual.csv`: success, risk, controversy, and target/tradeoff tone signals.
- `pairwise_similarity_and_gaps.csv`: TF-IDF cosine similarity, Jaccard similarity, and generated-vs-actual gaps.
- `actual_prominent_terms.csv`: terms much more prominent in official reports than in generated reports.
- `figures/`: SVG charts used in the notebook and README.

Important methodological note: official reports are used only as benchmark documents for Part 3. They were not used as DataNXT workflow input.

## Source caveat

Source caveat: the SAP actual benchmark file currently available in reports/actual contains 5 extracted PDF pages. SAP length, similarity, and density metrics therefore reflect that supplied benchmark file and should not be interpreted as a comparison against a full-length SAP sustainability or integrated report unless the source file is replaced.
