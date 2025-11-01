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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
      <style>
        /* Main container for the auth form */
        .auth-container {
            width: 100%;
            max-width: 420px;
            padding: 2.5rem;
            text-align: center;
        }

        .auth-logo {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 2rem;
        }

        .auth-container h1 {
            font-size: 2.2rem;
            margin-bottom: 0.5rem;
            color: var(--text-color);
        }

        .auth-container p {
            color: var(--text-muted-color);
            margin-bottom: 2rem;
        }

        /* Form input styling */
        .input-group {
            position: relative;
            margin-bottom: 1.5rem;
        }

        .input-group i {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted-color);
        }

        .auth-form input {
            width: 100%;
            padding: 1rem 1rem 1rem 40px; /* Left padding for icon */
            border-radius: var(--border-radius-md);
            border: 1px solid var(--border-color);
            background-color: var(--background-color, #f3f4f6);
            color: var(--text-color);
            font-size: 1rem;
            transition: border-color 0.3s, box-shadow 0.3s;
        }

        .auth-form input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
        }

        /* Primary action button */
        .auth-form button.primary-btn {
            width: 100%;
            padding: 1rem;
            border: none;
            border-radius: var(--border-radius-md);
            background-color: var(--primary-color);
            color: white;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .auth-form button.primary-btn:hover {
            background-color: #0056b3; /* Darker shade */
        }

        /* Social login section */
        .divider {
            display: flex;
            align-items: center;
            text-align: center;
            margin: 2rem 0;
            color: var(--text-muted-color);
        }

        .divider::before, .divider::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid var(--border-color);
        }

        .divider:not(:empty)::before {
            margin-right: .5em;
        }

        .divider:not(:empty)::after {
            margin-left: .5em;
        }

        .social-logins button {
            width: 100%;
            padding: 0.8rem;
            margin-bottom: 1rem;
            border-radius: var(--border-radius-md);
            border: 1px solid var(--border-color);
            background-color: var(--surface-color);
            color: var(--text-color);
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition: background-color 0.3s, border-color 0.3s;
        }

        .social-logins button:hover {
            background-color: var(--background-color, #f3f4f6);
            border-color: #ccc;
        }

        .social-logins i {
            font-size: 1.2rem;
        }
        
        .fa-google { color: #DB4437; }
        .fa-github { color: #333; }

        /* Toggle link at the bottom */
        .auth-link {
            margin-top: 2rem;
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
        <div class="auth-logo">Placement Prep</div>
        <h1>${this.isLoginView ? 'Welcome Back' : 'Create an Account'}</h1>
        <p>${this.isLoginView ? 'Log in to continue your journey.' : 'Sign up to get started.'}</p>
        
        <form class="auth-form" onsubmit="event.preventDefault();">
          ${!this.isLoginView ? `
          <div class="input-group">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Full Name" required>
          </div>
          ` : ''}

          <div class="input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Email" required>
          </div>

          <div class="input-group">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required>
          </div>
          
          <button type="submit" class="primary-btn">${this.isLoginView ? 'Login' : 'Sign Up'}</button>
        </form>

        <div class="divider">OR</div>

        <div class="social-logins">
            <button><i class="fab fa-google"></i> Continue with Google</button>
            <button><i class="fab fa-github"></i> Continue with GitHub</button>
        </div>

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
