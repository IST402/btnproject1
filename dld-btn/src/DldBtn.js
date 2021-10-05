import { html, css, LitElement } from 'lit';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";


export class DldBtn extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--dld-btn-text-color, #041df7);
      }

      :host([dark]) button {
        background-color: black;
      }

.dropdown {
  position: relative;
  display: flex;
}

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    color: white;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  div ::slotted(a){
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

  .dropbtn {
    all: unset;
    border-radius: 4px;
    background-color: #2D74D7;
    height: 40px;
    width: 200px;
    margin: 0 8px 16px;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    line-height: 24px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    }

  .dropbtn:hover{
    transform: translateY(-3px);
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
    background-color: green;
  }

  .dropbtn:focus{
    transform: translateY(-3px);
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
    background-color: red;
  }

    `;
  }

  static get properties() {
    return {
      title: { type: String },
      open: {type: Boolean, reflect: true},
      icon: { type: String },
      disabled: { type: Boolean, reflect: true },
      dark: { type: Boolean, reflect: true },
      audio: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    //this.open = true;
    this.title = 'Download VSCode';
    this.img1 = '../image/download.png';
    this.img11 = '../image/download1.png';
    this.img2 = '../image/apple.png';
    this.img3 = '../image/windows.png';
    this.img4 = '../image/linux.png';
    this.icon = 'file-download';
    window.addEventListener('keydown', this.keyPress.bind(this));
    this.disabled = false;
    this.dark = false;
    this.audio = new Audio(new URL(`meow.mp3`, import.meta.url).href);
  }

  _toggleDropdown(e){
    this.open = !this.open;
    this.dark = !this.dark;
    this.audio.play();
  }


  _disable(e){
    this.disabled = !this.disabled;
  }

  keyPress (e) { console.log(e)
    if(e.key === "Escape") {
      this._toggleDropdown(e)
    }
    else if(e.key === "Control" ) {
      this._disable(e)
    }
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

 // <img src="${this.img1}"/> 
  render() {
    return html`
  <div class="dropdown" >
      <button ?disabled=${this.disabled} @click=${this._toggleDropdown} class="dropbtn">
      
      <simple-icon-lite icon="${this.icon}"></simple-icon-lite>
      
      ${this.title}
       </button>
       
       </div>
  <style>
    img:hover {
      content: url(${this.img11});
    }
  </style>

          <div id="myDropdown" class="dropdown-content">
            <slot></slot>
          </div>
 </div>

    `;
  }


}