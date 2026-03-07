# Data Flow — Dynamic Career Engine

## High-Level Data Flow

```mermaid
flowchart TB
    subgraph Input [Input Layer]
        PDF[PDF Upload]
        Manual[Manual Vault CRUD]
        JD[Job Description Paste]
    end

    subgraph Core [Core Engine]
        Blocks[(Blocks Table)]
        Instances[(Instances Table)]
        Overrides[(Overrides Table)]
        Parser[JD Parser]
        AI[AI Tailoring]
    end

    subgraph Output [Output Layer]
        Portfolio[Public Portfolio]
        PDFExport[ATS PDF]
        CoverLetter[Cover Letter]
        Bundle[ZIP Bundle]
    end

    PDF --> Parser
    Parser --> Blocks
    Manual --> Blocks
    JD --> Parser
    Parser --> AI
    Blocks --> AI
    AI --> Overrides
    Blocks --> Portfolio
    Instances --> Portfolio
    Blocks --> PDFExport
    Overrides --> PDFExport
    AI --> CoverLetter
    PDFExport --> Bundle
    CoverLetter --> Bundle
```

## API Design Notes

- **Blocks API:** CRUD for career blocks; filter by type, tags, visibility
- **Instances API:** CRUD for categories; map slugs to tag filters
- **Overrides API:** Create/update/delete per application (instance_id + block_id)
- **AI Endpoints:** JD parse, override suggestions, cover letter generation
- **Export Endpoint:** Generate PDF bundle (CV + cover letter) with overrides applied
