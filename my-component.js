class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                p {
                    color: red;
                }
            </style>
            <p>First Web Component.</p>
        `;
    }
}

window.customElements.define('my-component', MyComponent);

