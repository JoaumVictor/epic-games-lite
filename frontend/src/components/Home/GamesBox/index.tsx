import './style.scss';
import { GameObjType } from '../../../@types';

type GamesBoxProps = {
  titleBox: string;
  games: GameObjType[];
};

export default function GamesBox({ titleBox, games }: GamesBoxProps) {
  return (
    <div className="MainGamesbox">
      <section className="MainGamesBoxHeader">
        <p>{titleBox}</p>
        <span>
          <a href="#">{'<'}</a>
          <a href="#">{'>'}</a>
        </span>
      </section>
      <section className="GamesCarousel">
        {games.map((game) => (
          <div className="GameCard">
            <img src={game.urlImage} alt={game.name} />
            <p>{game.name}</p>
            {typeof game.price === 'number' ? (
              <p>R$ {game.price}</p>
            ) : (
              <p>{game.price}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
