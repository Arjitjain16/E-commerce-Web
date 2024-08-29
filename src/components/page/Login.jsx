
const Login = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center" style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)), url(https://images.pexels.com/photos/7130035/pexels-photo-7130035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

        <div className="bg-white to-black w-[24vw] h-[42.5vh] mt-40 p-5 shadow z-50 rounded-md">
            <h1 className="text-3xl mb-4">SIGN IN</h1>
            <form action="" >
                <div className="w-full flex flex-col gap-5">
                    <input type="text" placeholder="User" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600
                    block w-full py-3 px-2.5 outline-none"/>
                    <input type="text" placeholder="Password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 
                    block w-full py-3  px-2.5 outline-none" />
                    <div className="mb-2">
                      <button className="px-10 py-2 bg-[#037B7A] text-white text-xl">Login</button>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <a href="" className="underline">DO NO REMEMBER THE PASSWORD?</a>
                    <a href="" className="underline">CREATE A NEW ACCOUNT</a>
                </div>
            </form>
            <div>
                
               
            </div>
        </div>
    </div>
  )
}

export default Login