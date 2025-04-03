import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SubCategory from './components/SubCategory/SubCategory';
import Products from './components/Products/Products';
import React from 'react';
import Category from './components/Category/Category';
import HomePage from './components/HomePage/HomePage';


function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/subcategory/:categoryId" element={<SubCategory />} />
            <Route path="/products/:subCategoryId" element={<Products />} />
          {/* <Route path="/category" element={<category />} /> // אסור להשתמש באות קטנה!
          <Route path="/subcategory/:categoryId" element={<subCategory />} />
            <Route path="/products/:subCategoryId" element={<products />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
