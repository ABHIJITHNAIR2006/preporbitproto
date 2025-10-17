class ContactForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
        }
        form {
          display: grid;
          gap: 1.5rem;
        }
        input, textarea {
          width: 100%;
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }
        button {
          justify-self: start;
          padding: 1rem 2rem;
          border-radius: 8px;
          border: none;
          background-color: #4A90E2;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #357ABD;
        }
      </style>
      <form>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    `;
  }
}

customElements.define('contact-form', ContactForm);
