import React, { useState, useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const Chart = ({ salon, monthToDisplay }) => {
    const [chartData, setChartData] = useState([]);

    var queryArr = salon ? ["salonId", "==", `${salon.id}`] : null;
    const { documents: bookings } = useCollection("bookings", queryArr);

	console.log(bookings ? bookings : null)

    useEffect(() => {
        const getEarningsForDay = (day, month) => {
            const netEarnings = bookings
                ? bookings
                      .filter(function (booking) {
                          return (
                              booking.slot.day === day &&
                              booking.slot.month === month
                          );
                      })
                      .reduce(function (acc, booking) {
                          acc = acc + parseInt(booking.price);
                          return acc;
                      }, 0)
                : null;
            return netEarnings;
        };

        const getnumberOfDays = (month) => {
            var dt = new Date();
            var year = dt.getFullYear();
            var daysInMonth = new Date(year, month, 0).getDate();
            return daysInMonth;
        };

        const getChartDataforMonth = (month) => {
            let data = [];

            for (let i = 1; i <= getnumberOfDays(month); i++) {
                data.push({
                    Day: i,
                    Earnings: getEarningsForDay(i, month),
                });
            }
            setChartData([...data]);
        };
        getChartDataforMonth(monthToDisplay);
    }, [bookings, monthToDisplay]);
    // console.log(chartData)

    return (
        <>
            <BarChart
                width={1200}
                height={400}
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={15}
            >
                <XAxis
                    dataKey="Day"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                    dataKey="Earnings"
                    fill="#30D5C8"
                    background={{ fill: "#eee" }}
                />
            </BarChart>
        </>
    );
};

export default Chart;
