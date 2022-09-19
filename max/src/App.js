import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">MAX</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    height: '200px',
                    width: '300px',
                    justifyContent: 'center',
                    borderRadius: '14px 14px 0 0',
                  }}
                />
              </a>
              <a href={`/product/${product.slug}`}>
                <p style={{ fontSize: '15px', paddingLeft: '10px' }}>
                  {product.name}
                </p>
              </a>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  paddingLeft: '10px',
                }}
              >
                ${product.price}
              </p>
              <button
                style={{
                  padding: '5px',
                  margin: '1rem',
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
