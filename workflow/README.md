# DataNXT Workflow Documentation

## Primary company

Microsoft

## Goal

Create a reusable AI workflow that generates a structured ESG report based only on permitted public input data.

## Input data used for Microsoft

The following documents may be uploaded to DataNXT:

* Microsoft Annual Report 2025
* Microsoft 2025 Proxy Statement
* Microsoft Datacenter Cooling article
* ITU and World Benchmarking Alliance: Greening Digital Companies 2025
* Microsoft 2024 Global Diversity and Inclusion Report
* Microsoft 2025 Responsible AI Transparency Report
* Academic article on carbon and water footprints of data centres and AI

## Excluded documents

The following documents must not be uploaded to DataNXT:

* Microsoft 2025 Environmental Sustainability Report
* Microsoft 2025 Impact Summary

These documents are only used later as official benchmark reports for the Python-based text comparison.

## Workflow principles

The workflow should:

1. Use only information supported by uploaded sources.
2. Distinguish clearly between facts, targets and assumptions.
3. Mention missing information instead of inventing metrics.
4. Cover Environmental, Social and Governance topics.
5. Include both positive initiatives and relevant risks or limitations.
6. Remain general enough to work for Amazon, Zalando and SAP.

## Expected report structure

1. Company overview
2. Environmental performance, targets, risks and limitations
3. Social performance, workforce and stakeholder issues
4. Governance, responsible business practices and oversight
5. ESG risks, controversies and data gaps
6. Overall assessment and limitations


## Workflow log - 2026-07-11 10:31

### Source audit and update

Reviewed the existing source folders and `data/sources.csv` for Amazon, Microsoft, SAP and Zalando. Additional current sources were researched online and added to the CSV where they improve one of the four DataNXT task areas: General Information, Environmental, Social and Governance.

Methodological boundary preserved: official ESG, Sustainability, CSRD or Environmental Sustainability reports remain marked as benchmark/comparison sources and are not used as DataNXT input unless the project rule is explicitly changed later. Targeted non-report sources such as supplier standards, human-rights pages, D&I strategy pages, annual reports, proxy/AGM documents, data-center pages, responsible-AI policies and independent/academic sources are used for DataNXT tasks.

CSV update summary:

* Added 10 source rows.
* Updated 2 existing source rows.
* Newly highlighted DataNXT-relevant gaps: Amazon supply-chain/human-rights standards, Microsoft current D&I framing, Zalando current sustainability/D&I strategy and reporting-governance context.
* Newly highlighted benchmark-only sources: Amazon 2025 Sustainability Report, Microsoft 2025 Environmental Sustainability Report, SAP 2025 CSRD Sustainability Statement plus environmental and social performance pages.

## Workflow log - 2026-07-11 DataNXT update

### DataNXT project status

Reviewed the existing DataNXT projects for Amazon, SAP and Microsoft and created a separate project named `ESG Report Zalando`.

Current status:

* Amazon: four standard tasks exist. General Information, Environmental, Social and Governance contain source-grounded answers; the relevant answers are available in the project. The Environmental task contains an older failed message, but also a later relevant answer.
* SAP: four standard tasks exist. General Information, Environmental and Governance contain useful source-grounded answers. Social has a relevant answer based on the SAP 2023 Diversity and Inclusion Report; a later attempt to improve the answer failed in DataNXT with a missing-reply error, so SAP social detail is supplemented locally from the SAP annual report and D&I source during report generation.
* Microsoft: the project contains the relevant insights in the project-process view, including General Information, Environmental, Social, Governance and a synthesis of five insights.
* Zalando: a new project and four standard tasks were created. The DataNXT document library did not contain Zalando documents. The local PDFs could not be uploaded through Codex browser automation because the in-app browser connector does not expose file-upload control. The user offered to upload the Zalando PDFs manually; once available, these documents can be attached to the four Zalando tasks.

### Local extraction for report generation

All local PDF sources in `data/amazon`, `data/microsoft`, `data/sap` and `data/zalando` were extracted into a local working JSON file for report drafting. This preserves report generation progress even where DataNXT upload or response generation is limited by the browser UI.

## 2026-07-11 DataNXT Completion and Report Generation

- The DataNXT projects for Amazon, Microsoft, SAP and Zalando were aligned with the same four-task structure: General Information, Environmental, Social and Governance.
- After the manual upload of the five local Zalando PDFs, the Zalando project was completed in DataNXT. General, Environmental and Social used the 328-page Zalando Annual Report 2025; Social additionally used the D&I appendix; Governance used the annual-report overview, AGM 2026 invitation and DSA Risk Report 2025.
- The important DataNXT answers were marked as relevant. For SAP Social, an older relevant D&I answer remained in place and was supplemented in the final report with local Annual/Integrated Report evidence.
- The local source base was updated in data/sources.csv with additional official primary sources and benchmark/comparison sources. Official ESG, sustainability and integrated reports remain benchmark and validation sources rather than the only DataNXT working basis.
- Four English ESG reports were generated as DOCX files: Amazon_ESG_Report_Generated.docx, Microsoft_ESG_Report_Generated.docx, SAP_ESG_Report_Generated.docx and Zalando_ESG_Report_Generated.docx.
- Target folder: C:\Jann\Studium\2. Semester\ESG-Report\reports\generated.
- QA: the English DOCX structure audit passed for all four reports (Methodology, DataNXT Status, E/S/G sections, Source Appendix, 1-inch margins, table structure, no TODO/TBD placeholders and no German section markers). Visual PNG render QA could not be performed because LibreOffice/soffice is not installed or available on the system path in the Codex runtime.

