class MyCard extends HTMLElement {
    connectedCallback() {
        console.log(this.getAttribute("header"));
        console.log(this.getAttribute("src"));
        this.innerHTML = `
            <div class="card-main">
                <header class="card-header">${this.getAttribute("header")}</header>
                <div class="card-body">
                    <img src="${this.getAttribute("src")}" alt="">
                </div>
            </div>
        `;
    }
}

window.customElements.define("my-card", MyCard);