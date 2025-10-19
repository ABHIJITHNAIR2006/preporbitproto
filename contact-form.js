class ContactForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; width: 100%; }
        .contact-form {
            background: var(--surface-color);
            padding: var(--spacing-lg);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-md);
        }
        .form-group { margin-bottom: var(--spacing-md); }
        label {
            display: block;
            margin-bottom: var(--spacing-sm);
            font-weight: 500;
            color: var(--text-color);
        }
        input[type="text"], input[type="email"], textarea {
            width: 100%;
            padding: var(--spacing-md);
            border: 1px solid var(--primary-color-light);
            border-radius: var(--border-radius);
            font-size: 1rem;
            transition: all 0.3s ease;
            background-color: var(--bg-color);
            color: var(--text-color);
        }
        input[type="text"]:focus, input[type="email"]:focus, textarea:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px oklch(70% 0.1 255 / 25%);
        }
        textarea { resize: vertical; min-height: 150px; }
        .submit-btn {
            background-color: var(--primary-color);
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
        .submit-btn:hover { filter: brightness(1.1); transform: translateY(-2px); }
        #success-message {
            margin-top: var(--spacing-md);
            color: var(--secondary-color-dark);
            font-weight: 500;
        }
      </style>
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" required>
        </div>
        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="6" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
        <div id="success-message"></div>
      </form>
    `;

    const contactForm = this.shadowRoot.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const successMessage = this.shadowRoot.querySelector('#success-message');
        successMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
        contactForm.reset();
    });
  }
}

customElements.define('contact-form', ContactForm);

document.addEventListener('DOMContentLoaded', () => {
    const contactFormContainer = document.getElementById('contact-form');
    if (contactFormContainer) {
        const contactForm = document.createElement('contact-form');
        contactFormContainer.appendChild(contactForm);
    }
});
