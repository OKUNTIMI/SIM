# SIM — Security Incident Mapping

SEN202 Weekend 1 Development Assignment (submitted to Dr. O. O. Ajayi)

A mini web platform that is designed to lets students, staff, and off-campus landlords quickly report
campus security incidents (theft, assault, stabbing, rape, murder, kidnapping, etc.),
optionally anonymously, and view a live incident feed.

## Repository structure


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

