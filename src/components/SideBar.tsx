import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface SideBarProps{
  selectedButtonId: (id: number)=>void;
  selectId: number;
  genrerselected: GenreResponseProps[];
}
export function SideBar({selectedButtonId, selectId, genrerselected}: SideBarProps) {
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genrerselected.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => selectedButtonId(genre.id)}
              selected={selectId === genre.id}
            />
          ))}
        </div>

      </nav>
  );
}