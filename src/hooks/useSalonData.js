import { useCollection } from "./useCollection";

export const useSalonData = (monthToDisplay, salon) => {
    const getMonth = (monthToDisplay) => {
        var date = new Date(monthToDisplay);
        return date.getMonth() + 1;
    };
    const getYear = (monthToDisplay) => {
        var date = new Date(monthToDisplay);
        return date.getFullYear();
    };

    var queryArr = salon ? ["salonId", "==", `${salon.id}`] : null;
    const { documents: bookings } = useCollection("bookings", queryArr);

    let month = getMonth(monthToDisplay);
    let year = getYear(monthToDisplay);

    const monthlyEarnings = bookings
        ? bookings
              .filter(function (booking) {
                  return (
                      booking.slot.month === month && booking.slot.year === year
                  );
              })
              .reduce(function (acc, booking) {
                  acc = acc + parseInt(booking.price);
                  return acc;
              }, 0) 
        : null;

    const monthlyCustomers = bookings
        ? bookings
              .filter(function (booking) {
                  return (
                      booking.slot.month === month && booking.slot.year === year
                  );
              })
              .map((booking) => booking.bookedBy)
              .filter(
                  (bookedBy, index, bookings) =>
                      bookings.indexOf(bookedBy) === index
              ).length
        : null;

	const monthlyBookings = bookings
        ? bookings
              .filter(function (booking) {
                  return (
                      booking.slot.month === month && booking.slot.year === year
                  );
              }).length
        : null;

    return { monthlyEarnings, monthlyCustomers,monthlyBookings};
};
