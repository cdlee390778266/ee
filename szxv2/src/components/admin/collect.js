import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col, Button, Modal, Form, Input, DatePicker, Table, Divider, Select, Tabs, Icon } from 'antd';

import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import face from '../../assets/images/face.png'

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
  })
}

class Collect extends Component {

  constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        name:'Hello world!',
        isShowPwdModal: false,
        isShowNicknameModal: false,
        isShowPhoneModal: false,
        isShowEmailModal: false,
        columns: [{
          title: 'API信息',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'API包',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '定价规则',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '提供方式',
          key: 'tags',
          dataIndex: 'tags'
        },
        {
          title: '更新频率',
          key: 'action'
        },
        {
          title: '上架日期',
          key: 'action1'
        },
        {
          title: '操作',
          key: 'handle',
          dataIndex: 'handle',
          render(text) {
            return (
              <div>
                <Button>查看详情</Button>
              </div>
            );
          }
        }],
        data: [
          {
            key: 1,
            name: 'John Brown sr.',
            handle: 'toggle',
          },
          {
            key: 2,
            name: 'Joe Black',
            handle: 'toggle'
          }
        ],
        columns1: [{
          title: '信息',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '上架时间',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '供应商',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '包年总价',
          key: 'tags',
          dataIndex: 'tags'
        },
        {
          title: '操作',
          key: 'handle',
          dataIndex: 'handle',
          render(text) {
            return (
              <div>
                <Button>查看详情</Button>
              </div>
            );
          }
        }]
      };
  }

  handleClick = (e) => {
    console.log('this is:', this);
  }

  setPwdModalVisible(isShowPwdModal) {
    this.setState({ isShowPwdModal });
  }

  onChangeRangePicker(date, dateString) {
    console.log(date, dateString);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({ isShowPwdModal: false });
    window.$utils.showMessage('error', 'error', '-1');
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
  }

  render() {
    return (
      <div>
        <div>
          <Tabs defaultActiveKey="1" className="lh60 fs14 bold szx-tabs">
              <Tabs.TabPane tab="API包" key="1">
                <Row className="p20 bgfff b bt0">
                  <Col span={4}>
                    <Button>取消收藏</Button>
                  </Col>
                  <Col span={12}>
                    <span className="fc999 mr10">收藏时间：</span>
                    <DatePicker.RangePicker style={{width: 200}} />
                  </Col>
                  <Col span={8}>
                    <Input.Search
                      placeholder="输入搜索关键字，如API名称"
                      onSearch={value => console.log(value)}
                      enterButton
                    />
                  </Col>
                </Row>

                <div className="borderShadow mt20">
                  <Table rowSelection={rowSelection} columns={this.state.columns1} dataSource={this.state.data} pagination={{size: 'small'}} className="szx-ant-table-pagination" />
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="API" key="2">
                <Row className="p20 bgfff b bt0">
                  <Col span={16}>
                    <span className="mlr20">提供方式</span>
                    <Select defaultValue="lucy" style={{ width: 160 }}>
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">近一个月</Select.Option>
                      <Select.Option value="disabled" disabled>Disabled</Select.Option>
                      <Select.Option value="Yiminghe">yiminghe</Select.Option>
                    </Select>
                  </Col>
                  <Col span={8}>
                    <Input.Search
                      placeholder="输入搜索关键字，如API名称"
                      onSearch={value => console.log(value)}
                      enterButton
                    />
                  </Col>
                </Row>

                <div className="borderShadow mt20">
                  <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} pagination={{size: 'small'}} className="szx-ant-table-pagination" />
                </div>
              </Tabs.TabPane>
            </Tabs>
        </div>
      </div>
    );
  }
}

export default Collect;
