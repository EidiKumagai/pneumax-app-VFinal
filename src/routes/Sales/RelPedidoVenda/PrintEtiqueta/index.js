import React, { Fragment, Component } from "react";
import ReactToPrint from "react-to-print";
import { Button, Col, Row, Card } from "antd";
import "./style.css";
import LogoKnap from "./knapp_logo.svg";
import Barcode from "react-barcode";
import moment from "moment";
const numero = require("numero-por-extenso");

// import { Container } from './styles';

class PrintReport extends Component {
  constructor() {
    super();

    this.componentRef = React.createRef();
  }

  render() {
    return (
      <Fragment>
        <ReactToPrint
          trigger={() => (
            <Button type="primary" style={{ width: "100%" }}>
              Imprimir Etiquetas
            </Button>
          )}
          content={() => this.componentRef.current}
        />

        <div className="page-break" style={{ display: "none" }}>
          <PrintComponent ref={this.componentRef} data={this.props.data} />
        </div>
      </Fragment>
    );
  }
}

export default PrintReport;

export class PrintComponent extends React.Component {
  getTotalValue = data => {
    for (const pdVenda of data) {
      let resultadoTotal = 0;
      for (const linha of pdVenda.linhas) {
        resultadoTotal +=
          linha.valor_unitario === null
            ? parseFloat(0)
            : parseFloat(
                parseFloat(linha.valor_unitario) * parseFloat(linha.qty)
              );
      }

      return parseFloat(resultadoTotal).toFixed(2);
    }
  };

  render() {
    const { data } = this.props;
    let resultado;

    if (typeof data === "undefined") {
      return <Fragment />;
    } else {
      console.log(data);
      resultado = this.getTotalValue(data);
    }

    return (
      <div
        ref={el => (this.componentRef = el)}
        id="divToPrint"
        className="print-container"
        style={{
          backgroundColor: "#FFF"
        }}
      >
        {/*

        <div className="date-report">
          05/01/2021
          </div>
*/}

        {data.map(pdvenda => {
          return (
            <Row
              style={{
                height: "100%",
                padding: "1%"
              }}
            >
              <Col span={24}>
                <Row
                  style={{
                    height: "40%",

                    borderLeft: "1px solid #000"
                  }}
                >
                  <Col
                    style={{
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",

                      borderLeft: "1px solid #000"
                    }}
                    span={8}
                  >
                    <Row
                      style={{
                        height: "50%"
                      }}
                    >
                      <Col span={24}>
                        <Row
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            padding: "12px"
                          }}
                        >
                          <img src={LogoKnap}></img>
                        </Row>
                      </Col>
                    </Row>

                    <Row
                      style={{
                        height: "50%",
                        borderTop: "1px solid #000"
                      }}
                    >
                      <Col span={24}>
                        <p
                          style={{
                            fontSize: "35px",
                            paddingLeft: "12px"
                          }}
                        >
                          End:
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={16}>
                    <Row
                      style={{
                        height: "30%",
                        borderTop: "1px solid #000",
                        borderRight: "1px solid #000",

                        borderBottom: "1px solid #000",
                        borderLeft: "1px solid #000"
                      }}
                    >
                      <Col span={24}>
                        <Row
                          style={{
                            alignItems: "center",
                            height: "100%"
                          }}
                        >
                          <p
                            style={{
                              fontSize: "35px",
                              paddingLeft: "12px",
                              paddingTop: "18px"
                            }}
                          >
                            Projeto: 3.284 PKS-014-18-DIM-BR-CWB
                          </p>
                        </Row>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        height: "70%",
                        borderRight: "1px solid #000",

                        borderLeft: "1px solid #000"
                      }}
                    >
                      <Col span={24}>
                        <Row>
                          <Col span={10}>
                            <p
                              style={{
                                fontSize: "35px",
                                paddingLeft: "6px",
                                paddingTop: "18px"
                              }}
                            >
                              Ord. Compra:
                            </p>
                          </Col>
                          <Col span={14}>
                            <Row
                              style={{
                                height: "30%",
                                display: "flex",
                                justifyContent: "space-between"
                              }}
                            >
                              <p
                                style={{
                                  fontSize: "35px",

                                  paddingTop: "18px"
                                }}
                              >
                                29.995
                              </p>
                              <p
                                style={{
                                  fontSize: "35px",

                                  paddingTop: "18px"
                                }}
                              >
                                Seq.:
                              </p>
                              <p
                                style={{
                                  fontSize: "35px",

                                  paddingTop: "18px"
                                }}
                              >
                                1
                              </p>
                            </Row>
                          </Col>
                        </Row>
                        <Row
                          style={{
                            height: "70%"
                          }}
                        >
                          <Col span={24}>
                            <Barcode
                              margin={0}
                              displayValue={false}
                              height={"80%"}
                              value="468464646afsasf684asf64846"
                            ></Barcode>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row
                  style={{
                    height: "40%",
                    borderTop: "1px solid #000",
                    borderRight: "1px solid #000",
                    borderLeft: "1px solid #000"
                  }}
                >
                  <Col span={24}>
                    <Row>
                      <p
                        style={{
                          fontSize: "35px",
                          paddingLeft: "24px",

                          paddingTop: "24px"
                        }}
                      >
                        Produto:
                      </p>
                      <p
                        style={{
                          paddingTop: "12px",
                          fontSize: "46px",
                          paddingLeft: "64px"
                        }}
                      >
                        4648646846457
                      </p>
                    </Row>
                    <Row>
                      <p
                        style={{
                          fontSize: "35px",
                          paddingLeft: "24px"
                        }}
                      >
                        EIXO TRANSV.TIPO1STRNB-390
                      </p>
                    </Row>
                    <Row>
                      <p
                        style={{
                          fontSize: "35px",
                          paddingLeft: "24px"
                        }}
                      >
                        ZINCADO
                      </p>
                    </Row>
                  </Col>
                </Row>

                <Row
                  style={{
                    height: "20%",
                    borderTop: "1px solid #000",
                    borderRight: "1px solid #000",
                    borderBottom: "1px solid #000",
                    borderLeft: "1px solid #000"
                  }}
                >
                  <Col
                    span={16}
                    style={{
                      borderRight: "1px solid #000"
                    }}
                  >
                    <Row
                      style={{
                        alignItems: "center",
                        height: "100%",
                        paddingLeft: "48px"
                      }}
                    >
                      <Barcode
                        margin={0}
                        displayValue={false}
                        height={"100%"}
                        value="468464646afsasf684asf64846"
                      ></Barcode>
                    </Row>
                  </Col>
                  <Col span={8}>
                    <Row
                      style={{
                        height: "50%",
                        paddingTop: "26px",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end"
                      }}
                    >
                      <p
                        style={{
                          fontSize: "35px",
                          paddingRight: "24px"
                        }}
                      >
                        Qtd.
                      </p>
                    </Row>
                    <Row
                      style={{
                        height: "50%",
                        flexDirection: "row-reverse",
                        alignItems: "center"
                      }}
                    >
                      <p
                        style={{
                          fontSize: "35px",
                          paddingRight: "24px"
                        }}
                      >
                        1,00
                      </p>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
      </div>
    );
  }
}
