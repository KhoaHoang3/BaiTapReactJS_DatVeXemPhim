import React, { Component } from "react";
import style from "../assets/style/style.module.css";
import { connect } from "react-redux";
import { bookingAction } from "../redux/Action/BookingTicketAction";

class Seats extends Component {
  renderSeats = () => {
    let { seats } = this.props;

    let html = seats.danhSachGhe.map((item, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      // trạng thái ghế đã được đặt
      if (item.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      // Xét trạng thái ghế đang đặt
      let cssBooked = "";

      let indexBooked = this.props.bookedSeat.findIndex(
        (seat) => seat.soGhe === item.soGhe
      );
      if (indexBooked !== -1) {
        cssBooked = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            this.props.booking(item);
          }}
          style={{ fontSize: 16 }}
          disabled={disabled}
          className={`${style[cssGheDaDat]} ${style["ghe"]} ${style[cssBooked]}`}
          key={index}
        >
          {item.soGhe}
        </button>
      );
    });
    return html;
  };

  renderRow = () => {
    let { seats } = this.props;

    if (this.props.numberSeats === 0) {
      return "";
    } else {
      return (
        <div>
          {seats.hang} {this.renderSeats()}
        </div>
      );
    }
  };

  renderRowSeat = () => {
    let { seats } = this.props;

    let html = seats.danhSachGhe.map((item) => {
      if (this.props.numberSeats === 0) {
        return (
          <button className={`${style["rowNumber"]}`}>{item.soGhe}</button>
        );
      }
    });

    return html;
  };

  render() {
    let { seats } = this.props;
    return (
      <div
        style={{ fontSize: 30 }}
        className="text-light mt-3 ml-3 font-weight-bold"
      >
        {this.renderRowSeat()} {this.renderRow()}
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    bookedSeat: rootReducer.bookingReducer.bookedSeat,
  };
};

const mapDisPatchToProps = (dispatch) => {
  return {
    booking: (seat) => {
      console.log(seat);

      dispatch(bookingAction(seat));
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(Seats);
