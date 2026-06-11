let templateCard = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2" id="card-{{id}}">
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
                            class="fs-3 star-fav" 
                            onclick="removerFavorito({{id}})"
                            title="Remover dos Favoritos">
                        </iconify-icon>
                    </div>

                </div>
            </div>
        </div>
`;

let template = Handlebars.compile(templateCard);

function getFavoritos() {
    let favs = localStorage.getItem('favoritos');
    return favs ? JSON.parse(favs) : [];
}

function salvarFavoritos(favs) {
    localStorage.setItem('favoritos', JSON.stringify(favs));
}

function removerFavorito(produtoId) {
    let favs = getFavoritos();
    let index = favs.indexOf(produtoId);
    
    if (index !== -1) {
        favs.splice(index, 1);
        salvarFavoritos(favs);
        
        let cardElement = document.getElementById('card-' + produtoId);
        if(cardElement) {
            cardElement.remove();
        }
        
        if (favs.length === 0) {
            document.getElementById("FavoritesList").innerHTML = "<p class='text-center mt-5 text-secondary'>Você ainda não tem nenhum produto favoritado.</p>";
        }
    }
}

async function lerProdutosFavoritos() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();

    let favs = getFavoritos();
    let contentHtml = "";

    let produtosFavoritos = data.products.filter(product => favs.includes(product.id));

    if (produtosFavoritos.length === 0) {
        contentHtml = "<h5 class='text-center mt-5 text-secondary'>Você ainda não tem nenhum produto favoritado.</h5>";
    } else {
        for (let idx in produtosFavoritos) {
            let product = produtosFavoritos[idx];
            contentHtml = contentHtml + template(product);
        }
    }

    let elem = document.getElementById("FavoritesList");
    elem.innerHTML = contentHtml;
}

lerProdutosFavoritos();