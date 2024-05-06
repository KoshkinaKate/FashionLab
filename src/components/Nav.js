export default function Nav({ links, navClass }) {
    return (
      <nav aria-label="Main Navigation" role="navigation">
        <ul className={`nav-bar ${navClass}`}>
          {links.map((link, i) => (
            <li key={i}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  