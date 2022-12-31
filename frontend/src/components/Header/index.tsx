import { BiAngry } from 'react-icons/bi';
import { AiOutlineGlobal, AiOutlineUser } from 'react-icons/ai';

import './style.scss';

interface HeaderProps {
  tags: string[];
}

export default function Header({ tags }: HeaderProps) {
  return (
    <header>
      <div className="tagsBox">
        <a href="/" className="logoLink">
          <img
            src="https://logodownload.org/wp-content/uploads/2020/10/epic-games-logo.png"
            alt="epicLogo"
            className="logo"
          />
        </a>
        {tags.map((tag) => (
          <p className="tag">{tag.toUpperCase()}</p>
        ))}
      </div>
      <div className="userBox">
        <AiOutlineGlobal className="icon" />
        <AiOutlineUser className="icon" />
        <div className="download">
          <p>Baixar Epic Games </p>
        </div>
      </div>
    </header>
  );
}
