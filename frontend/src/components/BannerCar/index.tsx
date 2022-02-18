import CarBanner from 'assets/images/car-banner.svg';

import './styles.css';

const BannerCar = () => {
  return (
    <div className="base-card banner-card">
      <div className="banner-image">
        <img src={CarBanner} alt="Carro marca Audi amarelo" />
      </div>
      <div className="banner-text">
        <h1>O carro perfeito para você</h1>
        <p>
          Conheça nossos carros e dê mais um passo na realização do seu sonho
        </p>
      </div>
    </div>
  );
};

export default BannerCar;
