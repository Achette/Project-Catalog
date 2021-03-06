import Navbar from 'components/Navbar';
import { ReactComponent as MainImage } from 'assets/images/Desenho.svg';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>Conheça o melhor catálogo de produtos</h1>
          </div>

          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
