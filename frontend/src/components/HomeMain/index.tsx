import './style.scss';
import HomeNavigation from '../HomeNavigation/index';
import MainCarousel from '../MainCarousel';

export default function HomeMain() {
  return (
    <main className="HomeMain">
      <HomeNavigation />
      <MainCarousel />
    </main>
  );
}
