# Together - Final ESG Analysis Report

This folder contains the final integrated report combining the Python text-analysis findings and the LLM-style qualitative interpretation.

Files:

- `Final_ESG_Report_Analysis_Together.docx`: final combined report with embedded visualizations.
- `together_report_audit.txt`: structural DOCX audit.
- `figures/`: PNG chart files embedded in the report.

Embedded figures:

- `figures/together_similarity.png`
- `figures/together_length_percent.png`
- `figures/together_numeric_density.png`
- `figures/together_esg_density_gap.png`
- `figures/together_risk_success_gap.png`
- `figures/together_tone_ratio.png`

SAP source note: SAP's official Integrated Report 2025 PDF is listed on SAP Investor Relations, but direct shell download was blocked by SAP's CDN in this environment. The comparison therefore uses SAP's official SEC 2025 Annual Report Form 20-F as the full local actual benchmark.

## DOCX render QA

Visual DOCX render QA was attempted with render_docx.py, but LibreOffice/soffice was not available in this environment (WinError 2). The final report passed structural QA and contains embedded visuals, but it was not rendered to PNG in this environment.
