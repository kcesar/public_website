class cQuizItem extends HTMLElement {

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

                #wrapper {
                    box-shadow: 2px 2px 5px darkgray;
                    padding: 16px;
                    min-height: 120px;
                    margin-bottom: 16px;
                    display: grid;
                    grid-template-columns: 1fr auto;
                    grid-gap: 16px;
                }

                button {
                    float: right;
                    border: 0;
                    text-align: center;
                    border-radius: 20px;
                    padding: 10px 20px;
                    cursor: pointer;
                    background-color: #559955;
                    color: white;
                    margin-bottom: auto;
                }

                button:hover {
                    background-color: #417541;
                }

                .hidden {
                    display: none;
                }

                p {
                    padding-bottom: 16px;
                }
            </style>
            <div id="wrapper">
                <div id="prompt"></div>
                <button>Show/Hide Answer</button>
                <div id="solution" class="hidden">
                    <b>Answer:</b>
                    <p id="answer"></p>
                    <b>Explanation:</b>
                    <p id="explain"></p>
                </div>
            </div>
        `;

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector('button').addEventListener('click', (e) => {
            this._toggleSolution();
        });
    }

    static get observedAttributes() { return ['style','prompt','answer','explain']; }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'style':
                this.shadowRoot.querySelector('#wrapper').style = newValue;
                break;
            case 'prompt':
                this.shadowRoot.querySelector('#prompt').innerHTML = newValue;
                break;
            case 'answer':
                this.shadowRoot.querySelector('#answer').innerHTML = newValue;
                break;
            case 'explain':
                this.shadowRoot.querySelector('#explain').innerHTML = newValue;
                break;
        }
    }

    _toggleSolution() {
        this.shadowRoot.querySelector('#solution').classList.toggle('hidden');
    }

    get style() {
        return this.getAttribute('style');
    }

    set style(newValue) {
        this.setAttribute('style', newValue);
    }

    get prompt() {
        return this.getAttribute('prompt');
    }

    set prompt(newValue) {
        this.setAttribute('prompt', newValue);
    }

    get answer() {
        return this.getAttribute('answer');
    }

    set answer(newValue) {
        this.setAttribute('answer', newValue);
    }

    get explain() {
        return this.getAttribute('explain');
    }

    set explain(newValue) {
        this.setAttribute('explain', newValue);
    }

}

customElements.define('c-quiz-item', cQuizItem);