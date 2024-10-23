import { Await, Link, useLoaderData } from "react-router-dom";
import Cards from "../cards/cards";
import NavBar from "../navBar/navBar";
import { Suspense, useState } from "react";

const Header = () => {
  const [titles, setTitles] = useState([]);
  const data = useLoaderData();
  console.log(data);

  return (
    <header>
      {/* <NavBar /> */}
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
            <Link to="/manga" className="button button-start">
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
              Manga
            </Link>
          </div>
          <div className="main__right">
            <Suspense fallback={<div>...loading</div>}>
              <Await
                resolve={data.titlesResponse}
                errorElement={<p>Error loading posts!</p>}
              >
                {(titlesPromise) => <Cards items={titlesPromise.data} />}
              </Await>
            </Suspense>
          </div>
        </main>
      </section>
    </header>
  );
};

export default Header;
