const features = [
    { 
        title: 'Comprehensive Mock Tests',
        description: 'Prepare for real-world interviews with our extensive library of mock tests from top tech companies.',
        icon: '📄'
    },
    { 
        title: 'Curated Interview Questions',
        description: 'Practice with a collection of frequently asked questions in technical interviews, covering various topics.',
        icon: '💡'
    },
    { 
        title: 'Expert Resume Building',
        description: 'Get guidance on creating a professional, standout resume that catches the eye of recruiters.',
        icon: '📝'
    }
];

const mockTests = [
    { company: 'Google', title: 'Software Engineering Intern' },
    { company: 'Microsoft', title: 'Product Manager' },
    { company: 'Amazon', title: 'Data Science Intern' },
    { company: 'TCS', title: 'Ninja Developer' },
    { company: 'Infosys', title: 'Systems Engineer' },
    { company: 'Wipro', title: 'Project Engineer' },
];

const interviewQuestions = [
    {
        question: "What is the difference between `let`, `const`, and `var` in JavaScript?",
        answer: "`var` declarations are globally scoped or function scoped while `let` and `const` are block scoped. `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared.",
        company: "Google",
        topic: "JavaScript"
    },
    {
        question: "Explain the concept of closures in JavaScript.",
        answer: "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.",
        company: "Microsoft",
        topic: "JavaScript"
    },
    {
        question: "What are promises in JavaScript?",
        answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, it is a returned object to which you attach callbacks, instead of passing callbacks into a function.",
        company: "Amazon",
        topic: "JavaScript"
    }
];

class FeatureCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const icon = this.getAttribute('icon');

        this.shadowRoot.innerHTML = `
            <style>
                * { box-sizing: border-box; }
                :host {
                    display: block;
                    height: 100%;
                }
                .card {
                    background: var(--surface-color);
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-md);
                    padding: var(--spacing-lg);
                    text-align: center;
                    height: 100%;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                }
                .icon { font-size: 2.5rem; margin-bottom: var(--spacing-md); }
                h3 { color: var(--primary-color); font-size: 1.5rem; margin-bottom: var(--spacing-sm); }
                p { color: var(--text-muted-color); }
            </style>
            <div class="card">
                <div class="icon">${icon}</div>
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        `;
    }
}

customElements.define('feature-card', FeatureCard);

class MockTestCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const company = this.getAttribute('company');
        const title = this.getAttribute('title');
        const link = `${company.toLowerCase()}-mock-test.html`;

        this.shadowRoot.innerHTML = `
            <style>
                * { box-sizing: border-box; }
                :host {
                    display: block;
                    height: 100%;
                }
                .card {
                    background: var(--surface-color);
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow-md);
                    padding: var(--spacing-lg);
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                }
                h3 {
                    color: var(--primary-color);
                    margin-top: 0;
                    font-size: 1.75rem;
                    margin-bottom: var(--spacing-sm);
                }
                p {
                    color: var(--text-muted-color);
                    font-size: 1.1rem;
                    margin: 0;
                }
                .start-button {
                    background-color: var(--secondary-color);
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    text-decoration: none;
                    border-radius: var(--border-radius);
                    font-weight: 600;
                    display: block;
                    text-align: center;
                    margin-top: var(--spacing-md);
                    transition: all 0.3s ease;
                }
                .start-button:hover {
                    filter: brightness(1.1);
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-md);
                }
            </style>
            <div class="card">
                <div>
                    <h3>${company}</h3>
                    <p>${title}</p>
                </div>
                <a href="${link}" class="start-button">Start Test</a>
            </div>
        `;
    }
}

customElements.define('mock-test-card', MockTestCard);

document.addEventListener('DOMContentLoaded', () => {
    const featuresContainer = document.querySelector('#features-container');
    if (featuresContainer) {
        features.forEach(feature => {
            const featureCard = document.createElement('feature-card');
            featureCard.setAttribute('title', feature.title);
            featureCard.setAttribute('description', feature.description);
            featureCard.setAttribute('icon', feature.icon);
            featuresContainer.appendChild(featureCard);
        });
    }

    const mockTestsContainer = document.querySelector('#mock-tests-container');
    if (mockTestsContainer) {
        mockTests.forEach(test => {
            const testCard = document.createElement('mock-test-card');
            testCard.setAttribute('company', test.company);
            testCard.setAttribute('title', test.title);
            mockTestsContainer.appendChild(testCard);
        });
    }

    const interviewQuestionsContainer = document.querySelector('#interview-questions-container');
    if (interviewQuestionsContainer) {
        interviewQuestions.forEach(q => {
            const questionCard = document.createElement('interview-question');
            questionCard.setAttribute('question', q.question);
            questionCard.setAttribute('answer', q.answer);
            questionCard.setAttribute('company', q.company);
            questionCard.setAttribute('topic', q.topic);
            interviewQuestionsContainer.appendChild(questionCard);
        });
    }
});
