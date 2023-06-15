import React, { useState } from "react";
import "./longitudnal.css";
import Nav from "./Nav";
import img1 from "../images/first.png";
import img2 from "../images/second.png";
const Longitudnal = () => {
  const [frame, setFrame] = useState("Normal");
  const [dimentions,setDimentions] = useState({
    t1:0.70104,t2:0.4878,t3:0.70104,t4:0.762,a1:0.3048,a2:0.3048,a3:0.6096,a4:0.54864,b1:0.9144,b2:0.9144,b3:1.524,b4:8.01624,b5:0.3048,b6:0.03048,h1:8.01624,h2:0.09144,h3:1.524,A:60,C:9.4572,P:0.09144
  })
  return (
    <div className="longitudnal_page">
      <div className="image">
        {frame === "Normal" ? (
          <img src={img1} alt="pic1" />
        ) : (
          <img src={img2} alt="pic2" />
        )}
      </div>
      <div className="structure_btn">
        <span className="structure_text">Structure Type</span>
        <div className="2d_btn">
          <input type="radio" name="structure" id="2-D" value="2-D" />
          <label htmlFor="2-D">2-Dimensional</label>
        </div>
        <div className="3d_btn">
          <input type="radio" name="structure" id="3-D" value="3-D" checked/>
          <label htmlFor="3-D">3-Dimensional</label>
        </div>
      </div>
      <span className="bridge_text">Type of Bridge</span>
      <div className="bridge_type">
        <div className="normal">
          <input
            type="radio"
            name="bridge_type"
            id="normal_frame"
            onClick={() => setFrame("Normal")}
          />
          <label htmlFor="normal_frame">Normal Type Frame</label>
        </div>
        <div className="box_culvert">
          <input
            type="radio"
            name="bridge_type"
            id="box_culvert"
            onClick={() => setFrame("Box")}
          />
          <label htmlFor="normal_type">Box Culvert</label>
        </div>
      </div>

      {/* Buttons */}
      <div className="top_btn">
        <div className="top_left_btn">
          <label htmlFor="">Meterial</label>
          <input type="number" name="" id="" placeholder="1" />
          <select className="top_left_btn_select" name="" id="">
            <option value=""></option>
            <option value=""></option>
          </select>
          <button className="three_dots">
            <div className="dots">...</div>
          </button>
        </div>
        <div className="top_right_btn">
          <label htmlFor="">Size of Plate Element</label>
          <input type="number" name="" id="" placeholder="0.9144" />
          <span>m</span>
        </div>
      </div>
      <div className="top_down_btn">
        <div className="top_left_btn">
          <label htmlFor="">Span</label>
          <input type="number" name="" id="" placeholder="12.8016" />
          <span>m</span>
        </div>
        <div className="top_right_btn">
          <label htmlFor="wing_wall">Wing Wall</label>
          <input type="checkbox" name="" id="wing_wall" checked />
          <input type="number" name="" id="" placeholder="0.4572" />
          <span>m</span>
        </div>
      </div>
      <div className="ex">(ex:3, 4, 5@5.5)</div>

      <div className="skew_angle">
        <label htmlFor="skew_angle">Skew Angle</label>
        <input type="number" id="skew_angle" placeholder="20" />
        <span>[deg]</span>
      </div>

      <div className="dimentions">
        <div class="table">
          <div class="cell">
            <label htmlFor="t1">t1</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.t1} type="number" name="t1" id="t1" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="t2">t2</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.t2} type="number" name="t2" id="t2" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="t3">t3</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.t3} type="number" name="t3" id="t3" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="t4">t4</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.t4} type="number" name="t4" id="t4" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="a1">a1</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.a1} type="number" name="a1" id="a1" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="a2">a2</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.a2} type="number" name="a2" id="a2" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="a3">a3</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.t3} type="number" name="a3" id="a3" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="a4">a4</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.a4} type="number" name="a4" id="a4" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="b1">b1</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.b2} type="number" name="b1" id="b1" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="b2">b2</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.b2} type="number" name="b2" id="b2" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="b3">b3</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.b3} type="number" name="b3" id="b3" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="b4">b4</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.b4} type="number" name="b4" id="b4" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="b5">b5</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.b5} type="number" name="b5" id="b5" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="b6">b6</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.b6} type="number" name="b6" id="b6" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="h1">h1</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.h1} type="number" name="h1" id="h1" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="h2">h2</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.h2} type="number" name="h2" id="h2" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="h3">h3</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.h3} type="number" name="h3" id="h3" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="A">A</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.A} type="number" name="A" id="A" />
            <span>[dig]</span>
          </div>
          <div class="cell">
            <label htmlFor="C">C</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.C} type="number" name="C" id="C" />
            <span>m</span>
          </div>
          <div class="cell">
            <label htmlFor="P">P</label>
            <input onChange={(e)=> setDimentions({...dimentions,[e.target.name]:e.target.value})}
            value={dimentions.P} type="number" name="P" id="P" />
            <span>m</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Longitudnal;
