import Link from "next/link";
export default function Home() {
  return (
    <div className="flex mt-12 justify-center items-center flex-col">
      <h1 className="text-4xl font-bold">Used Tailwind</h1>
      <Link href={"/Login"} className="text-blue-800 underline text-xl mt-4 mb-4">Login</Link>
      <Link href={"/Register"} className="text-blue-800 underline text-xl ">Register</Link>
    </div>
  );
}
