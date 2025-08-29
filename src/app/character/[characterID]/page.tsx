"use client";
import useGetAllCharacters from "@/hooks/use-all-characters";
import { redirect, useParams } from "next/navigation";
import LoadingComponent from "@/components/character/loading-component";
import GoBackButton from "@/components/character/go-back-button";
import CharacterImage from "@/components/character/character-image";
import CharacterHeader from "@/components/character/character-header";
import CharacterFooter from "@/components/character/character-footer";
import CharacterMain from "@/components/character/character-main";

export default function CharacterPage() {
  const { characterID } = useParams();
  const { data: characters, isPending } = useGetAllCharacters();

  if (isPending) {
    return <LoadingComponent />;
  }

  const character: ICharacter | undefined = characters?.find(
    (char) => char.id === Number(characterID)
  );

  if (!character) redirect("/");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <GoBackButton />

        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <CharacterImage character={character} />

            <div className="md:col-span-2 p-6 md:p-8 space-y-6">
              <CharacterHeader character={character} />

              <CharacterMain character={character} />

              <CharacterFooter character={character} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
