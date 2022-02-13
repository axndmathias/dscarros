import './styles.css';

const SearchCar = () => {
  return (
    <div className="search-card">
      <div className="search-card-input">
        <input type="text" placeholder="Digite sua busca" />
      </div>
      <div className="search-card-button">
        <button className="btn btn-secondary">
          <h6>Buscar</h6>
        </button>
      </div>
    </div>
  );
};

export default SearchCar;
