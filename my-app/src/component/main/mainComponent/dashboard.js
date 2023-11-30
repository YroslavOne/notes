import Notes from "./notes/notes";
import createNote from "./notes/createNote";
import {useState} from "react";
function Dashboard(){

// const []
    


return(
<div>
    <button >Add</button>
    <div>{<createNote/>}</div>
    <div><Notes/></div>
</div>
)

}
export default Dashboard;