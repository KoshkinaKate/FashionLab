import { useState } from 'react';
import './styles/App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Article from './components/Article';

export default function App() {
  const [articles] = useState([
    {
      date: "11/12/20",
      title: "On the Street in Brooklyn",
      imageSrc: "https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg",
      imageDesc: "first picture",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tellus ac arcu condimentum dapibus. Mauris vel magna vel nisi pellentesque consequat. Phasellus vitae tortor vel ante malesuada vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce interdum, libero id convallis efficitur, neque leo sodales libero, id scelerisque arcu eros vel metus. Suspendisse potenti. Nulla vitae purus nec enim tempus pharetra. Maecenas at eleifend justo."
    },
    {
      date: "11/11/20",
      title: "Vintage in Vogue",
      imageSrc: "https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg",
      imageDesc: "second picture",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tellus ac arcu condimentum dapibus. Mauris vel magna vel nisi pellentesque consequat. Phasellus vitae tortor vel ante malesuada vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce interdum, libero id convallis efficitur, neque leo sodales libero, id scelerisque arcu eros vel metus. Suspendisse potenti. Nulla vitae purus nec enim tempus pharetra. Maecenas at eleifend justo."
    }
  ]);

  return (
    <div className='App'>
      <Header />
      <main>
        {articles.map(article => <Article article={article} />)}
      </main>
      <Footer />
    </div>
  );
}
