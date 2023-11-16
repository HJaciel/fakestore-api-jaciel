let images = []

const getProductos = async () => {
    try {

        //fetch to fakestoreapi.com
        const res = await fetch('https://fakestoreapi.com/products') // Response

        const info = await res.json() // json

       

        const productCards = document.getElementById('productCards');


        info.forEach(image => {
            productCards.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${image.image}" class="card-img-top custom-img" alt="Producto">
                    <div class="card-body">
                        <h5 class="card-title">${image.title}</h5>
                        <p class="card-text">${image.description}</p>
                        <p class="card-text">Precio: $${image.price}</p>
                        <p class="card-text">Categoría: ${image.category}</p>
                        <p class="card-text">Rating: ${image.rating.rate} (${image.rating.count} votos)</p>
                    </div>
                </div>
            </div>`;
        });
    } catch (err) {
        console.log(err)
    }
}

(() => {
    getProductos()
})()