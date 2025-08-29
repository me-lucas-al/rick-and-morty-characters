interface ICharacter {
  id: number;
  name: string;
  created: string;
  image: string;
  status: ICharacterStatus;
  species: string;
  type: string;
  character: number;
  gender: string;
  location: ILocation;
  origin: IOrigin;
}