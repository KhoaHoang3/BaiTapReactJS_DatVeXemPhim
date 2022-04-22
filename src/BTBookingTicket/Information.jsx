import React, { Component } from "react";
import style from "../assets/style/style.module.css";
import { connect } from "react-redux";
import { CANCEL_SEAT } from "../redux/Type/BookingTicketType";
import { cancelSeat } from "../redux/Action/BookingTicketAction";

class Information extends Component {
  render() {
    return (
      <div className="mt-5">
        <button className={`${style["gheDuocChon"]} mt-4`}></button>{" "}
        <span
          style={{ fontSize: "30px" }}
          className="text-white font-weight-bold"
        >
          Ghế đã đặt
        </span>
        <br></br>
        <button className={`${style["gheDangChon"]} mt-4`}></button>{" "}
        <span
          style={{ fontSize: "30px" }}
          className="text-white font-weight-bold"
        >
          Ghế đang đặt
        </span>
        <br></br>
        <button className={`${style["ghe"]} ml-0 mt-4`}></button>{" "}
        <span
          style={{ fontSize: "30px" }}
          className="text-white font-weight-bold"
        >
          Ghế chưa đặt
        </span>
        <table border="2" cellPadding="10px" className="table mt-5">
          <thead>
            <tr
              className="text-white font-weight-bold"
              style={{ fontSize: "25px" }}
            >
              <th>Số ghế</th>
              <th>Giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-warning font-weight-bold">
            {this.props.bookedSeat.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.soGhe}</td>
                  <td>{item.gia.toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.dispatch(cancelSeat(item.soGhe));
                      }}
                    >
                      Hủy
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="text-warning font-weight-bold">
            <td>Tổng tiền</td>
            <td>
              {this.props.bookedSeat.reduce((total, item, index) => {
                total += (item.gia);
                return total;
              }, 0)}
            </td>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    bookedSeat: rootReducer.bookingReducer.bookedSeat,
  };
};

export default connect(mapStateToProps)(Information);
