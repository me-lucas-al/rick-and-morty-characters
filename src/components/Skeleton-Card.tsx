import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-[350px] w-[400px] hover:shadow-xl transition-all duration-300 
                 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 
                 hover:border-gray-600"
        />
      ))}
    </div>
  );
}
