import Navbar from 'components/Navbar';
import { ReactComponent as CarBanner } from 'assets/images/car-banner.svg';
import './styles.css';
import ButtonCatalog from 'components/ButtonCatalog';
import BannerCar from 'components/BannerCar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="base-container home-container">
        <BannerCar />
        <ButtonCatalog />
        {/* <div className="home-banner">
          <div className="home-banner-text">
            <h1></h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-banner-image">
            <CarBanner />
          </div>
        </div>
        <div className="home-button-container">
          <ButtonCatalog />
        </div> */}
      </div>
    </>
  );
};

export default Home;
