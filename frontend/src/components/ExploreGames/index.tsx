import "./style.scss";
import image from '../../img/exploreGames.jpg';

export default function ExploreGames() {
  return (
    <div className="exploreGamesContainer">
      <img src={image} alt="Explore Games" />
      <section>
        <p>Explore nosso catálogo</p>
        <p>Pesquise por gênero, características, preço e muito mais para encontrar seu próximo jogo favorito.</p>
        <button type="button">SAIBA MAIS</button>
      </section>
    </div>
  )
}
