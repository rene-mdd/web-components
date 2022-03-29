
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { dropdown } from './styles/dropdown';

@customElement('my-element')
export class MyElement extends LitElement {
  constructor() {
    super();
    // for encapsulated styles we would need to declare them here and use this attachShadow property.
    // const shadow = this.attachShadow({ mode: 'open' });
  }
    // external styles
  static override styles = [dropdown];

  @property()
  first = 'I am here!';
  second = 'I am also here!';
  third = 'Mee toooo!!';

  override render() {
    return html`
    <button class="accordion" @click="${this._openAcc}">Section 1</button>
    <div class="panel">
      <p>${this.first}</p>
    </div>
    
    <button class="accordion" @click="${this._openAcc}">Section 2</button>
    <div class="panel">
      <p>${this.second}</p>
    </div>
    
    <button class="accordion" @click="${this._openAcc}">Section 3</button>
    <div class="panel">
      <p>${this.third}</p>
    </div>
    `;
  }

  private _openAcc(e: Event) {

    let myEvent = new CustomEvent('my-event', {
      detail: { message: 'my-event happened.' },
      bubbles: true,
      composed: true,
    });
    let element = (e.target as HTMLElement);
    let elementSibling = (element.nextElementSibling as HTMLElement);
    element.classList.toggle("active");
    if (elementSibling.style.maxHeight) {
      elementSibling.style.maxHeight = "";
    } else {
      elementSibling.style.maxHeight = elementSibling.scrollHeight + "px";
    }
    this.dispatchEvent(myEvent);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
