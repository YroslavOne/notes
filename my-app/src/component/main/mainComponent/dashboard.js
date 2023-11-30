import Notes from "./notes/notes";
import createNote from "./notes/createNote";
import "./dashboard.css"
import ArrayTags from "../../../dataTag";
// import {useState} from "react";
import {Plus} from  'react-bootstrap-icons';

function Dashboard(props){


const buttonTags = () =>{
    ArrayTags.map((ArrayObj, index)=>(
        let ent = "<button style={{background: ArrayObj.color}}>ArrayObj.tag</button>"
    ))
}
    


return(
<div className="dashboard">
    <div className="top-dashboard-line">
        <button className="add-button"><Plus/></button>
    <div className="dashboard-tag">
        <button>shoping</button>
        <button>busness</button>
        <button>other things</button>

    </div>
    </div>
    {/* <div>{<createNote/>}</div> */}
    <div><Notes data={props.data}/></div>
</div>
)

}
export default Dashboard;