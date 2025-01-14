import React from "react";
import { FaBars,FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";


function DashBoardHeader ({handleChange,setHandleChange}) {


    const handleBar = () => {
        setHandleChange (prevstate => !prevstate)
    }




    return (
    <div>


        <div className="flex justify-between items-center w-full h-20 pr-6 z-10  fixed top-0   bg-blue-600 lg:hidden">
          <div onClick={handleBar} > 
        { handleChange ?      
     <FaBars className="text-white text-3xl ml-6 " /> :
     <FaTimes className="text-white text-4xl ml-5 "/>}
     
     </div> 

     <h3 className="text-white text-2xl font-bold  ">Weblify</h3>

     

        </div>

    
<div className="lg:flex justify-between items-center z-10 w-full h-20 px-20 bg-blue-600  ">
    <div className="border-r-r flex border-white h-full  w-32 items-center">
<h3 className="text-white text-2xl font-bold">Weblify</h3>
</div>

<div>
<h3 className="text-white text-2xl font-bold ">Dashboard</h3>
</div>


</div>



       </div> 
    )
}

export default DashBoardHeader;