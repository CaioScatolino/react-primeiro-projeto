import { Person } from "@/components/Person";
import { Square, Circle } from "../components/Geo";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-xl text-red-500">Hello World</h1>

      <Square />
      <Circle />
      <Person name="Caio" age={28} roles={["Admin", "User"]} />
      <Person name="João" age={25} roles={["User"]} />

    </div>
  )
}

export default Page;