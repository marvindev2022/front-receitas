import Header from "../../components/header";
import "./styles.css";

function RenderHome(): JSX.Element {
  return (
    <section className="container-main">
      <Header />
      <div className="container-main-home">
        <div className="search">
          <input type="text" placeholder="Buscar receitas" />
          <button>Buscar</button>
        </div>
        <div className="categories">
          <div className="card">
            <img src="category1.jpg" alt="Categoria 1" />
            <h3>Nome da Categoria 1</h3>
          </div>
          <div className="card">
            <img src="category2.jpg" alt="Categoria 2" />
            <h3>Nome da Categoria 2</h3>
          </div>
        </div>
        <section className="favorites">
          <h2>Receitas Favoritas</h2>
        </section>
        <section className="popular">
          <h2>Receitas Populares</h2>
        </section>
      </div>
    </section>
  );
}

export default RenderHome;
