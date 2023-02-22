class RandomQuote extends HTMLElement {
    constructor() {
        super();
        this._quotes = [
          "Money can't buy friends, but it can get you a better class of enemy.",
            "You can't turn back the clock. But you can wind it up again.",
            "In matters of style, swim with the current; in matters of principle, stand like a rock."
        ];
        this._quote = null;
        this._interval = null;
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                .container {
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    max-width: 700px;
                    border: 2px solid aqua;
                    border-radius: 14px;
                }
                
                .container h1 {
                    font-weight: bold;
                    font-size: 25px;
                    
                }
            </style>
            <div class="container"> 
                <h1>Random Quotes</h1>
                <p><span id="quote"></span></p>
            </div>
        `;

        this._quote = this.querySelector("#quote");
        // this._interval = setInterval(() => this._render(), 3000);
        this._setInterval(this.getAttribute('interval'));
        this._render();
    }

    _render() {
        if (this._quote !== null) {
            this._quote.innerHTML = this._quotes[Math.floor(Math.random() * this._quotes.length)];
        }
    }

    _setInterval(value) {
        if (this._interval !== null) {
            clearInterval(this._interval);
        }

        if (value > 0) {
            this._interval = setInterval(() => this._render(), value);
        }
    }
}

window.customElements.define('random-quote', RandomQuote);