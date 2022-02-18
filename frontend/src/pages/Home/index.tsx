import Navbar from 'components/Navbar';
import { ReactComponent as CarBanner } from 'assets/images/car-banner.svg';
import './styles.css';
import ButtonCatalog from 'components/ButtonCatalog';
import BannerCar from 'components/BannerCar';

const Home = () => {
  return (
    <div className="base-container home-container">
      <BannerCar />
      <ButtonCatalog />
    </div>
  );
};

export default Home;
