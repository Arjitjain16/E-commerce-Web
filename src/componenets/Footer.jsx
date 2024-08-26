import {  CallOutlined, EmailOutlined, FacebookOutlined, LocationOnOutlined, Pinterest, Twitter } from "@mui/icons-material"
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="h-[40vh] flex justify-between px-4 mt-7">
        <div className="flex-1 flex flex-col gap-7">
            <h1 className="text-5xl font-bold">LARA</h1>
            <p className="font-thin w-[85%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum modi corrupti vitae iste, quisquam dicta doloremque iure consequuntur 
                soluta nam maiores odio vero mollitia facilis quae unde quos incidunt necessitatibus.
            </p>
            <div className="flex gap-3">
                <div className="bg-[#0675E8] h-8 w-8 rounded-full text-white flex items-center justify-center">
                    <FacebookOutlined/>
                </div>
                <div className="bg-[#FE700E] h-8 w-8 rounded-full text-white flex items-center justify-center">
                   <InstagramIcon/>
                </div>
                <div className="bg-[#E60023] h-8 w-8 rounded-full text-white flex items-center justify-center">
                   <Pinterest/>
                </div>
                <div className="bg-[#1DA1F2] h-8 w-8 rounded-full text-white flex items-center justify-center">
                    <Twitter/>
                </div>
            </div>
        </div>
        <div className="flex-1  flex flex-col gap-7">
          <h1 className="text-3xl font-bold">Useful Links</h1>
          <div className="flex flex-row gap-44 items-center">
                <div className="flex flex-col gap-3">
                        <h4>Home</h4>
                        <h4>Mens Fashion</h4>
                        <h4>Accessories</h4>
                        <h4>Order Tracking</h4>
                        <h4>Whistlist</h4>
                </div>
                <div className="flex flex-col gap-3">
                        <h4>Cart</h4>
                        <h4>Women Fashion</h4>
                        <h4>My Accounts</h4>
                        <h4>Whistlist</h4>
                        <h4>Terms</h4>
                </div>
            </div>
               
        </div>
        <div className="flex-1 flex flex-col gap-7">
         <h1 className="text-3xl font-bold">Contacts</h1>
         <div className="flex  gap-2">
            <LocationOnOutlined/>
            <h1>Lava.23. Taiwan Street Janapaw Venn 9090</h1>
         </div>
         <div className="flex  gap-2">
            <CallOutlined/>
            <h1>999-040-59-33</h1>
         </div>
         <div className="flex  gap-2">
            <EmailOutlined/>
            <h1>lara123shop@gmail.com</h1>
         </div>
        </div>
    </div>
  )
}

export default Footer