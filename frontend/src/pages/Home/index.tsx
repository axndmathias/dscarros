import Navbar from 'components/Navbar';
import { ReactComponent as CarBanner } from 'assets/images/car-banner.svg';
import './styles.css';
import ButtonCatalog from 'components/ButtonCatalog';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-banner">
          <div className="home-banner-text">
            <h1>O carro perfeito para você</h1>
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
        </div>
      </div>
    </>
  );
};

export default Home;
