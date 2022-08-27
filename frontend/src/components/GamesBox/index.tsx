import "./style.scss";

interface IGamesBoxProps {
  titleBox: string;
  games: {
    name: string;
    urlImage: string;
    price: number;
    description: string;
    genrer: string[];
    caracters: string[];
  }[];
}

export default function GamesBox({ titleBox, games }: IGamesBoxProps) {
  return (
    <div className="MainGamesbox">
      <section className="MainGamesBoxHeader">
        <p>{ titleBox }</p>
        <span>
          <a href="#">{"<"}</a>
          <a href="#">{">"}</a>
        </span>
      </section>
      <section className="GamesCarousel">
        {games.map((game) => (
          <div className="GameCard">
            <img src={game.urlImage} alt={game.name} />
            <p>{game.name}</p>
            <p>R$ {game.price}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
