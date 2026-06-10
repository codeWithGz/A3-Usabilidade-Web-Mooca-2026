
let templateCard = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <div class="card h-100">
                <img src="{{thumbnail}}" class="card-img-top" alt="{{title}}" style="height: 180px; object-fit: contain; padding: 10px; background-color: #f8f9fa;">
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title fw-bold mb-1">{{title}}</h6>
                    <p class="text-success fw-bold mb-2">$ {{price}}</p>
                    <p class="card-text text-secondary flex-grow-1" style="font-size: 0.85rem;">
                        {{description}}
                    </p>
                    
                </div>
            </div>
        </div>
`;

let template = Handlebars.compile(templateCard);

async function lerProdutos() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();

    let contentHtml = "";

    for (let idx in data.products) {
        let product = data.products[idx];
        contentHtml = contentHtml + template(product);
    }

    let elem = document.getElementById("ProductsList");
    elem.innerHTML = contentHtml;

}
lerProdutos();

