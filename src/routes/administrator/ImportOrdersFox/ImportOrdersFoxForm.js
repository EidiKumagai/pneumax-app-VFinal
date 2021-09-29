import React, { Component } from 'react';
import {Card, 
        Form, 
        Input, 
        Row, 
        Col, 
        DatePicker
    } from 'antd';
// import locale from 'moment/locale/pt-br';
// import moment from 'moment';
/**
 * Esse form é responsável por gerenciar os campos da tela de import
 * POrem as actions virão do component pai.
 */
export default class ImportOrdersFoxForm extends Component {

    render () {
        return(
            <Row>
                <Col span={24}>
                    <Card type="inner" title="Importação Ordens Fox">
                        <Form layout="horizontal" size="small">
                            <Row>
                            <Col lg={4} md={6} sm={12} xs={24}>
                                <div className="gx-form-row0">
                                    <Form.Item label="Data inicial">
                                        <DatePicker 
                                            // value={this.state.dataEntrega}
                                            // locale={locale}
                                            format={"DD-MM-YYYY"} 
                                            onChange={this.props.handleChange('dataInicio')} 
                                        />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12} xs={24}>
                                <div className="gx-form-row0">
                                    <Form.Item label="Data final">
                                        <DatePicker 
                                            // locale={locale}
                                            // defaultValue={moment()}
                                            format={"DD-MM-YYYY"} 
                                            onChange={this.props.handleChange('dataFim')} 
                                        />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12} xs={24}>
                                <div className="gx-form-row0">
                                    <Form.Item label="Pedido Venda">
                                        <Input 
                                            type="text"
                                            // style={{ width: 120 }}  
                                            value={this.props.filtros.pedido}
                                            name="pedido"
                                            onChange={this.props.handleChange('pedido')}
                                            onKeyDown={this.props.onKeyDown}
                                        />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12} xs={24}>
                                <div className="gx-form-row0">
                                    <Form.Item label="Pedido Cliente" >
                                        <Input 
                                            type="text" 
                                            // style={{ width: 120 }}
                                            value={this.props.filtros.pedidoCliente}
                                            name="pedidoCliente"
                                            onChange={this.props.handleChange('pedidoCliente')}
                                            onKeyDown={this.props.onKeyDown}
                                        />
                                    </Form.Item>
                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={12} xs={24}>
                                <div className="gx-form-row0">
                                    <Form.Item label="Codigo produto" >
                                        <Input 
                                            type="text" 
                                            // style={{ width: 120 }}
                                            // value={orderPro.pedidoCliente}
                                            value={this.props.filtros.produto}
                                            name="produto"
                                            onChange={this.props.handleChange('produto')}
                                            onKeyDown={this.props.onKeyDown}
                                        />
                                    </Form.Item>
                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={12} xs={24}>
                                <div className="gx-form-row0">
                                    <Form.Item label="CFOP" >
                                        <Input 
                                            type="text" 
                                            // style={{ width: 120 }}
                                            // value={orderPro.pedidoCliente}
                                            name="cfop"
                                            value={this.props.filtros.cfop}
                                            onChange={this.props.handleChange('cfop')}
                                            onKeyDown={this.props.onKeyDown}
                                        />
                                    </Form.Item>
                                </div>
                            </Col>

                            <Col lg={6} md={6} sm={12} xs={24}>
                                <div className="gx-form-row0">
                                    <Form.Item label="Cliente" >
                                        <Input 
                                            type="text" 
                                            // style={{ width: 120 }}
                                            // value={orderPro.pedidoCliente}
                                            value={this.props.filtros.empresa}
                                            name="empresa"
                                            onChange={this.props.handleChange('empresa')}
                                            onKeyDown={this.props.onKeyDown}
                                        />
                                    </Form.Item>
                                </div>
                            </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        )
    }
}

