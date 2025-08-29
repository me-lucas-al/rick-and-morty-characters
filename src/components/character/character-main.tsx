import {
  AlienIcon,
  GenderIntersexIcon,
  MapPinLineIcon,
  PlanetIcon,
} from "@phosphor-icons/react/dist/ssr";
import InfoItem from "./info-item";
import { DnaIcon } from "@phosphor-icons/react";

export default function CharacterMain({
  character,
}: {
  character: ICharacter;
}) {
  return (
    <>
      <div className="border-t border-gray-700 pt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoItem
            icon={<GenderIntersexIcon size={24} className="text-cyan-400" />}
            label="Gênero"
            value={character.gender}
          />
          <InfoItem
            icon={<DnaIcon size={24} className="text-purple-400" />}
            label="Espécie"
            value={character.species}
          />
          {character.type && (
            <InfoItem
              icon={<AlienIcon size={24} className="text-green-400" />}
              label="Tipo"
              value={character.type}
            />
          )}
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 space-y-4">
        <InfoItem
          icon={<PlanetIcon size={24} className="text-orange-400" />}
          label="Origem"
          value={character.origin.name}
        />
        <InfoItem
          icon={<MapPinLineIcon size={24} className="text-rose-400" />}
          label="Última localização conhecida"
          value={character.location.name}
        />
      </div>
    </>
  );
}
