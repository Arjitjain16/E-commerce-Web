import { Send } from "@mui/icons-material"

function Newsletter() {
  return (
    <div className="h-[60vh] bg-zinc-100 flex flex-col items-center justify-center gap-6">
        <h1 className="text-7xl font-bold">
            Newletter
        </h1>
        <h4 className="text-2xl font-thin">Get timely updated from your favorite update</h4>
        <div className="bg-slate-50 w-1/2 flex items-center justify-between border border-gray-200">
            <input type="text"  placeholder="Your email" className="border-none outline-none pl-6" style={{flex: '8'}} />   
            <button  className="bg-gray-400 text-white py-2" style={{flex : "3"}}> <Send/></button>    
        </div>
    </div>
  )
}

export default Newsletter