class InterviewQuestion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const question = this.getAttribute('question');
        const answer = this.getAttribute('answer');
        const company = this.getAttribute('company');
        const topic = this.getAttribute('topic');

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
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    text-align: left;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg);
                }
                .question-content {
                    flex-grow: 1;
                }
                .question-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: var(--spacing-sm);
                }
                .question-text {
                    font-weight: 600;
                    font-size: 1.2rem;
                    margin-right: var(--spacing-md);
                }
                .badges {
                    display: flex;
                    gap: var(--spacing-sm);
                    flex-shrink: 0;
                }
                .company-badge, .topic-badge {
                    padding: 0.4rem 0.8rem;
                    border-radius: var(--border-radius);
                    font-size: 0.85rem;
                    font-weight: 500;
                }
                .company-badge {
                    background-color: oklch(90% 0.05 255);
                    color: oklch(40% 0.1 255);
                }
                .topic-badge {
                    background-color: oklch(90% 0.05 160);
                    color: oklch(40% 0.1 160);
                }
                .answer-container {
                    display: none;
                    margin-top: var(--spacing-md);
                    padding-top: var(--spacing-md);
                    border-top: 1px solid oklch(95% 0.01 255);
                }
                .answer-text {
                    white-space: pre-wrap;
                    color: var(--text-muted-color);
                    background-color: var(--bg-color);
                    padding: var(--spacing-md);
                    border-radius: var(--border-radius);
                }
                .toggle-answer-btn {
                    background: none;
                    border: 1px solid var(--primary-color-light);
                    color: var(--primary-color);
                    padding: 0.6rem 1.2rem;
                    border-radius: var(--border-radius);
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    margin-top: var(--spacing-md);
                }
                .toggle-answer-btn:hover {
                    background-color: oklch(95% 0.02 255);
                    border-color: var(--primary-color);
                }
            </style>
            <div class="card">
                <div class="question-content">
                    <div class="question-header">
                        <p class="question-text">${question}</p>
                        <div class="badges">
                            <span class="company-badge">${company}</span>
                            <span class="topic-badge">${topic}</span>
                        </div>
                    </div>
                </div>
                <div class="answer-section">
                    <button class="toggle-answer-btn">Show Answer</button>
                    <div class="answer-container">
                        <p class="answer-text">${answer}</p>
                    </div>
                </div>
            </div>
        `;

        const toggleBtn = this.shadowRoot.querySelector('.toggle-answer-btn');
        const answerContainer = this.shadowRoot.querySelector('.answer-container');

        toggleBtn.addEventListener('click', () => {
            if (answerContainer.style.display === 'block') {
                answerContainer.style.display = 'none';
                toggleBtn.textContent = 'Show Answer';
            } else {
                answerContainer.style.display = 'block';
                toggleBtn.textContent = 'Hide Answer';
            }
        });
    }
}

customElements.define('interview-question', InterviewQuestion);
