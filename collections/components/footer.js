const footerTemplate = document.createElement('template');

footerTemplate.innerHTML =  `
            <style>
              a {
                text-decoration: none;
                color: #58B296;
                display: block;
                float: right;
                font-size: 24px;
                width: fit-content;
                margin: 5px;
                padding: 5px;
                border: 5px solid #58B296;
                cursor: pointer;
              }
              .foot {
                grid-area: foot;
                background-color: rgb(32, 29, 29);
                width: 100%;
                height: 100%;
              }
              
            </style>
            <div class='foot'>
                <nav class="navbar" aria-label="SiteNav">
                    <a href="./about.html">About</a>
                </nav>
            </div>
            
        `;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);