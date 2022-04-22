import React, { Component } from "react";
import style from "../assets/style/style.module.css";
import Information from "./Information";
import Seats from "./Seats";
import danhSachGhe from "./danhSachGhe.json";
import Screen from "./Screen";

export default class BTBookingTicket extends Component {
  renderSeats = () => {
    let html = danhSachGhe.map((item, index) => {
      return (
        <div key={index}>
          <Seats numberSeats = {index} seats={item} />
        </div>
      );
    });

    return html;
  };
  render() {
    return (
      <div className={`${style["imgBack"]}`}>
        <div className={`${style["background"]}`}>
          <div className="container-fluid">
            <div className="row">
              {/* SCREEN */}
              <div className="col-8">
                <h3
                  className="display-4 text-center"
                  style={{
                    color: "#ffc107",
                    marginTop: "0px",
                    fontFamily: "Arial",
                  }}
                >
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </h3>
                <h3 className="text-center mt-2 text-white" style={{paddingRight:150}}>Màn hình</h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <div className={`${style["screen"]}`}></div>
                </div>
                {this.renderSeats()}

              </div>

              {/* SEATS */}

              {/* CHOSEN SEATS */}
              <div className="col-4  ">
                <h3 className="text-center text-white display-4 mt-5 font-weight-bold">
                  Danh sách ghế bạn chọn
                </h3>
                <Information />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
