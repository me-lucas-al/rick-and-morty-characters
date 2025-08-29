export default function CharacterImage({
  character,
}: {
  character: ICharacter;
}) {
  return (
    <div className="md:col-span-1">
      <img
        src={character.image}
        alt={`Imagem de ${character.name}`}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
