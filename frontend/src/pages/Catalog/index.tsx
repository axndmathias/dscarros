import ProductCard from 'components/ProductCard';
import SearchCar from 'components/SearchCar';

import './styles.css';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <SearchCar />
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
