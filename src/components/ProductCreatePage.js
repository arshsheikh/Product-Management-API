import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';

const ProductCreatePage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    productName: '',
    productImage: '',
    description: '',
    quantity: 0,
    unitPrice: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for productName, productImage, description, quantity, and unitPrice */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductCreatePage;
