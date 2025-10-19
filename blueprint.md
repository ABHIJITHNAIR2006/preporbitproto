# Placement Prep - Project Blueprint

## Overview

This project is a web application designed to help students prepare for job placements. It provides resources such as company-specific mock tests, interview question banks, a resume builder, a skill-building section, and a contact form.

## Project Structure

- `index.html`: The main landing page of the application.
- `mock-tests.html`: The page for company-specific mock tests.
- `interview-prep.html`: The page for interview question banks.
- `resume-builder.html`: The page for the resume builder.
- `skill-building.html`: The page for skill-building resources.
- `contact.html`: The page for the contact form.
- `style.css`: Contains the styles for the application.
- `main.js`: The main JavaScript file, containing logic for populating the mock tests and interview questions.
- `interview-question.js`: A web component for displaying interview questions.
- `resume-builder.js`: A web component for the resume builder form.
- `skill-building.js`: The JavaScript file for the skill-building page.
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

### Skill Building Page

- Provides curated resources for Data Structures and Algorithms (DSA) and Web Development.
- Resources are categorized by topic.
- Each resource includes a link to an external website.

### Contact Us Page

- A contact form to allow users to send messages on a dedicated page.
- The form includes fields for name, email, and message.

## Design

- The application uses a modern and clean design.
- It uses a blue and green color scheme.
- The layout is responsive and adapts to different screen sizes.
- The application uses a noise texture for the background.
- The cards have a shadow to create a lifted effect.

## Current Plan: Add Skill Building Section

- **Objective:** To add a new section to the website for skill-building resources.
- **Steps Taken:**
  - Created `skill-building.html` to house the content.
  - Created `skill-building.js` to dynamically load the resource links.
  - Added CSS styles to `style.css` for the new section.
  - Updated the navigation bar in `index.html` and other relevant pages to include a link to the new "Skill Building" page.