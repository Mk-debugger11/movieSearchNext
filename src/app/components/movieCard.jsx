function MovieCard(props) {
    return (
        <div className="movie-Card">
            <div className="movieCardImg">
                <img src={props.imagePath} />
            </div>
            <div className="movieCardp">
                <p>{props.userName}</p>
            </div>
        </div>
    )
}
export default MovieCard;