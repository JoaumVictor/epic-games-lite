import './style.scss';
import Header from '../../components/Header';
import HomeMain from '../../components/Home/HomeMain/index';

export default function Home() {
  return (
    <div className="HomePage">
      <Header
        tags={['Store', 'Perguntas Frequentes', 'Ajuda', 'Unreal Engine']}
      />
      <HomeMain />
    </div>
  );
}
