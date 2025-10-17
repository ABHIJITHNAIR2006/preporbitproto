// Mock Test Data
const mockTests = [
    { company: 'Google', title: 'Software Engineering Intern' },
    { company: 'Microsoft', title: 'Product Manager' },
    { company: 'Amazon', title: 'Data Science Intern' },
    { company: 'TCS', title: 'Ninja Developer' },
    { company: 'Infosys', title: 'Systems Engineer' },
    { company: 'Wipro', title: 'Project Engineer' },
];

// Interview Question Data
const interviewQuestions = [
    {
        question: "What is the difference between `let`, `const`, and `var` in JavaScript?",
        company: "Google",
        topic: "JavaScript",
        answer: "`var` declarations are globally scoped or function scoped while `let` and `const` are block scoped. `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared."
    },
    {
        question: "Explain the concept of closures in JavaScript.",
        company: "Microsoft",
        topic: "JavaScript",
        answer: "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function."
    },
    {
        question: "What are promises in JavaScript?",
        company: "Amazon",
        topic: "JavaScript",
        answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, it is a returned object to which you attach callbacks, instead of passing callbacks into a function."
    }
];



// Web Component for Mock Test Card
class MockTestCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const company = this.getAttribute('company');
    const title = this.getAttribute('title');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
            --primary-color: #4A90E2;
            --secondary-color: #50E3C2;
            display: block;
        }
        .card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          padding: 1.5rem 2rem;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }
        h3 {
          color: var(--primary-color);
          margin-top: 0;
          font-size: 1.5rem;
        }
        p {
            color: #555;
            font-size: 1rem;
            flex-grow: 1;
        }
        .start-button {
            background-color: var(--secondary-color);
            color: #fff;
            padding: 0.6rem 1.2rem;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            display: inline-block;
            margin-top: 1.5rem;
            transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
            align-self: flex-start;
            box-shadow: 0 2px 5px rgba(80, 227, 194, 0.4);
        }
        .start-button:hover {
            background-color: #48d1b3;
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(80, 227, 194, 0.6);

        }
      </style>
      <div class="card">
        <h3>${company}</h3>
        <p>${title}</p>
        <a href="#" class="start-button">Start Test</a>
      </div>
    `;
  }
}

customElements.define('mock-test-card', MockTestCard);

// Populate content when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Populate mock tests
    const mockTestsContainer = document.querySelector('#mock-tests-container');
    if (mockTestsContainer) {
        mockTests.forEach(test => {
            const testCard = document.createElement('mock-test-card');
            testCard.setAttribute('company', test.company);
            testCard.setAttribute('title', test.title);
            mockTestsContainer.appendChild(testCard);
        });
    }

    // Populate interview questions
    const interviewQuestionsContainer = document.querySelector('#interview-questions-container');
    if (interviewQuestionsContainer) {
        interviewQuestions.forEach(q => {
            const questionEl = document.createElement('interview-question');
            questionEl.setAttribute('question', q.question);
            questionEl.setAttribute('company', q.company);
            questionEl.setAttribute('topic', q.topic);
            questionEl.setAttribute('answer', q.answer);
            interviewQuestionsContainer.appendChild(questionEl);
        });
    }
});