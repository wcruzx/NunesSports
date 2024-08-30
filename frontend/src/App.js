import './styles/style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/api/products');
    setProducts(response.data);
  };

  const addProduct = async (product) => {
    const response = await axios.post('http://localhost:8080/api/products', product);
    setProducts([...products, response.data]);
  };

  const updateProduct = async (product) => {
    const response = await axios.put(`http://localhost:8080/api/products/${product.id}`, product);
    setProducts(products.map(p => (p.id === product.id ? response.data : p)));
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8080/api/products/${id}`);
    setProducts(products.filter(p => p.id !== id));
  };

  const editProduct = (product) => {
    setCurrentProduct(product);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center">Gerenciar Produtos</h2>
              <ProductForm
                addProduct={addProduct}
                updateProduct={updateProduct}
                currentProduct={currentProduct}
                setCurrentProduct={setCurrentProduct}
              />
            </div>
          </div>
          <ProductList
            products={products}
            deleteProduct={deleteProduct}
            editProduct={editProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
