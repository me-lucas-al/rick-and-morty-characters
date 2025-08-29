import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusIcon } from "@/utils/character/getStatusIcon";
import { ArrowCircleUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function CardDemo({ character }: { character: string | any }) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "text-emerald-400";
      case "dead":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <Card className="w-full max-w-sm hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-gray-600">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4 mb-4 flex-wrap">
          <div className="relative">
            <img
              src={character.image}
              alt={character.name}
              className="w-20 h-20 rounded-full border-4 border-gray-700 shadow-xl object-cover"
            />
            <div className="absolute -bottom-1 -right-1 bg-gray-800 rounded-full p-1 shadow-lg border border-gray-600">
              <StatusIcon status={character.status} />
            </div>
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-bold text-white leading-tight">
              {character.name}
            </CardTitle>
            <div className="flex items-center mt-1">
              <span
                className={`font-semibold ${getStatusColor(character.status)}`}
              >
                {character.status}
              </span>
              <span className="text-gray-500 mx-1">•</span>
              <span className="text-gray-300 text-sm">{character.species}</span>
            </div>
          </div>
          <div className="flex-1 flex justify-end items-end">
            <Link className="text-gray-400 hover:text-gray-300 flex items-center gap-0.5" href={`/character/${character.id}`}>
              <ArrowCircleUpRightIcon size={28} /> Ver mais
            </Link>
          </div>
        </div>

        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-200">Gender:</span>
                <span className="text-gray-300">{character.gender}</span>
              </div>

              {character.type && (
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-200">Type:</span>
                  <span className="text-gray-300 text-xs">
                    {character.type}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-200">Species:</span>
                <span className="text-gray-300">{character.species}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-3">
            <div className="mb-3">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-lg">📍</span>
                <span className="font-medium text-gray-200">Location:</span>
              </div>
              <p className="text-gray-300 text-sm ml-6">
                {character.location.name}
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-lg">🌍</span>
                <span className="font-medium text-gray-200">Origin:</span>
              </div>
              <p className="text-gray-300 text-sm ml-6">
                {character.origin.name}
              </p>
            </div>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
