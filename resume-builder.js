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
              max-width: 800px;
              margin: 2rem auto;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          }

          .resume-form {
              background: #fff;
              padding: 2.5rem;
              border-radius: 16px;
              box-shadow: 0 8px 30px rgba(0,0,0,0.1);
          }

          .form-section {
              margin-bottom: 2rem;
          }

          .form-section h3 {
              font-size: 1.5rem;
              color: #4A90E2;
              margin-bottom: 1.5rem;
              border-bottom: 2px solid #f0f0f0;
              padding-bottom: 0.5rem;
          }

          .form-group {
              margin-bottom: 1.25rem;
          }

          label {
              display: block;
              margin-bottom: 0.5rem;
              font-weight: 500;
              color: #555;
          }

          input[type="text"],
          input[type="email"],
          input[type="tel"],
          textarea {
              width: 100%;
              padding: 0.75rem;
              border: 1px solid #ccc;
              border-radius: 8px;
              font-size: 1rem;
              transition: border-color 0.3s, box-shadow 0.3s;
          }

          input[type="text"]:focus,
          input[type="email"]:focus,
          input[type="tel"]:focus,
          textarea:focus {
              outline: none;
              border-color: #4A90E2;
              box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
          }

          textarea {
              resize: vertical;
              min-height: 100px;
          }

          .generate-btn {
              background-color: #50E3C2;
              color: #fff;
              padding: 0.8rem 1.8rem;
              border: none;
              border-radius: 8px;
              font-size: 1.1rem;
              font-weight: bold;
              cursor: pointer;
              transition: background-color 0.3s, transform 0.2s;
              box-shadow: 0 4px 10px rgba(80, 227, 194, 0.4);
          }

          .generate-btn:hover {
              background-color: #48d1b3;
              transform: translateY(-2px);
          }
          #resume-output {
            margin-top: 2rem;
            padding: 2rem;
            border: 1px solid #ccc;
            border-radius: 8px;
            background: #fff;
         }
      </style>
      <div class="resume-form">
        <div class="form-section">
          <h3>Personal Information</h3>
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" required>
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="tel" id="phone">
          </div>
        </div>

        <div class="form-section">
          <h3>Education</h3>
          <div class="form-group">
            <label for="degree">Degree</label>
            <input type="text" id="degree">
          </div>
          <div class="form-group">
            <label for="university">University</label>
            <input type="text" id="university">
          </div>
        </div>

        <div class="form-section">
            <h3>Experience</h3>
            <div class="form-group">
                <label for="experience">Work Experience</label>
                <textarea id="experience" rows="4"></textarea>
            </div>
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
