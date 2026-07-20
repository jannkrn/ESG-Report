# Together - Final ESG Analysis Report

This folder contains the final integrated report combining the Python text-analysis findings and the LLM-style qualitative interpretation.

Files:

- `Final_ESG_Report_Analysis_Together_FINAL.docx`: final combined report with embedded visualizations, metric definitions, and synthesis.
- `together_report_audit.txt`: structural DOCX audit.
- `figures/`: PNG chart files embedded in the report.

Embedded figures:

- `figures/together_similarity.png`
- `figures/together_length_percent.png`
- `figures/together_numeric_density.png`
- `figures/together_esg_density_gap.png`
- `figures/together_risk_success_gap.png`
- `figures/together_tone_ratio.png`

SAP source note: SAP's official Integrated Report 2025 PDF is listed by SAP, but direct shell download was blocked by SAP's CDN in this environment. The final comparison therefore uses an official SAP online Integrated Report benchmark captured from SAP's public Integrated Report, CSRD, Environmental Performance, Social Performance, Report Data Hub, and governance pages.

## DOCX render QA

Visual DOCX render QA was attempted with render_docx.py, but LibreOffice/soffice was not available in this environment (WinError 2). The final report passed structural QA and contains embedded visuals, but it was not rendered to PNG in this environment.
