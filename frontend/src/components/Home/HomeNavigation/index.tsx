import { AiOutlineSearch } from 'react-icons/ai';

import './style.scss';

interface HomeNavigationProps {
  tags: string[];
}

export default function HomeNavigation({ tags }: HomeNavigationProps) {
  return (
    <nav className="HomeNavigation">
      <span className="HomeSearchBox">
        <AiOutlineSearch className="searchIcon" />
        <input type="text" placeholder="Pesquisar na loja" />
      </span>
      <div className="tagsBox">
        {tags.map((tag, i) => (
          <a key={i} className="tag" href="/">
            {tag}
          </a>
        ))}
      </div>
      <div className="optionsBox">
        <a className="tag" href="/">
          Lista de Desejos
        </a>
        <a className="tag" href="/">
          Carrinho
        </a>
      </div>
    </nav>
  );
}
