
import map   from '../LANDING/interface.png'
import { useState } from "react";
import { useEffect } from "react";
import LoadingItem from "../components/LoadigItem";
import Navbar from "../components/Navbar";
import point from "../LANDING/ICONS.png"
import fil from "../LANDING/ICONS.svgz"
import tool from '../LANDING/22.png'
function User() {
    const [selected, setSelected] = useState(null);
    const [vortexes, setvortexes] = useState([])
    const [edges, setEdges] = useState([])
    const [link, setlink] = useState([])
    const [ruotes, setroutes] = useState([]);
    const makelink = (evt) => {


        const position = getMousePos(document.getElementById("mycanva"), evt);
        let correctpositio = false;
        let tmpvrtx = {}
        for (const vrtx of vortexes) {//const element of array1
            if (position.x < vrtx.x + 20 & position.x > vrtx.x - 20 & position.y < vrtx.y + 20 & position.y > vrtx.y - 20) {
                correctpositio = true
                tmpvrtx = vrtx
            }
        }
        if (correctpositio) {
            if (link.length === 0) {
                setlink([tmpvrtx])
            }
            else if (link.length === 1) {
                setlink(old => [...old, tmpvrtx])


            }
            else {

            }
        }
    }
    const drawedges = () => {
        edges.map((item) => {

            let xa = item[0].x
            let ya = item[0].y
            let xb = item[1].x
            let yb = item[1].y
            let x = xa;
            let y = ya;
            const alpha = (yb - ya) / (xb - xa)
            if ((yb - ya) > 0) {
                if ((xb - xa) > 0) {
                    while (x < xb) {
                        x += 8
                        y += alpha * x
                        setroutes(old => [...old, { x, y }])
                    }
                }
                else {
                }
            }
            else {
                if ((xb - xa) > 0) {

                }
                else {

                }

            }
        })

    }

    // {x1: , x2: , y1: , y2}
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    const draw = (evt) => {

        if (selected != null) {
            if (selected === "point") {
                setlink([])
                putPoint(evt);
                setSelected(null)
            }
            else if (selected === "fil") {
                makelink(evt)
            }
            else if (selected === "gome")
                setlink([])
            {
            }
        }
    }
    const putPoint = (evt) => {
        const position = getMousePos(document.getElementById("mycanva"), evt);
        setvortexes((old) => { return [...old, position] })
    }

    const period = 1000
    const [loaing, setloading] = useState(true);
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
          setloading(false)
        }, period);
      }, [])
    // rendering 
    return (
        <div >
{ loaing ? <LoadingItem/> :


        <div className="bg-black min-h-screen ">
            {
                link.length > 1 ? ([setEdges(old => [...old, link]), setSelected(""), drawedges(), setlink([])]) : ""
            }
            {
            console.log("this is edges", edges)
            }
            <Navbar orange={false} dark={true} />
            <div className="  w-4/5 mt-10  grid grid-cols-5 m-auto gap-10">
                <div className="bg-gray-300 rounded-xl  relative p-1 col-span-4 w-full " style={{  height: "800px" }}>
                    {vortexes && vortexes.map((item) => <div style={{ top: item.y, left: item.x }} className=" absolute"><img src={point} height="15px" width="15px" /> </div>)}
                    {ruotes && ruotes.
                        map((item) => <div style={{ top: item.y, left: item.x }}
                            className=" absolute text-black">
                            <img src={point} height="5px" width="5px" /> </div>
                        )}
                    <img src={map} className=' min-w-full h-full' alt="salam" >

                    </img>
                 
                </div>  
                
                <img src={tool} style={{height:"800px"}} className=" col-span-1 " />
               
            </div>
        </div> }
        </div>
    );
}

export default User;