import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group cursor-pointer"
    >
      <ArrowLeftIcon
        size={20}
        className="group-hover:-translate-x-1 transition-transform"
      />
      Voltar
    </button>
  );
}
