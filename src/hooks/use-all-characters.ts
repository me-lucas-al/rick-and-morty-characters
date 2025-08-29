import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";


export default function useGetAllCharacters() {
  return useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
        const response = await api.get<{ results: ICharacter[] }>("/character");
        return response.data.results;
    },
  });
}
    
