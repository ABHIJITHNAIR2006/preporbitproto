
class InterviewQuestion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isAnswerVisible = false;
  }

  connectedCallback() {
    const question = this.getAttribute('question');
    const company = this.getAttribute('company');
    const topic = this.getAttribute('topic');
    const answer = this.getAttribute('answer');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .question-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          padding: 1.5rem 2rem;
          text-align: left;
        }
        .question-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .question-text {
          font-weight: 600;
          font-size: 1.1rem;
          color: #333;
        }
        .company-badge {
          background-color: #f0f0f0;
          color: #555;
          padding: 0.3rem 0.6rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .topic-badge {
          background-color: #e6f4ff;
          color: #007bff;
          padding: 0.3rem 0.6rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          margin-left: 0.5rem;
        }
        .answer-container {
          display: none;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #eee;
        }
        .answer-text {
            white-space: pre-wrap;
            color: #444;
            font-family: monospace;
            background-color: #f7f7f7;
            padding: 1rem;
            border-radius: 8px;
        }
        .toggle-answer-btn {
          background: none;
          border: 1px solid #4A90E2;
          color: #4A90E2;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
        }
        .toggle-answer-btn:hover {
          background-color: #4A90E2;
          color: #fff;
        }
      </style>
      <div class="question-card">
        <div class="question-header">
            <p class="question-text">${question}</p>
            <div>
                <span class="company-badge">${company}</span>
                <span class="topic-badge">${topic}</span>
            </div>
        </div>
        <button class="toggle-answer-btn">Show Answer</button>
        <div class="answer-container">
          <p class="answer-text">${answer}</p>
        </div>
      </div>
    `;

    const toggleButton = this.shadowRoot.querySelector('.toggle-answer-btn');
    const answerContainer = this.shadowRoot.querySelector('.answer-container');

    toggleButton.addEventListener('click', () => {
      this.isAnswerVisible = !this.isAnswerVisible;
      answerContainer.style.display = this.isAnswerVisible ? 'block' : 'none';
      toggleButton.textContent = this.isAnswerVisible ? 'Hide Answer' : 'Show Answer';
    });
  }
}

customElements.define('interview-question', InterviewQuestion);
