import { useState } from "react";
import apiRequest from "../../services/apiRequest";

const MangaList = ({ items }) => {
  const [active, setActive] = useState(false);
  const [desc, setDesc] = useState(null);
  const [activeMangaId, setActiveMangaId] = useState(null);
  console.log(items);
  const handleClick = async (e, id) => {
    e.preventDefault();
    setActiveMangaId(id);
    try {
      const res = await apiRequest.get(`mangadex/manga/${id}`);
      setDesc(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mangaList">
      <h2 className="mangaList__title">
        Manga <span>記録</span>
      </h2>
      <div className="mangaList__main">
        <div className="mangaList__cards ">
          {items &&
            items.map((item) => (
              <div className="mangaList__cardManga" key={item.id}>
                <div
                  className={`cardManga__cover ${
                    activeMangaId === item.id
                      ? "cardManga__active"
                      : "cardManga__hover"
                  }`}
                  onClick={(e) => handleClick(e, item.id)}
                  style={{
                    transform:
                      activeMangaId === item.id ? "scale(1.05)" : "none",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <img
                    src={item.coverUrl || "none"}
                    alt=""
                    className="cardManga__cover-img"
                  />
                  <div className="cardManga__cover-overlay">
                    <div className="cardManga__cover-type">
                      {/* <small className="cardManga__cover-small">
                        {item.type}
                      </small> */}
                      <div className="cardManga__cover-title">
                        {item.attributes.title.en}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="mangaList__right">
<div className="position-sticky">
<div className="mangaList__right-filter">
            <div className="search">
              <input type="text" className="search-input" placeholder="Search manga..."/>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="search-icon"
              >
                <path
                  d="M20 20L15.8033 15.8033C15.8033 15.8033 14 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 11.0137 17.9484 11.5153 17.85 12"
                  stroke="#DBE6FF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="filter">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#DBE6FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-align-right"
              >
                <line x1="21" y1="10" x2="7" y2="10"></line>
                <line x1="21" y1="6" x2="3" y2="6"></line>
                <line x1="21" y1="14" x2="3" y2="14"></line>
                <line x1="21" y1="18" x2="7" y2="18"></line>
              </svg>
            </div>
          </div>
          <div
            className={
              desc
                ? "mangaList__description mangaList__active"
                : "mangaList__description"
            }
          >
            {desc ? (
              <div className="mangaList__description-card">
                <div className="card__header">
                  <div className="card__header-img">
                    <img src={desc.coverUrl} alt="" />
                  </div>
                  <div className="card__header-right">
                    <div className="card__header-status">
                      {desc.attributes.status}
                    </div>
                    <div className="card__header-title">
                      {desc.attributes.title.en}
                    </div>
                    <div className="card__header-year">
                      {desc.attributes.year} year
                    </div>
                    <div className="card__header-genres">
                      {desc.attributes.tags.slice(0, 4).map((tag, index) => (
                        <div key={index} className="card__header-genre">
                          {tag.attributes.name.en}
                        </div>
                      ))}
                      {desc.attributes.tags.length > 5 && (
                        <div className="card__header-genre">
                          +{desc.attributes.tags.length - 5}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="card__footer">
                  <p className="card__footer-top">Description</p>
                  <div className="card__footer-desc">
                    {desc.attributes.description.en}
                  </div>
                </div>
              </div>
            ) : (
              <div className="pulse mangaList__false">
                Please select the manga to view the information{" "}
              </div>
            )}
          </div>
        </div>
</div>
      </div>
    </div>
  );
};
export default MangaList;
