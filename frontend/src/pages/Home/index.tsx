import './style.scss';
import Header from '../../components/Header';
import HomeMain from '../../components/HomeMain/index';

export default function Home() {
  return (
    <div className="HomePage">
      <Header />
      <HomeMain />
    </div>
  );
}
