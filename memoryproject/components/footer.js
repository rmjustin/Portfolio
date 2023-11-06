const footerTemplate = document.createElement('template');

footerTemplate.innerHTML =  `
            <style>
            .navbar {
                overflow: hidden;
              }
              
              a#home {
                color:white;
                text-decoration:none;
                font-size: 1.17em;
                font-weight:bold;
              }
              .box a#home:hover {
                color:#757575;
              }
              
              .navbar a {
                text-decoration: none;
                font-size: 15px;
                font-weight: bold;
                width: 100%;
                display: block;
                padding: 10px;
                margin: 0px;
                color: black;
                text-align:center;
                background-color: white;
                border-top: 1px solid rgb(0, 0, 0);
                border-left: 1px solid rgba(0, 0, 0, 0.5);
                border-radius: 1px;;
              }
              
              .footer a {
                width: fit-content;
                float: right;
              }
              
              .navbar a:hover {
                background-color: black;
                color: white;
              }
              
              @media screen and (min-width:401px) {
                .navbar a.icon {
                  display: none;
                }
              }
              
              @media screen and (max-width:400px) {
                .navbar {
                  overflow: hidden;
                }
                .footer {
                  background-color: black;
                  width: 100%;
                  text-align: center;
                  text-decoration: none;
                  font-size: 17px;
                  height: 100%;
                }
                .navbar a {
                  padding: 14px 0px;
                  width: 100%;
                  color: white;
                  background-color: black;
                  border: none;
                  display: block;
                  font-size: 17px;
                }
                .navbar a:hover {
                  background-color: #757575;
                  color: black;
                }
              }
            </style>
            <div id="footer" class="footer">
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