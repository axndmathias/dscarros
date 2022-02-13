import Navbar from 'components/Navbar';
import SearchCar from 'components/SearchCar';

import './styles.css';

const Catalog = () => {
  return (
    <>
      <Navbar />
      <div className="catalog-container">
        <SearchCar />
      </div>
    </>
  );
};

export default Catalog;
