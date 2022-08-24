import './style.scss';

export default function HomeNavigation() {
  return (
    <nav className="HomeNavigation">
      <span className="HomeSearchBox">
        <input type="text" placeholder="Pesquisar na loja" />
        <button type="button">Pesquisar</button>
      </span>
      <a href="/">Descobrir</a>
      <a href="/">Novidades</a>
    </nav>
  );
}
