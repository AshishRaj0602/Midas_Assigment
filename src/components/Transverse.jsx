import React, { useEffect } from "react";
import "./transverse.css";
import { useState } from "react";
import img3 from "../images/third.png";
import img4 from "../images/fourth.png";
import type from "../images/type1.png";
const Transverse = () => {
  const [type, setType] = useState(1);
  const [inputs,setInputs] = useState({b1:1.00584,b2:1.88976,b3:0.4572,b4:2.01168,b5:14.24,b6:2.01168,b7:0.4572,D:6.096,n:3});
  return (
    <div className="transverse_page">
      <div className="image">
        {type === 1 ? (
          <img src={img3} alt="pic1" />
        ) : (
          <img src={img4} alt="pic2" />
        )}
      </div>
      <div className="type">
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          onChange={(e) => setType(Number(e.target.value))}
        >
          <option value={1}>option1</option>
          <option value={2}>option2</option>
        </select>
        <div className="size_plate">
          <label htmlFor="size">Size of Plate Element</label>
          <input type="nmber" placeholder={1.00584} />
          <span>m</span>
        </div>
      </div>
      <div className="table">
        <div className="cell">
          <label htmlFor="b1">b1</label>
          <input
            onChange={(e) =>
              setInputs({ ...inputs, [e.target.name]: e.target.value })
            }
            value={inputs.b1}
            type="number"
            name="b1"
            id="b1"
          />
          <span>m</span>
        </div>
        <div className="cell">
          <label htmlFor="b2">b2</label>
          <input
            onChange={(e) =>
              setInputs({ ...inputs, [e.target.name]: e.target.value })
            }
            value={inputs.b2}
            type="number"
            name="b2"
            id="b2"
          />
          <span>m</span>
        </div>
        <div className="cell">
          <label htmlFor="b3">b3</label>
          <input
            onChange={(e) =>
              setInputs({ ...inputs, [e.target.name]: e.target.value })
            }
            value={inputs.b3}
            type="number"
            name="b3"
            id="b3"
          />
          <span>m</span>
        </div>
        <div className="cell">
          <label htmlFor="b4">b4</label>
          <input
            onChange={(e) =>
              setInputs({ ...inputs, [e.target.name]: e.target.value })
            }
            value={inputs.b4}
            type="number"
            name="b4"
            id="b4"
          />
          <span>m</span>
        </div>
        <div className="cell">
          <label htmlFor="b5">b5</label>
          <input
            onChange={(e) =>
              setInputs({ ...inputs, [e.target.name]: e.target.value })
            }
            value={inputs.b5}
            type="number"
            name="b5"
            id="b5"
          />
          <span>m</span>
        </div>
        <div className="cell">
          <label htmlFor="b6">b6</label>
          <input
            onChange={(e) =>
              setInputs({ ...inputs, [e.target.name]: e.target.value })
            }
            value={inputs.b6}
            type="number"
            name="b6"
            id="b6"
          />
          <span>m</span>
        </div>
        <div className="cell">
          <label htmlFor="t7">b1</label>
          <input
            onChange={(e) =>
              setInputs({ ...inputs, [e.target.name]: e.target.value })
            }
            value={inputs.b7}
            type="number"
            name="b7"
            id="b7"
          />
          <span>m</span>
        </div>
        <div className="cell">
          <label htmlFor="D">D</label>
          <input
            onChange={(e) =>
              setInputs({ ...inputs, [e.target.name]: e.target.value })
            }
            value={inputs.D}
            type="number"
            name="D"
            id="D"
          />
          <span>m</span>
        </div>
        <div className="cell">
          <label htmlFor="n">n</label>
          <input
            onChange={(e) =>
              setInputs({ ...inputs, [e.target.name]: e.target.value })
            }
            value={inputs.n}
            type="number"
            name="n"
            id="n"
          />
          <span>m</span>
        </div>
      </div>
      <div className="frame">
      <label htmlFor="">Transverse Fixed Support</label>
      <input type="number" /><span>from left side</span>
      </div>
      <div className="culvert">
        <div className="left_culvert">
          <div className="culvert_type">Spring Type</div>
          <div className="Reaction">Modulus of Subgrade Reaction</div>
        </div>
        <div className="right_culvert">
          <div className="radio_btn">
            <input type="radio" name="type" id="type_btn1" />
            <label htmlFor="type_btn1">Genral</label>
            <input type="radio" name="type" id="type_btn2" />
            <label htmlFor="type_btn2">Compression Only</label>
          </div>
          <div>
            <label htmlFor="">Lower</label>
            <input type="number" placeholder="19635.9"/>
            <span>kN/m3</span>
          </div>
          <div>
            <label htmlFor="">Lateral</label>
            <input type="number" placeholder="19635.9"/>
            <span>kN/m3</span>
          </div>
          <div>
            <label htmlFor="">Upper</label>
            <input type="number" placeholder="19635.9"/>
            <span>kN/m3</span>
          </div>
        </div>
      </div>
      <div className="total_culvert">
        <div className="div">Length of Elastic Link</div>
        <div className="div">
          <input type="number" />
          <span>m</span>
        </div>
      </div>
    </div>
  );
};

export default Transverse;
