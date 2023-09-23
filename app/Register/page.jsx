import Link from "next/link"
import Image from "next/image"
import Register from "../../assets/Meili_Snow_Mountain_at_Dusk.jpg"
export default function page() {
  return (
    <div className="h-[100vh] bg-slate-900 flex justify-center flex-col lg:flex-row items-center">
      <div>
        <Image
        src={Register}
        alt="Image Not Found"
        width={400}
        className="ImageTest"
        />
      </div>
      <div className="mx-3">
      <form className="space-y-6 ">
      <div>
        <label htmlFor="email" className="text-xl font-medium leading-6 text-white">Email address :</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" required className=" rounded-md border-0 py-1 px-12 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:leading-5"/>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="text-xl font-medium leading-6 text-white">Password :</label>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" required className=" rounded-md border-0 py-1 px-12 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:leading-5"/>
        </div>
      </div>
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline-blue-600">Register</button>
      </div>
      <div>
        <p>
            <span className="mx-1 text-white">Already have account?</span>  
            <Link href={"/Login"} className="text-lg text-blue-600 underline">Login</Link>
        </p>

      </div>
    </form>
      </div>

    </div>
  )
}
