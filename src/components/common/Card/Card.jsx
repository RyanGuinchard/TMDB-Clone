import { Link } from "react-router-dom";

function Card({ data, mediaType }) {
  const imagePath = data.profile_path || data.poster_path;
  const title = data.name || data.title;
  const description = data.biography || data.overview;
  const detailsLink = `/details/${mediaType}/${data.id}`;

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl border flex flex-col md:flex-row overflow-hidden h-full">
        <figure className="w-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/w500${imagePath}`}
            alt={title}
          />
        </figure>
        <div className="card-body w-full md:w-1/2 flex flex-col">
          <h2 className="card-title">{title}</h2>
          <p className="overflow-auto flex-grow">{description}</p>
          <div className="card-actions justify-end mt-auto">
            <Link to={detailsLink}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;