import './style.scss';
import HomeNavigation from '../HomeNavigation/index';
import MainCarousel from '../MainCarousel';
import GamesBox from '../GamesBox';
import gameObj from '../../helpers/links';
import Swiper from 'swiper';

export default function HomeMain() {
  return (
    <main className="HomeMain">
      <HomeNavigation />
      <MainCarousel />
      <GamesBox titleBox="Anúncios da gamescom" games={[gameObj, gameObj, gameObj, gameObj, gameObj]} />
    </main>
  );
}
