class BubsNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.initShadowDom();
  }

  initShadowDom() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = this.template;
  }

  get template() {
    return `
      <style>

       @include '../dist/styles/reset.css';

       @keyframes change-color {
         0% {
           background: #006253;
         }
         30% {
          background: #ffde59;
         }
         60% {
          background: #5271ff;
         }
         100% {
          background: #006253;
         }
       }

       :host {
          display: block;
          margin: 50px 100px;
          font-family: 'Open Sans', sans-serif;
        }

        ul {
          display: flex;
          list-style-type: none;
          justify-content: flex-end;
        }

        ul li {
          margin-left: 50px;
          font-weight: bold;
          background: white;
        }

        ul li:hover {
          animation: change-color 1.6s infinite;
        }
      </style>
      <nav>
        <ul>
          <li> <a href="/"> Homepage  </li>
          <li> <a href="/"> Activities</a> </li>
          <li> <a href="/"> About me </a></li>
          <li> <a href="/"> Contact</a> </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('bubs-navbar', BubsNavbar);
