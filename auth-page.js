class AuthPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isLoginView = true; // Default to login view
  }

  connectedCallback() {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    if (mode === 'signup') {
      this.isLoginView = false;
    }
    this.render();
  }

  toggleView() {
    this.isLoginView = !this.isLoginView;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .auth-container {
            max-width: 400px;
            margin: 5rem auto;
            padding: 2rem;
            background-color: var(--surface-color);
            border-radius: var(--border-radius-lg);
            box-shadow: var(--shadow-lg);
            text-align: center;
        }

        .auth-container h1 {
            color: var(--primary-color);
            margin-bottom: 1.5rem;
        }

        .auth-form input {
            width: 100%;
            padding: 0.75rem;
            margin-bottom: 1rem;
            border-radius: var(--border-radius-md);
            border: 1px solid var(--border-color);
            background-color: var(--background-color);
            color: var(--text-color);
        }

        .auth-form button {
            width: 100%;
            padding: 0.75rem;
            border: none;
            border-radius: var(--border-radius-md);
            background-color: var(--primary-color);
            color: white;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .auth-form button:hover {
            background-color: var(--secondary-color);
        }

        .auth-link {
            margin-top: 1rem;
            display: block;
            color: var(--text-muted-color);
        }

        .auth-link a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
            cursor: pointer;
        }
      </style>
      <div class="auth-container">
        <h1>${this.isLoginView ? 'Login' : 'Sign Up'}</h1>
        <form class="auth-form" onsubmit="event.preventDefault();">
          ${!this.isLoginView ? '<input type="text" placeholder="Full Name" required>' : ''}
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Password" required>
          ${!this.isLoginView ? '<input type="password" placeholder="Confirm Password" required>' : ''}
          <button type="submit">${this.isLoginView ? 'Login' : 'Sign Up'}</button>
        </form>
        <span class="auth-link">
          ${this.isLoginView
            ? "Don\'t have an account? <a id='toggle-link'>Sign Up</a>"
            : "Already have an account? <a id='toggle-link'>Log In</a>"
          }
        </span>
      </div>
    `;

    this.shadowRoot.getElementById('toggle-link').addEventListener('click', () => this.toggleView());
  }
}

customElements.define('auth-page', AuthPage);
