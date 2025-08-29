import { getStatusColor } from "@/utils/character/getStatusColor";
import { StatusIcon } from "@/utils/character/getStatusIcon";

export default function CharacterHeader({ character }: { character: ICharacter }) {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
        {character.name}
      </h1>
      <div className="flex items-center gap-4 text-lg">
        <div
          className={`flex items-center gap-2 font-semibold ${getStatusColor(
            character.status
          )}`}
        >
          <StatusIcon status={character.status} />
          <span>{character.status}</span>
        </div>
        <span className="text-gray-500">•</span>
        <span className="text-gray-300">{character.species}</span>
      </div>
    </div>
  );
}
