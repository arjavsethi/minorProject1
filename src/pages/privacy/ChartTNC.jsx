import React from 'react'

export default function ChartTNC({chartData}) {
  return (
      <>
          <table className="table">
              <thead className="thead-dark">
                  <tr>
                      <th scope="col">
                          Cancellation duration before booking time
                      </th>
                      <th scope="col">
                          Charges (% of the total service amount)
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {chartData.map((data) => (
                      <>
                          <tr>
                              <td>{data.timing}</td>
                              <td>{data.charge}</td>
                          </tr>
                      </>
                  ))}
              </tbody>
          </table>
      </>
  );
}
