class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
                a.link {
                text-decoration: none;
                display: block;
                text-align: center;
                font-size: 24px;
                margin: 5px;
                padding: 5px;
                cursor: pointer;
              }
            
            
              .navbar {
            }
            
              .title {
                display: block;
                text-align: center;
                border: 5px solid;
                margin: 0 0 10px 0;
              }
            
              .menu {
                grid-area: menu;
                border-right: 5px solid;
                height: 100%;
                background-color: #1c1d1f;
              }

              .home-link {
                text-decoration: none;
              }
            
            </style>
            <header id="header" class="header">
              <h1 class="title"><a href='./home.html' class='home-link'>Gaming Collections</a></h1>
              <nav class="navbar">
                  <a href="./collections.html" class='link'>Collections</a>
                  <a href="./fnv.html" class='link'>Fallout: New Vegas</a>
                  <a href="./masseffect.html" class='link'>Mass Effect: Legendary Edition</a>
              </nav>
            </header>
        `
  }
}



customElements.define('header-component', Header);