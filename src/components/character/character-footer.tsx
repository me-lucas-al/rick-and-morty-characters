import { formatDate } from "@/utils/_global/formatDate";
import { CalendarBlankIcon } from "@phosphor-icons/react/dist/ssr";

export default function CharacterFooter({ character }: { character: ICharacter }) {
  return (
    <div className="border-t border-gray-700 pt-6 text-center">
      <div className="flex items-center justify-center gap-2 text-gray-400">
        <CalendarBlankIcon size={20} />
        <span>Visto pela primeira vez em: {formatDate(character.created)}</span>
      </div>
    </div>
  );
}
