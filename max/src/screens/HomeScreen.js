import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
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
            </Link>
            <Link to={`/product/${product.slug}`}>
              <p style={{ fontSize: '15px', paddingLeft: '10px' }}>
                {product.name}
              </p>
            </Link>
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
    </div>
  );
}

export default HomeScreen;
