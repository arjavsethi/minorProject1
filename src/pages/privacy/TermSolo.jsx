import React from 'react'
import ChartTNC from './ChartTNC';

export default function TermSolo({term}) {
  return (
      <>
          <li>
              <h4>{term.subTitle}</h4>
              <ol className="subterm-section-ol">
                  {term.subDetails.map((detail) => (
                      <>
                          <li>
                              <h6>{detail.title}</h6>
                              <ul className="subterm-section-ul-points">
                                  {detail.p.map((p) => (
                                      <>
                                          <li>
                                              <p>{p.pItem}</p>
											  {p.chart && <>
												  <ChartTNC chartData={p.chart}/>
											  </>}
                                              <ol className="sub-details-ol">
                                                  {p.pSubList &&
                                                      p.pSubList.map((sub) => (
                                                          <>
                                                              <li>{sub}</li>
                                                          </>
                                                      ))}
                                              </ol>
                                              {p.pSpecialText && (
                                                  <p className="subterm-section-special">
                                                      {p.pSpecialText}
                                                  </p>
                                              )}
                                          </li>
                                      </>
                                  ))}
                              </ul>
                          </li>
                      </>
                  ))}
              </ol>
          </li>
      </>
  );
}
