import React, { Component } from "react";
import style from "../assets/style/style.module.css";

export default class Screen extends Component {
  render() {
    return (
      <div className="col-8">
        <h3
          className="display-4 text-center"
          style={{ color: "#ffc107", marginTop: "0px", fontFamily: "Arial" }}
        >
          ĐẶT VÉ XEM PHIM CYBERLEARN.VN
        </h3>
        <h3 className="text-center mt-5 text-warning">Màn hình</h3>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <div className={`${style["screen"]}`}></div>
        </div>
      </div>
    );
  }
}
