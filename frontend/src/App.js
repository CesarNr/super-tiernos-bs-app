import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href="/">Super Tiernos</a>
      </header>
      <main>
        <h1> Lista de productos </h1>
        <div className="products">
            {
              data.products.map( (product) => (
                <div className="product" key={product._id}>
                  <a href={`/product/${product._id}`}>
                    <img src={product.image} alt={product.name}/>
                  </a>
                  <div className="product-info">
                  <a href={`/product/${product._id}`}>
                      <p>{product.name}</p>
                    </a>
                    <p><strong>${product.price}</strong></p>
                    <button>Agregar al carrito</button>
                  </div>
                </div>
              ))
            }
        </div>
      </main>
    </div>
  );
}

export default App;
