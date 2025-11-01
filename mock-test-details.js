class MockTestDetails extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const question = this.getAttribute('question');
        const answer = this.getAttribute('answer');

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-bottom: var(--spacing-lg, 24px);
                }

                .question-card {
                    background-color: var(--surface-color, #ffffff);
                    border-radius: var(--border-radius-lg, 12px);
                    box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06));
                    padding: var(--spacing-xl, 32px);
                    transition: box-shadow 0.3s ease-in-out;
                    border: 1px solid var(--border-color, #e5e7eb);
                }

                .question-card:hover {
                    box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05));
                }

                .question {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--text-color, #1f2937);
                    margin-bottom: var(--spacing-md, 16px);
                    line-height: 1.5;
                }

                .toggle-answer-btn {
                    background-color: var(--primary-color, #007bff);
                    color: white;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: var(--border-radius, 6px);
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 0.9rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.2s ease-in-out;
                    box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0,0,0,0.05));
                }

                .toggle-answer-btn:hover {
                    background-color: var(--primary-dark-color, #0056b3);
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06));
                }
                
                .toggle-answer-btn .icon {
                    transition: transform 0.3s ease-in-out;
                }

                .answer-container {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.5s ease-in-out;
                    margin-top: 0;
                }
                
                .answer-container.visible {
                     max-height: 1500px; /* Adjusted to accomodate longer answers */
                     margin-top: var(--spacing-lg, 24px);
                }

                .answer-content {
                    border-top: 1px solid var(--border-color, #e5e7eb);
                    padding-top: var(--spacing-lg, 24px);
                    color: var(--text-muted-color, #4b5563);
                    line-height: 1.6;
                }
                
                /* Style for code blocks inside the answer */
                .answer-content pre {
                    background-color: #f3f4f6;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    overflow-x: auto;
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 0.9rem;
                    color: #1f2937;
                }

                /* Style for lists */
                .answer-content ul, .answer-content ol {
                    padding-inline-start: 20px;
                }
                 .answer-content li {
                    margin-bottom: 0.5rem;
                }

            </style>
            <div class="question-card">
                <div class="question">${question}</div>
                <button class="toggle-answer-btn">
                    <span class="icon">▶</span>
                    <span class="text">Show Answer</span>
                </button>
                <div class="answer-container">
                    <div class="answer-content">
                        ${answer}
                    </div>
                </div>
            </div>
        `;

        const toggleBtn = this.shadowRoot.querySelector('.toggle-answer-btn');
        const answerContainer = this.shadowRoot.querySelector('.answer-container');
        const btnIcon = this.shadowRoot.querySelector('.toggle-answer-btn .icon');
        const btnText = this.shadowRoot.querySelector('.toggle-answer-btn .text');

        toggleBtn.addEventListener('click', () => {
            const isVisible = answerContainer.classList.toggle('visible');
            if (isVisible) {
                btnText.textContent = 'Hide Answer';
                btnIcon.style.transform = 'rotate(90deg)';
            } else {
                btnText.textContent = 'Show Answer';
                btnIcon.style.transform = 'rotate(0deg)';
            }
        });
    }
}

customElements.define('mock-test-details', MockTestDetails);
