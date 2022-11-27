import { useState } from "react";
import { useEffect } from "react";
import LoadingItem from "../components/LoadigItem";
import Navbar from "../components/Navbar";
import point from "../LANDING/ICONS.png"
import fil from "../LANDING/ICONS.svgz"
function Admin() {
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
        <div>
        {loaing  ?  <div className=" w-full h-screen overflow-hidden"> <LoadingItem  /></div> :
        <div className="landingpage2">
            {
                link.length > 1 ? ([setEdges(old => [...old, link]), setSelected(""), drawedges(), setlink([])]) : ""
            }
            {
                console.log("this is edges", edges)
            }
            <Navbar orange={true} />
            <div className="grid-cols-5 grid w-4/6 m-auto mt-10 gap-3">
                <div className="bg-gray-300 col-span-4 rounded-md  relative p-1 " style={{ width: "1000px", height: "800px" }}>
                    {vortexes && vortexes.map((item) => <div style={{ top: item.y, left: item.x }} className=" absolute"><img src={point} height="15px" width="15px" /> </div>)
                    }
                    {ruotes && ruotes.
                        map((item) => <div style={{ top: item.y, left: item.x }}
                            className=" absolute text-black">
                            <img src={point} height="5px" width="5px" /> </div>
                        )}
                    <img src={'https://www.aldermantooling.co.uk/app/themes/gsl-child/assets/img/floorplan.png'} className=' min-w-full h-full' alt="salam" >
                    </img>
                    <canvas className="absolute top-0 left-0" style={{ width: "1000px", height: "800px" }} onClick={(evt) => { draw(evt); }} id="mycanva">
                    <div> one of the most important thing in the wordl </div>        <div></div>
                    </canvas>
                </div>
                <div className="bg-gray-200 col-span-1 rounded-md p-2 " >
                    <div className="text-blue-600">Edit tools</div>
                   
                    <div className="my-2"> Itmes</div>
                    <div className="flex rounded bg-white p-2 gap-2">
                        <div className={"flex-1 rounded-md  justify-center bg-slate-200 py-2 hover:scale-105 cursor-pointer flex "} onClick={() => { setSelected("point") }}>
                            <img src={point} height="20px" width="25px" className={selected === "point" && " scale-125"} />
                        </div>
                        <div className={"flex-1 rounded-md bg-slate-200 text-center py-2 hover:scale-105 cursor-pointer"} onClick={() => { setSelected("fil") }}>
                            2
                        </div>
                        <div className="flex-1 rounded-md bg-slate-200 text-center py-2 hover:scale-105 cursor-pointer" onClick={() => { setSelected("gome") }}>3
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </div>
    );
}

export default Admin;