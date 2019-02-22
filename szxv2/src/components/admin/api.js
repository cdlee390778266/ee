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

class Api extends Component {

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
          title: 'API包名称',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '接口',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '接口名称',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '提供方式',
          key: 'tags',
          dataIndex: 'tags'
        },
        {
          title: '付费模式',
          key: 'action'
        },
        {
          title: '付费单价',
          key: 'action1'
        },
        {
          title: '授权到期日',
          key: 'action2'
        },
        {
          title: '操作',
          key: 'handle',
          dataIndex: 'handle',
          render(text) {
            return (
              <div>
                { text == 'toggle' ? (<Icon type="down" />) : (<Button>API详情</Button>) }
              </div>
            );
          }
        }],
        data: [
          {
            key: 1,
            name: 'John Brown sr.',
            handle: 'toggle',
            children: [
              {
                key: 11,
                name: 'John Brown',
                age: 42,
                address: 'New York No. 2 Lake Park',
              },
              {
                key: 12,
                name: 'John Brown jr.',
                age: 30,
                address: 'New York No. 3 Lake Park'
              },
              {
                key: 13,
                name: 'Jim Green sr.',
                age: 72,
                address: 'London No. 1 Lake Park'
              }
            ],
          },
          {
            key: 2,
            name: 'Joe Black',
            handle: 'toggle'
          }
        ]
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
            <Tabs.TabPane tab="全部" key="1">
              <Row className="p20 bgfff b bt0">
                <Col span={16}>
                  <span className="mr20">提供方式</span>
                  <Select defaultValue="lucy" style={{ width: 160 }}>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">近一个月</Select.Option>
                    <Select.Option value="disabled" disabled>Disabled</Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                  </Select>
                  <span className="mlr20">付费模式</span>
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
              <Tabs.TabPane tab="可使用" key="2">
                <Row className="p20 bgfff b bt0">
                  <Col span={16}>
                    <Button>续费</Button>
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
              </Tabs.TabPane>
              <Tabs.TabPane tab="快到期" key="3">
                <Row className="p20 bgfff b bt0">
                  <Col span={16}>
                    <Button>续费</Button>
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
              </Tabs.TabPane>
              <Tabs.TabPane tab="已过期" key="4">
                <Row className="p20 bgfff b bt0">
                  <Col span={16}>
                    <Button>重新购买</Button>
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
              </Tabs.TabPane>
              <Tabs.TabPane tab="赞过的API" key="5">
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
              </Tabs.TabPane>
            </Tabs>
        </div>
      </div>
    );
  }
}

export default Api;
