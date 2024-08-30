import React, { useState, useEffect } from 'react';

function ProductForm({ addProduct, updateProduct, currentProduct, setCurrentProduct }) {
  const [product, setProduct] = useState(currentProduct);

  useEffect(() => {
    setProduct(currentProduct);
  }, [currentProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.id) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
    setProduct({ id: null, name: '', description: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label className="form-label">Nome do Produto</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descrição</label>
        <textarea
          className="form-control"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Preço</label>
        <input
          type="number"
          className="form-control"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {product.id ? 'Atualizar Produto' : 'Adicionar Produto'}
      </button>
    </form>
  );
}

export default ProductForm;
