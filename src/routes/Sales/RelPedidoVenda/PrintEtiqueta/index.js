import React, { Fragment, Component } from "react";
import ReactToPrint from "react-to-print";
import { Button, Col, Row, Card } from "antd";
import "./style.css";
import imgSvg from "./knapp_logo.svg";
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
                      <Col span={24}>Logo</Col>
                    </Row>

                    <Row
                      style={{
                        height: "50%",
                        borderTop: "1px solid #000"
                      }}
                    >
                      <Col span={24}>End: </Col>
                    </Row>
                  </Col>
                  <Col span={16}>
                    <Row
                      style={{
                        height: "20%",
                        borderTop: "1px solid #000",
                        borderBottom: "1px solid #000",
                        borderLeft: "1px solid #000"
                      }}
                    >
                      <Col span={24}>Projeto:</Col>
                    </Row>
                    <Row
                      style={{
                        height: "80%",
                        borderRight: "1px solid #000",

                        borderLeft: "1px solid #000"
                      }}
                    >
                      <Col span={24}>Ord. Compra: </Col>
                    </Row>
                  </Col>
                </Row>
                <Row
                  style={{
                    height: "40%",
                    borderTop: "1px solid #000",
                    borderRight: "1px solid #000",
                    borderBottom: "1px solid #000",
                    borderLeft: "1px solid #000"
                  }}
                >
                  <Col span={24}>Produto: Eixo Zincado</Col>
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
                      borderTop: "1px solid #000",
                      borderRight: "1px solid #000",
                      borderBottom: "1px solid #000",
                      borderLeft: "1px solid #000"
                    }}
                  >
                    Barcode
                  </Col>
                  <Col span={8}>Qtd</Col>
                </Row>
              </Col>
            </Row>
          );
        })}
      </div>
    );
  }
}
