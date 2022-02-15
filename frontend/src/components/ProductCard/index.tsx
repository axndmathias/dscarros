import './styles.css';
import ProductImg from 'assets/images/car-card-1.png';
import ButtonCatalog from 'components/ButtonCatalog';
import ButtonBuy from 'components/ButtonBuy';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-image">
        <img src={ProductImg} alt="Nome do Veiculo" />
      </div>
      <div className="card-text">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          assumenda, possimus deserunt commodi dolores eos
        </p>
      </div>
      <ButtonBuy />
    </div>
  );
};

export default ProductCard;
