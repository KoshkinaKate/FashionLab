import { useState } from 'react';
import Nav from './Nav';

export default function Header(props) {
  const [headerLinks] = useState([
    "Home",
    "Women's",
    "Men's",
    "On the Street",
    "The Catwalk",
    "AdWatch",
    "About"
  ]);

  return (
    <header>
        <h1>Sartre's List</h1>
        <h2>Better-Dressed People</h2>
      <Nav links={headerLinks} navClass="header-nav" />
    </header>
  );
}
