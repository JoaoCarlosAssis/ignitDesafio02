import { MovieCard } from "./MovieCard";

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface ContentProps{
  listMovie: MovieProps[];
  genrerselected: GenreResponseProps;
}
export function Content({listMovie, genrerselected}: ContentProps) {
  return(
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {genrerselected.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {listMovie.map(movie => (
              <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  );
}