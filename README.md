# SIM — Security Incident Mapping

SEN202 Weekend 1 Development Assignment (submitted to Dr. O. O. Ajayi)

A mini web platform that lets students, staff, and off-campus landlords quickly report
campus security incidents (theft, assault, stabbing, rape, murder, kidnapping, etc.),
optionally anonymously, and view a live incident feed.

## Repository structure

```
SIM-Project/
├── README.md
├── website/                         → the mini web application (open website/index.html)
│   ├── index.html                   home page + live stats
│   ├── report.html                  incident report form
│   ├── feed.html                    live incident feed with filters
│   ├── about.html                   about + emergency contacts
│   ├── style.css
│   └── app.js
└── docs/
    ├── Google_Form_Questionnaire_Design.md    → questionnaire design (build in Google Forms)
    ├── simulated_survey_responses.csv          → sample AI-generated responses to the questionnaire
    ├── Ishikawa_Fishbone_Diagram.drawio         → open in app.diagrams.net (draw.io)
    ├── Ishikawa_Fishbone_Diagram_preview.png    → static preview image
    ├── UseCase_Diagram.drawio                   → open in app.diagrams.net (draw.io)
    ├── UseCase_Diagram_preview.png              → static preview image
    ├── SIM_SRS_Document.docx                    → Software Requirements Specification
    └── SIM_SRS_Document.pdf                     → same SRS, PDF version for quick viewing
```

## How to run the mini website

No build step or server required:

1. Clone the repo.
2. Open `website/index.html` directly in a browser, **or** serve the folder locally:
   ```
   cd website
   python3 -m http.server 8000
   ```
   then visit `http://localhost:8000`.

Data is stored in the browser's `localStorage` to simulate a backend for this prototype
(see Section 2.5 and 6 of the SRS for the production architecture this maps onto).

## How to open the diagrams

Go to [app.diagrams.net](https://app.diagrams.net) → File → Open From → Device, and select
`Ishikawa_Fishbone_Diagram.drawio` or `UseCase_Diagram.drawio`. PNG previews are included
for quick viewing without draw.io.

## Assignment checklist

- [x] Google Form questionnaire design (students, staff, landlords) — `docs/Google_Form_Questionnaire_Design.md`
- [x] Simulated AI-generated questionnaire responses — `docs/simulated_survey_responses.csv`
- [x] Ishikawa (Fishbone) problem analysis, built for draw.io — `docs/Ishikawa_Fishbone_Diagram.drawio`
- [x] Mini web interface — `website/`
- [x] Use case diagram(s) — `docs/UseCase_Diagram.drawio`
- [x] SRS document (functional + non-functional requirements, component interactions) — `docs/SIM_SRS_Document.docx`
