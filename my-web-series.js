class MyWebSeries extends HTMLElement {
    connectedCallback() {
        console.log(this.getAttribute("counter"));
        this.innerHTML = `
            <h2>Second header</h2>
        `;
    }
}

window.customElements.define('my-web-series', MyWebSeries);