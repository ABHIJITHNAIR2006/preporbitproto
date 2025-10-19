class ResumeBuilder extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
          :host {
              display: block;
              width: 100%;
          }
          .resume-form {
              background: var(--surface-color);
              padding: var(--spacing-lg);
              border-radius: var(--border-radius);
              box-shadow: var(--shadow-md);
          }
          .form-section h3 {
              font-size: 1.75rem;
              color: var(--primary-color);
              margin-bottom: var(--spacing-md);
              padding-bottom: var(--spacing-sm);
              border-bottom: 2px solid var(--primary-color-light);
          }
          .form-group { margin-bottom: var(--spacing-md); }
          label {
              display: block;
              margin-bottom: var(--spacing-sm);
              font-weight: 500;
              color: var(--text-color);
          }
          input[type="text"], input[type="email"], input[type="tel"], textarea {
              width: 100%;
              padding: var(--spacing-md);
              border: 1px solid var(--primary-color-light);
              border-radius: var(--border-radius);
              font-size: 1rem;
              transition: all 0.3s ease;
              background-color: var(--bg-color);
              color: var(--text-color);
          }
          input[type="text"]:focus, input[type="email"]:focus, input[type="tel"]:focus, textarea:focus {
              outline: none;
              border-color: var(--primary-color);
              box-shadow: 0 0 0 3px oklch(70% 0.1 255 / 25%);
          }
          textarea { resize: vertical; min-height: 120px; }
          .generate-btn {
              background-color: var(--secondary-color);
              color: white;
              padding: 0.8rem 1.8rem;
              border: none;
              border-radius: var(--border-radius);
              font-size: 1.1rem;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
              box-shadow: var(--shadow-sm);
          }
          .generate-btn:hover {
              filter: brightness(1.1);
              transform: translateY(-2px);
          }
          #resume-output {
            margin-top: var(--spacing-lg);
            padding: var(--spacing-lg);
            border: 1px solid var(--primary-color-light);
            border-radius: var(--border-radius);
            background: var(--bg-color);
         }
      </style>
      <div class="resume-form">
          <div class="form-section">
              <h3>Personal Information</h3>
              <div class="form-group"><label for="name">Full Name</label><input type="text" id="name" required></div>
              <div class="form-group"><label for="email">Email</label><input type="email" id="email" required></div>
              <div class="form-group"><label for="phone">Phone</label><input type="tel" id="phone"></div>
          </div>
          <div class="form-section">
              <h3>Education</h3>
              <div class="form-group"><label for="degree">Degree</label><input type="text" id="degree"></div>
              <div class="form-group"><label for="university">University</label><input type="text" id="university"></div>
          </div>
          <div class="form-section">
              <h3>Experience</h3>
              <div class="form-group"><label for="experience">Work Experience</label><textarea id="experience" rows="5"></textarea></div>
          </div>
          <button class="generate-btn">Generate Resume</button>
          <div id="resume-output"></div>
      </div>
    `;

    const generateBtn = this.shadowRoot.querySelector('.generate-btn');
    generateBtn.addEventListener('click', () => this.generateResume());
  }

  generateResume() {
    const name = this.shadowRoot.querySelector('#name').value;
    const email = this.shadowRoot.querySelector('#email').value;
    const phone = this.shadowRoot.querySelector('#phone').value;
    const degree = this.shadowRoot.querySelector('#degree').value;
    const university = this.shadowRoot.querySelector('#university').value;
    const experience = this.shadowRoot.querySelector('#experience').value;

    const resumeOutput = this.shadowRoot.querySelector('#resume-output');
    resumeOutput.innerHTML = `
      <h2>${name}</h2>
      <p>Email: ${email} | Phone: ${phone}</p>
      <hr>
      <h3>Education</h3>
      <p>${degree}, ${university}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
    `;
  }
}

customElements.define('resume-builder', ResumeBuilder);

document.addEventListener('DOMContentLoaded', () => {
    const resumeContainer = document.querySelector('.resources-section');
    if (resumeContainer) {
        const resumeBuilder = document.createElement('resume-builder');
        resumeContainer.appendChild(resumeBuilder);
    }
});
