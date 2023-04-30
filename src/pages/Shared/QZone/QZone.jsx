import React from 'react';
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const QZone = () => {
    return (
        <div className="bg-light bg-gradient" >
                <h5 className="pl-4">Q-Zone</h5>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
        </div>
    );
};

export default QZone;