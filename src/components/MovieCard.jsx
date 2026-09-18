import MoviePoster from "./MoviePoster"

export default function MovieCard({image, mediaType, quality="WEB-DL", rating, comments, title, year}) {
  return (
    <article>
        <MoviePoster image={image}>
            <span className="badge badge-media">{mediaType}</span>
            <span className="badge badge-quality">{quality}</span>
            <div className="poster-meta">
            <span className="poster-rating">{rating}</span>
            <span>{comments}</span>
            </div>
        </MoviePoster>

      <h2 className="movie-title">
        {title} ({year})
      </h2>
    </article>

  );
}