import Image from "next/image"
import Link from "next/link"
import Login from "../../assets/download.jpeg"
export default function page() {
  return (
    <div className="h-[100vh] bg-slate-900 flex justify-center flex-col lg:flex-row items-center">
      <div>
      <Image
        src={Login}
        alt="Image Not Found"
        width={400}
        className="ImageTest"
        />
      </div>
      <div className="mx-4">
      <form className="space-y-6">
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
        <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline-orange-600">Login</button>
      </div>
      <div>
        <p>
            <span className="mx-1 text-white">Don't have a account?</span>  
            <Link href={"/Register"} className="text-lg text-blue-600 underline">Register</Link>
        </p>

      </div>
    </form>
      </div>

    </div>
  )
}
