const MangaById = ({ items }) => {
  console.log(items);
  return (
    <div className="mangaById">
      <div className="mangaById__background">
        <img 
          src={`${items.host}/data/${items.chapterHash}/${items.chapterData[1]}`}
          alt=""
          className="mangaById__background-img"
        />
        <img
          src={`${items.host}/data/${items.chapterHash}/${items.chapterData[2]}`}
          alt=""
          className="mangaById__background-img"
        />
        <img
          src={`${items.host}/data/${items.chapterHash}/${items.chapterData[3]}`}
          alt=""
          className="mangaById__background-img"
        />
        <img
          src={`${items.host}/data/${items.chapterHash}/${items.chapterData[4]}`}
          alt=""
          className="mangaById__background-img"
        />
        <img
          src={`${items.host}/data/${items.chapterHash}/${items.chapterData[5]}`}
          alt=""
          className="mangaById__background-img"
        />
        <img
          src={`${items.host}/data/${items.chapterHash}/${items.chapterData[6]}`}
          alt=""
          className="mangaById__background-img"
        />
        <img
          src={`${items.host}/data/${items.chapterHash}/${items.chapterData[7]}`}
          alt=""
          className="mangaById__background-img"
        />
        <img
          src={`${items.host}/data/${items.chapterHash}/${items.chapterData[8]}`}
          alt=""
          className="mangaById__background-img"
        />
         <img
          src={`${items.host}/data/${items.chapterHash}/${items.chapterData[9]}`}
          alt=""
          className="mangaById__background-img"
        />
        <img
          src={`${items.host}/data/${items.chapterHash}/${items.chapterData[10]}`}
          alt=""
          className="mangaById__background-img"
        />
      </div>
      <div className="mangaById__desc">
        <div className="mangaById__desc-left">
            <img src={items.coverUrl} alt="" className="mangaById__left-img"/>
        </div>
        <div className="mangaById__desc-right">
          <div className="mangaById__right-title">{items.attributes.title.en}</div>
        </div>
      </div>
    </div>
  );
};

export default MangaById;
