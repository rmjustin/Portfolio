class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
            .navbar {
                overflow: hidden;
              }
              
              a#home {
                text-decoration:none;
                font-size: 1.17em;
                font-weight:bold;
              }

              a#home:hover {
                filter: invert(1);
                background-color:white;
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
                padding: 20px;
                margin: 0px;
                color: black;
                text-align:center;
                background-color: white;
                border: 3px solid rgba(0, 0, 0, 1);
                border-radius: 1px;
              }
              
              .navbar a:hover {
                background-color: black;
                color: white;
              }
              
              
              .dropdown-container {
                display: none;
                /* z-index: 1; */
              }
              
              .dropdown-container a {
                color: black;
                padding: 10px;
                font-weight: bold;
                text-decoration: none;
                display: block;
                width: auto;
                overflow-y: hidden;
                margin: 5px;
                height: 100%;
                box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.507);
              }
              
              .dropdown-container:hover {
                display: block;
                overflow-y: hidden;
              }
              
              .dropdown-container a:hover {
                background-color: black;
                overflow-y: hidden;
              }
              
              .dropbtn:hover+.dropdown-container {
                visibility: visible;
                display: block;
                overflow-y: hidden;
              }
              
              .dropbtn:hover {
                background-color: black;
                color: white;
                cursor: default;
              }
              
              .dropbtn {
                cursor: pointer;
                border: none;
                text-decoration: none;
                font-size: 15px;
                font-weight: bold;
                width: 100%;
                display: block;
                padding: 20px;
                margin: 0px;
                color: black;
                background-color: white;
                border: 3px solid rgba(0, 0, 0, 1);
                border-radius: 1px;
              }
              
              @media screen and (min-width:401px) {
                .navbar a.icon {
                  display: none;
                }
                .navbar #hamburger {
                  display: block;
                }
              }
              
              @media screen and (max-width:400px) {
                .navbar {
                  overflow: hidden;
                }
              
                .navbar #hamburger {
                  display: none;
                  color:white;
                }
              
                .dropbtn {
                  color: black;
                  padding: 14px 16px;
                  text-decoration: none;
                  font-size: 17px;
                  display: block;
                }
              
                .navbar a {
                  color: black;
                  padding: 14px 16px;
                  text-decoration: none;
                  font-size: 17px;
                  display: block;
                }
              
                .navbar a.icon {
                  background: black;
                  color:white;
                  display: block;
                  text-align: center;
                  right: 0;
                  top: 0;
                }
                .navbar a:hover {
                  background-color: #ddd;
                  color: black;
                }
              }
            </style>
            <header id="header" class="header">
              <a href="./index.html" id="home" style="display: flex;align-items: center;justify-content: center;min-width: 180px;">
                  <img src="./img/Screenshot (67).png" alt="site logo - MyMemory"
                    style="width:80%;position: relative; z-index:0;height:50px;min-width: 180px;max-width: 250px;" id="logo" />
              </a>
                <nav class="navbar" aria-label="SiteNav">
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                    <div id="hamburger">
                        <a class="link" href="./everyday.html">Everyday&nbsp;Living</a>
                        <a class="link" href="./scheduling.html">Scheduling</a>
                        <a class="link" href="./finances.html">Finances</a>
                        <a class="link" href="./groceries.html">Groceries</a>
                        <button class="dropbtn" id="dropbtn">Misc.
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-container">
                            <a id="link" href="./renameDropdown.html">Hobbies</a>
                            <a id="link" href="./renameDropdown.html">Interests</a>
                            <a id="link" href="./renameDropdown.html">Dogs</a>
                        </div>
                    </div>
                </nav>
            </header>
        `
  }
}



customElements.define('header-component', Header);