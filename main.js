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
                    
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <iconify-icon 
                            icon="lucide:star" 
                            class="fs-3 star-fav {{#if isFavorited}}favorited{{/if}}" 
                            onclick="toggleFavorite({{id}}, this)"
                            title="Favoritar">
                        </iconify-icon>
                    </div>

                </div>
            </div>
        </div>
`;

let template = Handlebars.compile(templateCard);

async function lerProdutos() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();

    let contentHtml = "";
    
    let favs = getFavoritos();

    for (let idx in data.products) {
        let product = data.products[idx];
        
        product.isFavorited = favs.includes(product.id);
        
        contentHtml = contentHtml + template(product);
    }

    let elem = document.getElementById("ProductsList");
    elem.innerHTML = contentHtml;
}

lerProdutos();

function getFavoritos() {
    let favs = localStorage.getItem('favoritos');
    return favs ? JSON.parse(favs) : [];
}

function salvarFavoritos(favs) {
    localStorage.setItem('favoritos', JSON.stringify(favs));
}

function toggleFavorite(produtoId, iconeHTML) {
    let favs = getFavoritos();
    let index = favs.indexOf(produtoId);

    if (index === -1) {
        favs.push(produtoId);
        iconeHTML.classList.add('favorited'); 
    } else {
        favs.splice(index, 1);
        iconeHTML.classList.remove('favorited'); 
    }

    salvarFavoritos(favs);
}

