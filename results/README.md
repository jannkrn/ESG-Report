# ESG Report Analysis Results

Generated on 2026-07-20.

## Scope

This repository contains a DataNXT-based ESG reporting workflow and a generated-vs-actual text analysis for Amazon, Microsoft, SAP, and Zalando. The official ESG, sustainability, impact, or integrated reports are used only as benchmark documents for Part 3. They were not used as DataNXT input.

## Literature and methodological background

ESG reporting quality depends on whether disclosures cover material environmental, social, and governance topics, define reporting boundaries, provide quantified indicators, and connect claims to recognized frameworks such as GRI, TCFD, SASB/ISSB, EU CSRD/ESRS, and company-specific materiality assessments. Classical text analysis helps compare length, vocabulary, topic coverage, tone, and similarity. LLM-style qualitative analysis helps interpret missing themes, specificity, tradeoffs, and tensions that simple counts cannot fully capture.

## Results structure

- `Actual vs Generatet/Python Analyse`: notebook, requirements, CSV tables, extracted text, and SVG visualizations.
- `Actual vs Generatet/LLM Analyse`: qualitative Word analysis and DOCX audit.
- `reports/generated`: four DataNXT-generated ESG reports.
- `reports/actual`: official benchmark reports.

## Main empirical findings

- The generated reports are much shorter than the official reports. Across the four companies, generated report length ranges from 0.86% to 22.85% of the corresponding official report.
- The closest generated-vs-actual vocabulary match is SAP by TF-IDF cosine similarity (0.3436).
- The lowest generated-vs-actual vocabulary match is Zalando (0.2665), indicating a larger difference in framing or disclosure vocabulary.
- Official reports contain more detailed framework language, more disclosure-boundary information, more tables, and more company-specific evidence. Generated reports are clearer as compact summaries but weaker as audit-ready disclosures.
- Generated reports often show high numeric density per 1,000 words because they are short and condensed. This should not be confused with greater evidence depth; official reports contain much more total quantified disclosure.

## Figures and tables

- `Actual vs Generatet/Python Analyse/figures/word_counts_generated_vs_actual.svg`
- `Actual vs Generatet/Python Analyse/figures/average_sentence_length_generated_vs_actual.svg`
- `Actual vs Generatet/Python Analyse/figures/numeric_density_generated_vs_actual.svg`
- `Actual vs Generatet/Python Analyse/figures/esg_coverage_generated_vs_actual.svg`
- `Actual vs Generatet/Python Analyse/figures/risk_success_ratio_generated_vs_actual.svg`
- `Actual vs Generatet/Python Analyse/figures/similarity_generated_vs_actual.svg`
- `Actual vs Generatet/Python Analyse/figures/actual_prominent_terms.svg`

## Economic intuition

The comparison shows why corporate ESG disclosure is difficult to reproduce with a general AI workflow. Official reports are not only narratives about sustainability performance; they are also accountability documents shaped by regulation, assurance expectations, stakeholder pressure, sector-specific risks, and reporting-framework requirements. A reusable DataNXT workflow can produce consistent company summaries, but it tends to compress disclosure boundaries and industry-specific materiality.

## Critical reflection and limitations

- PDF extraction can miss tables, figures, footnotes, and layout cues.
- Keyword lexicons are transparent and reproducible but cannot fully capture context or factual correctness.
- Similarity scores are affected by report length and by framework boilerplate.
- The generated reports depend on available input sources and the quality of DataNXT answers marked as relevant.
- The LLM-style Word analysis is an interpretive synthesis guided by metrics, not a source-by-source legal or assurance audit.

## Reproducibility

Use `Actual vs Generatet/Python Analyse/requirements.txt` and run `analysis.ipynb`. The notebook uses relative paths and expects the repository structure to contain `reports/generated` and `reports/actual`.
## Formal literature basis

The literature basis combines ESG reporting frameworks and text-analysis methods: Berg, Kolbel, and Rigobon (2022) motivate caution around divergent ESG ratings; the GRI Standards define impact-oriented sustainability disclosure; the EU CSRD and ESRS define European sustainability reporting requirements; TCFD and IFRS S2 frame climate-related financial disclosure; and Loughran and McDonald (2011) motivate dictionary-based financial text analysis.

Formal references are listed in `literature/literature_review.md`.
## SAP benchmark update

SAP benchmark note: SAP's primary actual benchmark is now `reports/actual/SAP Integrated Report 2025 Official Online Benchmark.html`, a local HTML capture of official SAP Integrated Report 2025 online pages. This replaced the earlier SEC Form 20-F benchmark because the local SAP Integrated Report PDF copy was incomplete.
