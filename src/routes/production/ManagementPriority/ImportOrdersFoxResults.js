import React, { Component } from 'react';
import { Card, Table, Tag, Spin, Input, Button, Icon, Divider } from 'antd';
import moment from 'moment';
import Highlighter from 'react-highlight-words';
import ReactDragListView from "react-drag-listview";
import imagemDrag from './mbridragndrop_99521.svg'

// const ReactDragListView = window["react-drag-listview"];

//const idAutoIncrement = require("id-auto-increment");
// var _ = require('lodash');
// import api from '../../../util/Api';
//let count = 0

/**
 * Esse componente ira receber uma lista de resultados do fox, e ira apresentar num table.
 * @param resultaData É o array com os dados a serem apresentados
 * @type component
 * @author luiz.garcia
 * @since 30/07/2020
 */
export default class ImportOrdersFoxResults extends Component {
  constructor(props) {
    super();
    // this.state = {
    //     selectedRowKeys: []
    // }
    // this.data = [...props.resultData];

    this.state = {
      searchText: '',
      searchedColumn: '',
    }


  }

  onDragEnd = (fromIndex, toIndex) => {
    const columnsCopy = this.state.columns2.slice();
    const item = columnsCopy.splice(fromIndex, 1)[0];
    columnsCopy.splice(toIndex, 0, item);
    this.setState({ columns2: columnsCopy });
  };


  // onSelectChange = selectedRowKeys => {
  //     this.setState({selectedRowKeys});
  // }


  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => {
      if (text === "finalizada") {
        return <Tag color="green">{text.toUpperCase()}</Tag>
      }
      if (text === "execucao") {
        return <Tag color="orange"> {text.toUpperCase()}</Tag>
      }
      if (text === "planejada") {
        return <Tag color="purple"> {text.toUpperCase()}</Tag>
      }
      if (text === "liberada") {
        return <Tag color="blue"> {text.toUpperCase()}</Tag>
      }
      if (text === "pausada") {
        return <Tag color="red"> {text.toUpperCase()}</Tag>
      }
      return this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (text)
    }
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };



  render() {
    // const { selectedRowKeys } = this.props;

    const columns1 = [

      {
        title: "Operar",
        key: "operate",
        width: 80,
        render: (text, record, index) =>
            <img src={imagemDrag} href="#"></img>,
            align: 'center'
    },,
      {
        title: 'Cód. Maquina',
        dataIndex: 'maquina',
        width: 100,
        key: 'maquina',
        align: 'center'
      },
      {
        title: 'Cód. Montagem',
        dataIndex: 'montagem',
        width: 100,
        key: 'montagem',
        align: 'center'
      },
      {
        title: 'Status da Etapa',
        dataIndex: 'statusEtapa',
        render: (text) => {
          if (text === "finalizada") {
            return <Tag color="green">{text.toUpperCase()}</Tag>
          }
          if (text === "execucao") {
            return <Tag color="orange"> {text.toUpperCase()}</Tag>
          }
          if (text === "planejada") {
            return <Tag color="#EBEBEF"> {text.toUpperCase()}</Tag>
          }
          if (text === "liberada") {
            return <Tag color="blue"> {text.toUpperCase()}</Tag>
          }
          if (text === "pausada") {
            return <Tag color="red"> {text.toUpperCase()}</Tag>
          }
        },
        align: 'center',
        ...this.getColumnSearchProps('statusEtapa'),
      },
      {
        title: 'Prioridade Etapa',
        dataIndex: 'prioridadeEtapa',
        ...this.getColumnSearchProps('prioridadeEtapa'),
      },

      {
        title: 'Ordem de Produção',
        dataIndex: 'orderProduction',
        ...this.getColumnSearchProps('orderProduction'),
      },
      {
        title: 'Ordem Principal',
        dataIndex: 'ordemPrincipal',
        ...this.getColumnSearchProps('ordemPrincipal'),
      },
      {
        title: 'Ped. Cliente',
        dataIndex: 'pedidoCliente',
        ...this.getColumnSearchProps('pedidoCliente'),
      },
      {
        title: 'Ped. Venda',
        dataIndex: 'orderFox',
        ...this.getColumnSearchProps('orderFox'),
      },
      {
        title: 'Cod. Produto',
        dataIndex: 'product',
        ...this.getColumnSearchProps('product'),
      },
      {
        title: 'Produto',
        dataIndex: 'description1',
        ...this.getColumnSearchProps('description1'),
      },
      {
        title: 'Qtde Prevista',
        dataIndex: 'qtde',
      },
      {
        title: 'Data Entrega',
        dataIndex: 'dataEntrega',
        //  key:'Emissão',
        render: (text) => moment(text).format('DD-MM-YYYY'),
        ...this.getColumnSearchProps('dataEntrega'),
      },
      {
        title: 'Cliente',
        dataIndex: 'cliente',
        //  key:'isClienteOk',
        align: 'center',
        ...this.getColumnSearchProps('cliente'),
      },


      
    ];


    const that = this;
    this.dragProps = {
      onDragEnd(fromIndex, toIndex) {
        const data = [...that.props.resultData];
        const item = data.splice(fromIndex, 1)[0];
        data.splice(toIndex, 0, item);
        that.props.setStateDrag(data)
      },
      handleSelector: "img",
    };

    return (
      <Spin spinning={false}>
        <Card type="inner" title="Maquinas">

          <ReactDragListView {...this.dragProps}>
            <Table
              //expandedRowRender={record => <Table columns={columnsSub} pagination={{hideOnSinglePage: true}} size={'small'} dataSource={record.linhas}/> }
              scroll={{ x: 2500, y: 2000 }}
              //rowKey={(record) => record.key = 999}
              rowSelection={{
                selectedRowKeys: this.props.selectedRowKeys,
                onChange: this.props.onSelectChange,
              }}
              columns={columns1}
              onChange={this.props.onChangePage}
              sorter={true}
              bordered
              size="small"
              dataSource={this.props.resultData}
              style={{ margin: '-15px -24px' }}
              loading={this.props.loading}
              rowKey={(record) => record.id}
            />
          </ReactDragListView>
          {/* <ReactDragListView {...this.dragProps}>
            <Table
              columns={this.columns}
              pagination={false}
              dataSource={this.state.data}
            />
          </ReactDragListView> */}
        </Card>


      </Spin>
    );
  }
}
