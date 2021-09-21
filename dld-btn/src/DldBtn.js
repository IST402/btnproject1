import { html, css, LitElement } from 'lit';

export class DldBtn extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--dld-btn-text-color, #041df7);
      }
      .button:hover{
        background-color: rgba(239,239,0,0.5);
      }

  .dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #60eef8;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.show {display: block;}

.dropbtn {
        border-radius: 48px;
        padding: 12px 50px;
        transition-duration: 0.5s;
        font-size: large;
  }

  .links{
    font-size: large;
  }

    `;
  }

  static get properties() {
    return {
      title: { type: String },
      open: {type: Boolean, reflect: true}
    };
  }

  constructor() {
    super();
    this.open = false;
    this.title = 'Download VSCode';
    this.img1 = '../image/download.png';
    this.img11 = '../image/download1.png';
    this.img2 = '../image/apple.png';
    this.img3 = '../image/windows.png';
    this.img4 = '../image/linux.png';
  }

  _toggleDropdown(e){
    this.open = !this.open;
  }

  updated(changedProperties){
    changedProperties.forEach((oldValue, propName) => {
      if(propName === "open"){
        this.shadowRoot.querySelector('#myDropdown').classList.toggle("show");
      }
    });
  }

  _dropdown() {
    this.shadowRoot.querySelector('#myDropdown').classList.toggle("show");
  }


  render() {
    return html`
  <div class="dropdown">
      <button @click=${this._toggleDropdown} class="dropbtn">
      <img src="${this.img1}"/>
      ${this.title}
       </button>
       </div>
  <style>
    img:hover {
      content: url(${this.img11});
    }
  </style>

          <div id="myDropdown" class="dropdown-content">
            <a href="https://code.visualstudio.com/sha/download?build=stable&os=darwin-universal" class="links"> <img src="${this.img2}"/> macOS</a>
            <a href="https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user" class="links"> <img src="${this.img3}"/> Windows</a>
            <a href="https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64" class="links"> <img src="${this.img4}"/> Linux</a>
          </div>
 </div>
    `;
  }


}