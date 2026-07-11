# AI-Assisted ESG Report Generation and Text Analysis

## Companies

* Amazon
* Zalando
* Microsoft
* SAP

## Primary company

Microsoft is used as the primary company to develop and refine the reusable DataNXT workflow.

## Research question

How well can an AI-supported workflow generate an ESG report based on independent, publicly available company information compared with the company’s official ESG or sustainability report?

## Objective

This project develops one reusable DataNXT workflow to generate ESG reports for four companies. The generated reports are then compared with the official ESG or sustainability reports using text analysis in Python.

## Repository structure

* `data/`: collected public source material used as input for the DataNXT workflow
* `reports/generated/`: ESG reports generated with DataNXT
* `reports/actual/`: official ESG or sustainability reports, used only for comparison
* `literature/`: academic literature and ESG reporting frameworks
* `workflow/`: documentation of the DataNXT workflow
* `analysis.ipynb`: Python notebook for the text analysis
* `results/README.md`: final methodology, findings and critical reflection

## Important rule

The official ESG or sustainability reports are not used as input for the DataNXT workflow. They are only used later to compare them with the AI-generated reports.
## Final outputs

The final generated-vs-actual analysis is located in `results/Actual vs Generatet`:

* `Python Analyse/`: reproducible notebook, requirements, CSV metrics, extracted text, and visualizations.
* `LLM Analyse/`: qualitative generated-vs-actual Word analysis.
* `Together/`: final combined report with embedded visualizations and synthesis of Python and LLM findings.

