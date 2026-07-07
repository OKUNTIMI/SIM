# SIM Needs-Assessment Questionnaire — Google Form Design

**Form title:** SIM (Security Incident Mapping) — Campus Security & Crime Reporting Needs Assessment
**Form description (paste into Google Forms header):**
> This survey supports the design of SIM, a web platform for reporting campus security incidents (theft, assault, stabbing, rape, murder, etc.) quickly and safely. It takes about 4 minutes. All responses are confidential and anonymous — do not enter your name. Thank you for helping make our campus community safer.

Build this in Google Forms using **Sections** (⋮ menu → "Add section") and the **"Go to section based on answer"** option on Q1, so Students, Staff, and Landlords each see a short block of questions relevant to them, in addition to the shared questions everyone answers.

---

## Section 1 — Screening & Shared Questions (everyone answers)

| # | Question | Type | Options |
|---|---|---|---|
| Q1 | What is your role in the campus community? | Multiple choice (branching) | Student → go to Section 2 · Staff → go to Section 3 · Landlord/Property Agent → go to Section 4 |
| Q2 | Age range | Multiple choice | Under 18 · 18–24 · 25–34 · 35–44 · 45+ |
| Q3 | Gender | Multiple choice | Male · Female · Prefer not to say |
| Q4 | How would you rate the current level of security around campus? | Linear scale 1–5 | 1 = Very unsafe, 5 = Very safe |
| Q5 | Have you ever witnessed or experienced a security incident on/around campus? | Multiple choice | Yes · No |
| Q6 | *(Shown if Q5 = Yes)* What type of incident was it? | Checkboxes | Theft/stealing · Stabbing/assault · Rape/sexual assault · Murder · Kidnapping · Cultism-related violence · Other |
| Q7 | *(Shown if Q5 = Yes)* Did you report it to anyone? | Multiple choice | Yes · No |
| Q8 | *(Shown if Q7 = No)* Why didn't you report it? | Checkboxes | Fear of retaliation · Didn't know who to report to · Distrust of security/police · Felt nothing would be done · Too time-consuming/stressful · Other |
| Q9 | How do you currently hear about or report security incidents? | Checkboxes | Word of mouth · In person at security office · Phone call · Social media/WhatsApp group · I don't know any channel · Other |
| Q10 | Would you use a mobile/web app to report security incidents in real time? | Multiple choice | Yes · No · Maybe |
| Q11 | Would you prefer to report anonymously? | Multiple choice | Yes, always · No, I don't mind being identified · Depends on the incident |
| Q12 | How important is it for you to see a live map of recent incidents nearby? | Linear scale 1–5 | 1 = Not important, 5 = Very important |
| Q13 | Which features would you want in a security reporting app? | Checkboxes | One-tap SOS button · Photo/video evidence upload · Live incident map · Anonymous reporting · Real-time alerts/notifications · Direct call to security · Incident status tracking · Other |
| Q14 | Any additional comments or suggestions? | Paragraph (optional) | — |

## Section 2 — Student-specific (only Students see this, then submit)

| # | Question | Type | Options |
|---|---|---|---|
| SA1 | What is your level/year of study? | Multiple choice | 100L · 200L · 300L · 400L · 500L+/Postgrad |
| SA2 | Where do you currently reside? | Multiple choice | On-campus hostel · Off-campus lodge/villa |
| SA3 | How would you rate the security around your hostel/lodge specifically? | Linear scale 1–5 | 1 = Very unsafe, 5 = Very safe |

## Section 3 — Staff-specific (only Staff see this, then submit)

| # | Question | Type | Options |
|---|---|---|---|
| SB1 | Which department/unit do you work in? | Short answer | — |
| SB2 | Does your role require you to move around campus after dark (e.g., night shifts, late closing)? | Multiple choice | Yes · No |

## Section 4 — Landlord-specific (only Landlords see this, then submit)

| # | Question | Type | Options |
|---|---|---|---|
| SC1 | Roughly how many student tenants do you currently have? | Multiple choice | 1–5 · 6–15 · 16–30 · 30+ |
| SC2 | Have any security incidents occurred in or around your property in the past year? | Multiple choice | Yes · No · Not sure |
| SC3 | Would you be willing to share basic tenant/security contact info with campus security to speed up incident response? | Multiple choice | Yes · No · Maybe, with conditions |

---

## Why this design satisfies the brief

- **Captures all three stakeholder groups** (students, staff, landlords) named in the assignment, using Q1 to branch respondents into the right section — landlords are explicitly included since students live in their properties.
- **Shared core (Q2–Q14)** produces comparable data across groups for the Ishikawa analysis (e.g., trust in reporting, willingness to use tech, anonymity preference).
- **Role-specific tail questions** surface context unique to each group (hostel vs. lodge safety for students, night-shift exposure for staff, tenant scale and incident history for landlords).
- Conditional logic (Q6–Q8 shown only when relevant) keeps the form short for people with nothing to report, respecting the "avoid complexity, mind submission time" instruction in spirit.

## Setting up branching in Google Forms (quick steps)

1. Create the form and add Section 1 questions.
2. Add three more sections (2, 3, 4) with their respective questions, ending each in "Submit form."
3. On Q1, click the ⋮ (more) menu on the question → **"Go to section based on answer"** → map Student→Section 2, Staff→Section 3, Landlord→Section 4.
4. For Q6/Q7/Q8 conditional questions, either place them in a separate section with "Go to section based on answer" on Q5/Q7, or simply leave them in Section 1 and mark them optional (simpler, avoids too many sections — recommended given the time constraint).
