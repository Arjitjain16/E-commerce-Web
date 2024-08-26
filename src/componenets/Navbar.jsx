import { Search, ShoppingCart } from "@mui/icons-material"
import { Badge, MenuItem } from "@mui/material"


const Navbar = () => {
  return (
    <div className="h-12 w-full flex items-center justify-between px-12  py-2">
        <div className="flex items-center gap-4">
            <language>
                <h1 className="text-2xl">EN</h1>
            </language>
            <div className="flex items-center gap-1 relative">
                <input type="text" className="border outline-none p-1" />
                <Search className="absolute right-0 pr-1"/>
            </div>
        </div>
        <div>
            <h1 className="text-3xl font-bold">L.A.R.A</h1>
        </div>
        <div className="flex items-center">
            <MenuItem className="">REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
              <Badge badgeContent={4}  color="primary">
               <ShoppingCart/>
              </Badge>
            </MenuItem>
        </div>
    </div>
  )
}

export default Navbar