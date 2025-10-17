# Placement Prep - Project Blueprint

## Overview

This project is a web application designed to help students prepare for job placements. It provides resources such as company-specific mock tests, interview question banks, a resume builder, and a contact form.

## Project Structure

- `index.html`: The main landing page of the application.
- `mock-tests.html`: The page for company-specific mock tests.
- `interview-prep.html`: The page for interview question banks.
- `resume-builder.html`: The page for the resume builder.
- `contact.html`: The page for the contact form.
- `style.css`: Contains the styles for the application.
- `main.js`: The main JavaScript file, containing logic for populating the mock tests and interview questions.
- `interview-question.js`: A web component for displaying interview questions.
- `resume-builder.js`: A web component for the resume builder form.
- `contact-form.js`: A web component for the contact form.

## Features

### Landing Page

- A welcoming hero section with a call to action.
- An "About Us" section providing a brief description of the platform.

### Mock Tests Page

- Displays a list of company-specific mock tests on a dedicated page.
- Each mock test is displayed as a card with the company name and job title.

### Interview Question Banks Page

- Displays a list of interview questions from various companies on a dedicated page.
- Each question is displayed as a card with the question, company, topic, and a button to show/hide the answer.

### Resume Builder Page

- Provides a form to create a professional resume on a dedicated page.
- The form includes fields for personal information, education, and experience.
- The resume is generated and displayed on the page.

### Contact Us Page

- A contact form to allow users to send messages on a dedicated page.
- The form includes fields for name, email, and message.

## Design

- The application uses a modern and clean design.
- It uses a blue and green color scheme.
- The layout is responsive and adapts to different screen sizes.
- The application uses a noise texture for the background.
- The cards have a shadow to create a lifted effect.

## Current Plan: Final Spacing Correction

- **Objective:** To set a `50px` space between all cards on the Mock Tests and Interview Prep pages, as requested.
- **Steps Taken:**
  - **Grid Container (`style.css`):** The `gap` property for the `#mock-tests-container` and `#interview-questions-container` selectors was set to `50px`. This is the sole property responsible for creating space between the cards.
  - **Web Components (`main.js`, `interview-question.js`):** Any `margin` properties on the `:host` of the `mock-test-card` and `interview-question` components were removed to prevent interference with the `gap` property of the parent grid.
  - **This is the definitive and correct implementation for the requested spacing.**
