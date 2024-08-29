
const Register = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-no-repeat" style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)), url(https://images.unsplash.com/photo-1622589971252-88e154474ae9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

        <div className="bg-white to-black w-[45vw] h-[44vh] mt-40 p-5 shadow z-50 rounded-md">
            <h1 className="text-3xl mb-4">CREATE AN ACCOUNT</h1>
            <form action="" className="flex flex-col gap-4">
                <div className="w-full flex gap-2">
                    <input type="text" placeholder="first Name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600
                    block w-full py-1.5 px-2.5 outline-none"/>
                    <input type="text" placeholder="Lat Name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 
                    block w-full py-1.5  px-2.5 outline-none" />
                </div>
                <div className="w-full flex gap-2">
                    <input type="text" placeholder="Username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600
                    block w-full py-1.5 px-2.5 outline-none"/>
                    <input type="text" placeholder="Email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 
                    block w-full py-1.5  px-2.5 outline-none" />
                </div>
                <div className="w-full flex gap-2">
                    <input type="password" placeholder="Password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600
                    block w-full py-1.5 px-2.5 outline-none"/>
                    <input type="password" placeholder="Confirm Password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 
                    block w-full py-1.5  px-2.5 outline-none" />
                    
                </div>
                
            </form>
            <div className="mt-3">
                <h1 className="mb-2">By creating  an account I consent  to the processing of my personal data in accordance with the <span className="font-semibold">PRIVACY POLICY</span></h1>
                <div >
                   <button className="px-8 py-2 bg-[#016D6E] text-white text-xl">CREATE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register