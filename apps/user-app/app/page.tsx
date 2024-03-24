import { Input } from "@repo/ui/Input";
import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient()

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl text-red-600 ">
        Initialized tailwind css
      </h1>
      <Input />
    </div>
  );
}
