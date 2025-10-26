import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import AccountPage from './pages/AccountPage';
import type { Product } from './types';

type Page = 'home' | 'shop' | 'about' | 'cart' | 'account' | 'product';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo(0, 0);
  };

  const handleBackFromProduct = () => {
    setCurrentPage('shop');
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        onPageChange={handlePageChange}
        currentPage={currentPage}
        cartCount={2}
        onSearchOpen={() => setSearchOpen(true)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onProductClick={handleProductClick}
      />

      {currentPage === 'home' && (
        <HomePage
          onProductClick={handleProductClick}
          onPageChange={handlePageChange}
        />
      )}

      {currentPage === 'shop' && <ShopPage onProductClick={handleProductClick} />}

      {currentPage === 'product' && selectedProduct && (
        <ProductDetailPage
          product={selectedProduct}
          onBack={handleBackFromProduct}
        />
      )}

      {currentPage === 'about' && <AboutPage />}

      {currentPage === 'cart' && <CartPage />}

      {currentPage === 'account' && <AccountPage />}

      <Footer />
    </div>
  );
}

export default App;
