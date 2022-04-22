import { BOOKING_SEAT, CANCEL_SEAT } from "../Type/BookingTicketType";

export const bookingAction = (seat) => {
  return {
    type: BOOKING_SEAT,
    seat,
  };
};

export const cancelSeat = (soGhe) => {
  return {
    type: CANCEL_SEAT,
    soGhe,
  };
};
