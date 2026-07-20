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
## Exact DataNXT prompts

The following prompts were read back from the Amazon DataNXT project on 2026-07-20. The same four-task structure was reused for Microsoft, SAP and Zalando, with company names and attached documents adapted to the respective project.

### 1. Generall Information

DataNXT task URL: `https://chat.datanxt.de/project/zcthxqp15eea3pkt69st/tasks/aj1p4h6h8tjki1and1oo`

```text
Provide a concise and well-structured overview of Amazon as a company. Include its business model, main products and services, key business segments,software and service offerings, and overall corporate strategy.
```

### 2. Enviromental

DataNXT task URL: `https://chat.datanxt.de/project/zcthxqp15eea3pkt69st/tasks/bzxgkjnhgqg2aooz3jvq`

```text
Create the Environmental section of an Amazon ESG report. Use the selected AmamzonData Centers document as the main source. Focus on AWS data-center energy efficiency, PUE, AI infrastructure, cooling design including liquid cooling, water and resource use, circularity, hardware efficiency, AWS silicon, and environmental implications of scaling AI workloads. Write in a concise, structured report style with source-grounded statements.
```

### 3. Social

DataNXT task URL: `https://chat.datanxt.de/project/zcthxqp15eea3pkt69st/tasks/7vs8dpzvx69no37ez3hk`

```text
Create the Social section of an Amazon ESG report. Use the selected Amazon racial equity audit document and the existing General Information insight as context. Cover human capital, employee experience, workplace processes, racial equity, diversity and inclusion, worker safety, and stakeholder impacts. Write in a concise, structured report style with source-grounded statements.
```

### 4. Governance

DataNXT task URL: `https://chat.datanxt.de/project/zcthxqp15eea3pkt69st/tasks/1jhy98y9w3uxlt0jc0wh`

```text
Create the Governance section of an Amazon ESG report. Use the selected documents Amazon-2025-Annual-Report and Amazon.com, Inc. - Amazon-2026-Proxy-Statement. Cover board structure, committee and oversight responsibilities, shareholder rights and proposals, executive compensation, risk management, sustainability oversight, and responsible AI / technology governance where the documents support it. Write in a concise, structured report style with source-grounded statements.
```
## Input and benchmark boundary

The official ESG, sustainability, CSRD, environmental, impact or integrated reports are benchmark documents for Part 3 and are not used as DataNXT workflow input. The DataNXT input side uses annual reports, proxy or AGM documents, governance statements, supplier and human-rights standards, D&I documents, responsible-AI documents, data-center documents, risk reports, and selected independent sources.

SAP benchmark update: the local SAP Integrated Report PDF copy was incomplete. The final benchmark was therefore rebuilt from official SAP online Integrated Report 2025 pages, including the CSRD, Environmental Performance, Social Performance, Report Data Hub, and governance pages. This local HTML benchmark is stored in `reports/actual/SAP Integrated Report 2025 Official Online Benchmark.html` and replaces the SEC Form 20-F as SAP's primary actual benchmark in the final analysis.

Zalando boundary note: the full CSRD/ESRS report remains the actual benchmark. The DataNXT workflow relied on selected non-benchmark inputs such as AGM/governance material, DSA risk/audit material, D&I material, modern-slavery/supply-chain material and selected strategy pages.
