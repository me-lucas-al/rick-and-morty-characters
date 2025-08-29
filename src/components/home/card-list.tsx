import useGetAllCharacters from "@/hooks/use-all-characters";
import { CardDemo } from "../home/card";

export default function CardList() {
  const { data: characters } = useGetAllCharacters();

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mx-auto w-full h-full">
      {characters?.map((character: ICharacter) => (
        <CardDemo key={character.id} character={character} />
      ))}
    </div>
    );
}
