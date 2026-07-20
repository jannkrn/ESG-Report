# DataNXT Workflow Documentation

## Purpose

This document describes how the generated ESG reports were created in the final workflow. It is a methodological description, not a chronological work log.

The final process is:

1. Source documents are collected and recorded in `data/sources.csv`.
2. Suitable working documents are uploaded to DataNXT and assigned to the relevant company project.
3. DataNXT is used to generate structured answers for the same four tasks for each company: General Information, Environmental, Social and Governance.
4. The important DataNXT answers are marked as relevant.
5. ChatGPT/Codex uses the relevant DataNXT answers and the documented source context to generate one English ESG report per company.
6. The generated ESG reports are saved in `reports/generated`.
7. Official actual reports are used separately as benchmarks for the generated-vs-actual analysis.

## Companies

The workflow was applied to four companies:

- Amazon
- Microsoft
- SAP
- Zalando

## Source Data

The source base is documented in `data/sources.csv`. The CSV records the company, source title, source type, URL or local path, and whether a source was intended for DataNXT input or benchmark comparison.

The DataNXT working base uses documents such as:

- annual reports
- proxy statements or AGM documents
- governance documents
- supplier standards and human-rights documents
- diversity and inclusion material
- responsible-AI material
- data-center and technology documents
- selected independent or academic sources
- risk and audit material

Official ESG, sustainability, CSRD, environmental, impact or integrated reports are treated mainly as actual benchmark documents for the comparison stage. They are not the main DataNXT working input unless explicitly required by the project boundary.

## DataNXT Workflow

Each company project in DataNXT follows the same four-task structure:

1. General Information
2. Environmental
3. Social
4. Governance

For each task, the relevant documents are attached in DataNXT. DataNXT then generates a source-grounded answer. Useful answers are marked as relevant, so they can be used later as the structured knowledge base for the generated ESG report.

The four-task structure makes the generated reports comparable across companies, because every company is processed with the same ESG logic.

## Report Generation

After the DataNXT answers are available, ChatGPT/Codex uses the relevant answers to create the final generated ESG reports. The reports are follow a consistent structure:

1. Company overview
2. Environmental performance, targets, risks and limitations
3. Social performance, workforce and stakeholder issues
4. Governance, responsible business practices and oversight
5. ESG risks, controversies and data gaps
6. Overall assessment and limitations
7. Source appendix

The final generated reports are stored in:

`reports/generated`

Generated files:

- `Amazon_ESG_Report_Generated.docx`
- `Microsoft_ESG_Report_Generated.docx`
- `SAP_ESG_Report_Generated.docx`
- `Zalando_ESG_Report_Generated.docx`

## DataNXT Prompts

The following prompts document the final prompt logic. The Amazon prompts were read back from DataNXT and the same four-task structure was reused for Microsoft, SAP and Zalando, with the company name and attached documents adapted to each company.

### 1. General Information

```text
Provide a concise and well-structured overview of Amazon as a company. Include its business model, main products and services, key business segments,software and service offerings, and overall corporate strategy.
```

### 2. Environmental

```text
Create the Environmental section of an Amazon ESG report. Use the selected AmamzonData Centers document as the main source. Focus on AWS data-center energy efficiency, PUE, AI infrastructure, cooling design including liquid cooling, water and resource use, circularity, hardware efficiency, AWS silicon, and environmental implications of scaling AI workloads. Write in a concise, structured report style with source-grounded statements.
```

### 3. Social

```text
Create the Social section of an Amazon ESG report. Use the selected Amazon racial equity audit document and the existing General Information insight as context. Cover human capital, employee experience, workplace processes, racial equity, diversity and inclusion, worker safety, and stakeholder impacts. Write in a concise, structured report style with source-grounded statements.
```

### 4. Governance

```text
Create the Governance section of an Amazon ESG report. Use the selected documents Amazon-2025-Annual-Report and Amazon.com, Inc. - Amazon-2026-Proxy-Statement. Cover board structure, committee and oversight responsibilities, shareholder rights and proposals, executive compensation, risk management, sustainability oversight, and responsible AI / technology governance where the documents support it. Write in a concise, structured report style with source-grounded statements.
```

## Input And Benchmark Boundary

The generated ESG reports and the actual benchmark reports serve different roles:

- DataNXT input documents provide the working knowledge base for generating the ESG reports.
- DataNXT answers provide structured ESG content for each company and ESG dimension.
- ChatGPT/Codex converts the relevant DataNXT answers into complete English ESG reports.
- Actual reports are used later for the Python and LLM-based generated-vs-actual comparison.

For SAP, the final benchmark uses an official online benchmark built from SAP Integrated Report 2025 pages, including the CSRD, Environmental Performance, Social Performance, Report Data Hub, and governance pages. This local HTML benchmark is stored in `reports/actual/SAP Integrated Report 2025 Official Online Benchmark.html`.

For Zalando, the full CSRD/ESRS report remains the actual benchmark. The DataNXT workflow relied on selected non-benchmark inputs such as AGM or governance material, DSA risk and audit material, D&I material, modern-slavery and supply-chain material, and selected strategy pages.

## Quality Checks

The generated reports were checked for:

- English report text
- consistent ESG structure
- presence of General Information, Environmental, Social and Governance content
- source appendix
- no TODO or TBD placeholders
- usable DOCX formatting

Visual DOCX render QA could not be performed in the Codex runtime because LibreOffice/soffice was not available on the system path.
