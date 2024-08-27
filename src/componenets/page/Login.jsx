
const Login = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-no-repeat" style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)), url(https://images.unsplash.com/photo-1622589971252-88e154474ae9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

        <div className="bg-white to-black w-[24vw] h-[42vh] mt-40 p-5 shadow z-50 rounded-md">
            <h1 className="text-3xl mb-4">SIGN IN</h1>
            <form action="" >
                <div className="w-full flex flex-col gap-5">
                    <input type="text" placeholder="User" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600
                    block w-full py-3 px-2.5 outline-none"/>
                    <input type="text" placeholder="Password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 
                    block w-full py-3  px-2.5 outline-none" />
                    <div>
                      <button className="px-10 py-2 bg-[#037B7A] text-white text-xl">Login</button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <a href="">DO NO REMEMBER THE PASSWORD?</a>
                    <a href="">CREATE A NEW ACCOUNT</a>
                </div>
            </form>
            <div>
                
               
            </div>
        </div>
    </div>
  )
}

export default Login