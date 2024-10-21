import { useEffect, useState } from "react";

const Cards = ({ items }) => {
    console.log(items);
    const [genres, setGenres] = useState([]);
  
    useEffect(() => {
      if (items && items.length > 0) {
        const genresFunction = (genres) => {
          const genreNames = genres.map((genre) => genre.name);
          return genreNames;
        };
  
        // Предположим, что первый элемент массива items содержит нужные данные
        const firstItem = items[0];
        if (firstItem && firstItem.data && firstItem.data.genres) {
          setGenres(genresFunction(firstItem.data.genres));
        }
      }
    }, [items]);
  
    const rating = items && items.length > 0 ? items[0].data.rating : '';
  
    const filterRating = (rating) => {
      const allowedRatings = ["G", "PG-13", "R", "R+", "NC-17"];
      const extractedRating = rating.split(" - ")[0];
  
      if (allowedRatings.includes(extractedRating)) {
        return extractedRating;
      } else {
        return "unknown";
      }
    };
  
    const displayGenres = () => {
      if (genres.length >= 3) {
        return (
          <>
            <div className="cardAnime__body-item">{genres[0]}</div>
            <div className="cardAnime__body-item">{genres[1]}</div>
            <div className="cardAnime__body-item">1+</div>
          </>
        );
      } else {
        return genres.map((genre, index) => (
          <div className="cardAnime__body-item" key={index}>
            {genre}
          </div>
        ));
      }
    };
  
    const rated = filterRating(rating);

  return (
    <div className="main__right-cards">
      {items.map((item) => (
        <a href={item.data.url} className="main__right-cardAnime">
          <div className="cardAnime__cover">
            <img src={item.data.images.jpg.image_url} alt="" />
            <div className="cardAnime__cover-overlay">
              <div className="cardAnime__cover-rated">
                <small>{rated}</small>
              </div>
            </div>
          </div>

          <div className="cardAnime__body">
            <div className="cardAnime__body-cheap">
              <span>{item.data.status}</span>
            </div>
            <div className="cardAnime__body-meta">
              <small>{item.data.episodes} episodes</small>
            </div>

            <p className="cardAnime__body-title">{item.data.title}</p>
            <div className="cardAnime__body-rating">
              <div className="cardAnime__body-score">
                <div className="cardAnime__body-star">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-star "
                  >
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                  </svg>
                  {item.data.score}
                </div>
                <small>{item.data.scored_by} users</small>
              </div>
              <div className="cardAnime__body-rank">
                <div className="cardAnime__body-grid">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-hash "
                  >
                    <path d="M5 9l14 0"></path>
                    <path d="M5 15l14 0"></path>
                    <path d="M11 4l-4 16"></path>
                    <path d="M17 4l-4 16"></path>
                  </svg>
                  {item.data.rank}
                </div>
                <small>Ranking</small>
              </div>
            </div>
            <div className="cardAnime__body-genres">{displayGenres()}</div>
          </div>
        </a>)
      )}
    </div>
  );
};

export default Cards;
