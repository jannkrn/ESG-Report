# ESG Report Analysis Results

Generated on 2026-07-11.

## Data basis

The analysis uses the four English ESG reports in `reports/generated`:

- Amazon: `Amazon_ESG_Report_Generated.docx`
- Microsoft: `Microsoft_ESG_Report_Generated.docx`
- SAP: `SAP_ESG_Report_Generated.docx`
- Zalando: `Zalando_ESG_Report_Generated.docx`

## Python analysis workflow

The notebook `analysis.ipynb` was rebuilt as a reproducible Python workflow. It uses techniques aligned with the lecture notebook `slides_pt4.ipynb`: regex preprocessing, lowercasing, stopword removal, term frequencies with `collections.Counter`, keyword-based thematic analysis, lexicon-based sentiment/tone analysis, and cosine similarity logic. Because the available local runtime does not include NLTK, scikit-learn, matplotlib, or wordcloud, the implementation uses pure Python equivalents for TF-IDF, Jaccard similarity, and SVG-based charts.

Created tabular outputs:

- `text_metrics.csv`: word count, sentence count, average sentence length, unique terms, lexical diversity, and numeric evidence density.
- `esg_keyword_coverage.csv`: Environmental, Social, and Governance keyword hits by company.
- `tone_metrics.csv`: success, risk, controversy, and target/tradeoff tone signals.
- `tfidf_cosine_similarity.csv`: pairwise similarity using manual TF-IDF cosine similarity.
- `jaccard_similarity.csv`: pairwise similarity using cleaned-token set overlap.
- `top_terms.csv`: most frequent cleaned terms by company.

Created visual outputs:

- `figures/word_counts.svg`
- `figures/average_sentence_length.svg`
- `figures/esg_keyword_coverage.svg`
- `figures/tone_profile.svg`
- `figures/tfidf_cosine_similarity.svg`
- `figures/jaccard_similarity.svg`
- `figures/top_terms.svg`
- `figures/keyword_cloud.svg`

## LLM-style qualitative analysis

The file `ESG_LLM_Qualitative_Analysis.docx` contains a qualitative comparative analysis of the generated reports. It covers factual contradictions or tensions, missing themes, numerical specificity, and whether each report emphasizes successes, risks, controversies, or target conflicts. This is a close-reading analysis guided by Python metrics; it is not an external fact-check and does not rely on an external LLM API call.

## Quality assurance

- The generated notebook is valid JSON with Python code cells and embedded SVG references.
- The Word document was generated with the `standard_business_brief` preset: US Letter, 1 inch margins, Calibri 11 pt body text, structured headings, and explicit table geometry.
- A structural DOCX audit was written to `llm_analysis_audit.txt`.
- Visual DOCX render QA was attempted with `render_docx.py`, but LibreOffice/`soffice` was not available in this environment (`WinError 2`). The document is therefore structurally checked, but not visually rendered to PNG.
