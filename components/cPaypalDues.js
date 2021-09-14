class cPaypalDues extends HTMLElement {

    constructor() {
        super();

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }
            </style>
            <div id="wrapper">
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="2R33ZF2AQN4Q8" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        `;

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {}

    static get observedAttributes() { return ['style']; }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'style':
                this.shadowRoot.querySelector('#wrapper').style = newValue;
                break;
        }
    }

    get style() {
        return this.getAttribute('style');
    }

    set style(newValue) {
        this.setAttribute('style', newValue);
    }

}

customElements.define('c-paypal-dues', cPaypalDues);