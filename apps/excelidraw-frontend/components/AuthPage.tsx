"use client";

export function AuthPage({isSignin}: {
    isSignin: boolean
}) {
    return<div className="h-screen w-screen bg-gray-200 flex flex-col justify-center items-center px-8 sm:px-6 lg:px-8">
  <div className="bg-white rounded-xl border p-8 w-full max-w-sm sm:max-w-md">
    <h2 className="text-center text-2xl sm:text-3xl mb-4">{isSignin ? "Sign in" : "Sign up"}</h2>
    <div className="flex flex-col justify-center items-center gap-4">
    <input placeholder="Username" type={"text"} className="px-4 py-2 m-2"></input>
    <input placeholder="password" type={"text"} className="px-4 py-2 m-2"></input>
    </div>
    <div className="flex justify-center mt-4 px-4 sm:px-8 text-base sm:text-lg relative z-10 w-full px-4 py-2 rounded-md text-lg font-semibold transition-transform duration-150 ease-out">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        {isSignin ? "Sign In" : "Sign Up Now"}
     </button>
    </div>
  </div>
</div>

}