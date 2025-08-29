import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function AlertCard() {
  return (
    <div>
      <Alert variant="destructive" className="bg-black">
        <Terminal />
        <AlertTitle className="text-red-600 font-semibold">
          Ops!
        </AlertTitle>
        <AlertDescription className="text-red-500 font-semibold">
          Algo deu errado ao carregar os personagens. Por favor, tente novamente
          mais tarde.
        </AlertDescription>
      </Alert>
    </div>
  );
}
