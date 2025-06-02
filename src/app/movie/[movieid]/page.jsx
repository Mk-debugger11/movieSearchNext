
import DetailedMoviePage from "@/app/components/detailMoviePage";
export default async function MoviePage({ params }) {
  const movieData = await params
  return <DetailedMoviePage movieId={movieData.movieid} />;
}