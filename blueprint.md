
# **Project Blueprint: Placement Prep**

## **1. Overview**

**Purpose:** A comprehensive web application designed to help students and professionals prepare for job placement interviews. The platform provides resources for mock tests, interview preparation, resume building, skill enhancement, and question solving.

**Key Capabilities:**
- Centralized dashboard for accessing all preparation materials.
- Interactive mock tests simulating real interview scenarios.
- Curated interview questions and answers for various technical and behavioral topics.
- A simple resume builder with tips and templates.
- Resources for building technical skills in DSA and web development.
- Links to popular platforms for practicing coding questions.

---

## **2. Design and Features**

### **Aesthetics & UI/UX**

- **Layout:** Clean, modern, and intuitive with a consistent navigation bar and footer. The main content is organized into clear sections with ample white space.
- **Color Palette:** 
  - `Primary Color`: `#007BFF` (a vibrant blue for interactive elements).
  - `Secondary Color`: `#6C757D` (a muted gray for secondary text).
  - `Background Color`: `#F8F9FA` (a light, clean background).
  - `Surface Color`: `#FFFFFF` (for cards and modals).
  - `Text Color`: `#212529`.
- **Typography:** Uses a clean, sans-serif font family for readability. `font-family: 'Roboto', sans-serif;`
- **Iconography:** Uses Font Awesome for icons to provide clear visual cues.
- **Interactivity:** Buttons and links have clear hover states and a consistent call-to-action style.

### **Implemented Features**

- **Home Page (`index.html`):**
  - **Hero Section:** Engaging headline and a call-to-action button.
  - **Features Section:** Dynamically generated cards for each of the main features (Mock Tests, Interview Prep, etc.).
- **Mock Tests Page (`mock-tests.html`):**
  - Displays a grid of available mock tests.
  - Each test is a "card" with a title and a button to start.
- **Interview Prep Page (`interview-prep.html`):**
  - Organizes questions and answers by topic (DSA, OOPs, DBMS, etc.).
  - Uses a custom `<mock-test-details>` web component to display questions and answers in an expandable format.
- **Resume Builder Page (`resume-builder.html`):**
  - Provides a hero section and a placeholder for resume tips.
- **Skill Building Page (`skill-building.html`):**
  - Displays curated resources (articles, tutorials) for DSA and Web Development.
- **Question Solving Page (`question-solving.html`):**
  - Provides links to popular coding problems on platforms like LeetCode and HackerRank, organized by topic.
- **Authentication (`auth.html` & `auth-page.js`):
  - A standalone, centered authentication page supporting both "Login" and "Sign Up" modes.
  - The form dynamically switches between Login and Sign Up based on a URL parameter (`?mode=login` or `?mode=signup`).
- **Web Components:**
  - `auth-page.js`: A custom element for the login/signup form.
  - `mock-test-details.js`: A custom element to display a question and its answer, with a toggle to show/hide the answer.

---

## **3. Current Plan: Merge Login and Sign Up**

**User Request:** "I want the login and signup section to merge into one login/signup section."

**Analysis:** The user wants to simplify the navigation by combining the separate "Login" and "Sign Up" buttons into a single, unified link.

### **Completed Steps:**

1.  **Updated `auth.html`:**
    -   Removed the `<header>` and `<footer>` to create a dedicated, distraction-free authentication page.
    -   Added inline CSS to center the `<auth-page>` component vertically and horizontally on the page.

2.  **Updated Navigation Across All Pages:**
    -   Modified `index.html`, `mock-tests.html`, `interview-prep.html`, `resume-builder.html`, `skill-building.html`, and `question-solving.html`.
    -   In each file, the two separate `<li>` elements for "Login" and "Sign Up" were replaced with a single `<li>`:
        ```html
        <li><a href="auth.html?mode=login" class="cta-button">Login / Sign Up</a></li>
        ```
    -   This new link directs the user to the authentication page, defaulting to the login form, while presenting a clear, combined call-to-action.

This change streamlines the user interface and provides a more modern, efficient authentication experience.