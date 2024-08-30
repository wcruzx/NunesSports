import React from 'react';

function ProductList({ products, deleteProduct, editProduct }) {
  return (
    <div className="card mt-4 shadow-sm">
      <div className="card-body">
        <h4 className="card-title text-center">Lista de Produtos</h4>
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>R${product.price.toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => editProduct(product)}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">Nenhum produto encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
