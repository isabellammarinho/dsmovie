import { Link } from "react-router-dom";
import MovieScore from "../MovieScore";

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://i.imgur.com/T4Ow0uk.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />

                <Link to={`/form/${movie.id}`}><div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
                
            </div>
        </div>
    );
}
export default MovieCard;