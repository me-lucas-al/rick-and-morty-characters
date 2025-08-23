"use client"

import { CardDemo } from "@/components/Card";
import api from "@/lib/api";
import React from "react";
import { useQuery } from "@tanstack/react-query";

    type Location = {
    name: string;
    url: string;
  }
  type Origin = {
    name: string;
    url: string;
  }
  interface Character {
    id: number;
    name: string;
    created: string;
    image: string;
    status: string;
    species: string;
    type: string;
    character: number;
    gender: string;
    location: Location;
    origin: Origin
  }

   async function fetchCharacters(): Promise<Character[]> {
    const response = await api.get(`/character`);
    return response.data.results;
  }



export default function Home() {

    const { data } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

 
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-white">Rick and Morty Characters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full h-full gap-6">
          {data?.map((character: Character) => (
            <CardDemo key={character.id} character={character}/>
          ))}
        </div>
      </div>
    </>
  );
}
