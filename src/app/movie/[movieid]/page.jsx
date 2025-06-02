import DetailedMoviePage from "../..//components/detailMoviePage";
export default async function MoviePage({ params }) {  //params is async so it need to be handled with async await  
  const movieData = await params
  return <DetailedMoviePage movieId={movieData.movieid} />;
}