


const MangaList = ({items}) => {

    console.log(items)



    return (
        <div className="mangaList">
            <h2 className="mangaList__title">Manga <span>記録</span></h2>
          <div className="mangaList__cards">
          {items.map(item => (
              <a href="" className="mangaList__cardManga">
              <div className="cardManga__cover">
                  <img src={item.coverUrl} alt="" className="cardManga__cover-img"/>
                    <div className="cardManga__cover-overlay">
                        <div className="cardAnime__cover-rated">
                            <small></small>
                        </div>
                    </div>
              </div>
              <div className="cardManga__body">
                <div className="cardManga__body-cheap">
                    <span></span>
                </div>
                <div className="cardManga__body-chapters">
                    <small></small>
                </div>
                <p className="cardManga__body-title">{item.attributes.title.en}</p>
              </div>
          </a>
          ))}
          </div>
        </div>
    )

}

export default MangaList