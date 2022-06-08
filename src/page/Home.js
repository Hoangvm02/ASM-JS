import Banner from "../conponents/Banner";
import ListBooks from "../conponents/BookList";
import Footer from "../conponents/Footer";
import Header from "../conponents/Header";


const Home = {
  async render () {
      return `
      <div class="banner">
      ${ Header.render()}
      </div>
      <div class="banner">
      ${ Banner.render()}
      </div>
      <div class="banner">
      ${await ListBooks.render()}
      </div>
      <div class="banner">
      ${ Footer.render()}
      </div>
      `
  }
}

export default Home;