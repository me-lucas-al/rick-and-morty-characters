export function getStatusColor(status: ICharacterStatus) {
  switch (status.toLowerCase() as ICharacterStatus) {
    case "alive":
      return "text-emerald-400";
    case "dead":
      return "text-red-400";
    default:
      return "text-gray-400";
  }
}
