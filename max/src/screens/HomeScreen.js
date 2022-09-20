import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';
//import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      //setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
