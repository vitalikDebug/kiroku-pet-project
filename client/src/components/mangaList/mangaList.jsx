import { useState } from "react";

const MangaList = ({ items }) => {
  const [active, setActive] = useState(false);
  const [desc, setDesc] = useState([]);

  const addStyles = () => {
    setActive(!active);
  };
  return (
    <div className="mangaList">
      <h2 className="mangaList__title">
        Manga <span>記録</span>
      </h2>
      <div className="mangaList__main">
        <div className="mangaList__cards ">
          {items && items.map((item) => (
            <div className="mangaList__cardManga">
              <div
                className={
                  active
                    ? "cardManga__cover cardManga__active"
                    : "cardManga__cover"
                }
                onClick={addStyles}
              >
                <img
                  src={item.coverUrl}
                  alt=""
                  className="cardManga__cover-img"
                />
                <div className="cardManga__cover-overlay">
                  <div className="cardManga__cover-type">
                    <small className="cardManga__cover-small">
                      {item.type}
                    </small>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        <div className="pulse mangaList__description">
          <div className="pulse">
            Please select the manga to view the information{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MangaList;
