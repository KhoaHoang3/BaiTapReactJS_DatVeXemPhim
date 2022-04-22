import { BOOKING_SEAT, CANCEL_SEAT } from "./Type/BookingTicketType";

const stateDefault = {
  bookedSeat: [],
};

const bookingReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case BOOKING_SEAT: {
      let bookedSeatUpdate = [...state.bookedSeat];
      let index = bookedSeatUpdate.findIndex(
        (seat) => seat.soGhe === action.seat
      );
      if (index !== -1) {
        bookedSeatUpdate.splice(index, 1);
      } else {
        bookedSeatUpdate.push(action.seat);
      }
      state.bookedSeat = bookedSeatUpdate;

      return { ...state };
    }

    case CANCEL_SEAT: {
      let bookedSeatUpdate = [...state.bookedSeat];
      let index = bookedSeatUpdate.findIndex(
        (item) => item.soGhe === action.soGhe
      );

      if (index !== -1) {
        bookedSeatUpdate.splice(index, 1);
      }
      state.bookedSeat = bookedSeatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
      break;
  }
};

export default bookingReducer;
