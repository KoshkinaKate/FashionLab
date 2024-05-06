import { useState } from 'react';
import Nav from './Nav';

export default function Footer(props) {
  const [footerLinks] = useState([
    "Home",
    "Women's",
    "Men's",
    "On the Street",
    "The Catwalk",
    "AdWatch",
    "About",
    "Tips"
  ]);

  return (
    <footer>
      <Nav links={footerLinks} navClass="footer-nav" />
      <p>&copy; 2013 Valet Industries Inc.</p>
    </footer>
  );
}
