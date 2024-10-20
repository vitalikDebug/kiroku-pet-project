import NavBar from "../navBar/navBar";

const Header = () => {
  return (
    <header>
      <NavBar />
      <section className="hero">
      <main className="main">
        <div className="main__left">
          <div href="" className="main__left-banner">
            For anime Fans, by anime Fans
          </div>
          <h1>
            Kiroku <span>記録</span>
          </h1>
          {/* <p className="main__left-description">Explore a vast collection of your favorite anime series and manga, all in one place. Start your journey today!</p> */}
          <p className="main__left-description">
            Watch the latest anime episodes, read your favorite manga, and
            explore a community of fans who share your passion for Japanese
            culture.
          </p>
          <a className="button button-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="button-arrow"
            >
              <path d="M17 7l-10 10"></path>
              <path d="M16 17l-9 0l0 -9"></path>
            </svg>{" "}
            Get Started
          </a>
        </div>
        <div className="main__right">
          {/* <div className="main__right-request"> */}
            <div className="main__right-cards">
                <a href="" className="main__right-cardAnime">
                  52
                </a>
                <a href="" className="main__right-cardAnime">
                  52
                </a>
                <a href="" className="main__right-cardAnime">
                  52
                </a>
                <a href="" className="main__right-cardAnime">
                  52
                </a>
                <a href="" className="main__right-cardAnime">
                  52
                </a>
                <a href="" className="main__right-cardAnime">
                  52
                </a>
  
                
            </div>
          {/* </div> */}
        </div>
      </main>
      </section>
    </header>
  );
};

export default Header;
