"use client";

import AlertCard from "@/components/AlertCard";
import CardList from "@/components/Card-List";
import { SkeletonCard } from "@/components/Skeleton-Card";
import useGetAllCharacters from "@/hooks/use-all-characters";
import React from "react";

export default function Home() {
  const { data: characters, isPending } = useGetAllCharacters();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Rick and Morty Characters
      </h1>
      {!isPending ? (
        <CardList />
      ) : !characters ? (
        <SkeletonCard />
      ) : (
        <AlertCard />
      )}
    </div>
  );
}
