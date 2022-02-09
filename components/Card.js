function Card({ picture }) {
  const thumbnail = picture.picture.data.attributes.formats.thumbnail;
  const small = picture.picture.data.attributes.formats.small;
  const medium = picture.picture.data.attributes.formats.medium;

  return (
    <div className="galerie__card">
      <img
        srcSet={`${thumbnail.url} ${thumbnail.width}w, ${small.url} ${small.width}w`}
        src={medium.url}
      ></img>
    </div>
  );
}

export default Card;
