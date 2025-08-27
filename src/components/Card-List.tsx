import useGetAllCharacters from "@/hooks/use-all-characters";
import { CardDemo } from "./Card";

export default function CardList() {
  const { data: characters } = useGetAllCharacters();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full h-full gap-6">
      {characters?.map((character: ICharacter) => (
        <CardDemo key={character.id} character={character} />
      ))}
    </div>
  );
}
