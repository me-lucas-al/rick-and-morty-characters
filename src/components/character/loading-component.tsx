import { ArrowsClockwiseIcon } from "@phosphor-icons/react/dist/ssr";

export default function LoadingComponent() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-gray-900 text-white">
      <ArrowsClockwiseIcon size={150} className="animate-spin" />
      <p>Carregando informações do personagem...</p>
    </div>
  );
}