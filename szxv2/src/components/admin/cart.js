import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col, Button, Modal, Form, Input, DatePicker, Table, Divider, Select, Tabs, Icon, Checkbox } from 'antd';

import Add from '../../assets/images/add.png'
import Reduce from '../../assets/images/reduce.png'
import Img4 from '../../assets/images/img4.png'

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
  })
}

class Cart extends Component {

  constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        name:'Hello world!',
        isShowDelPwdModal: false,
      };
  }

  handleClick = (e) => {
    console.log('this is:', this);
  }

  setdelModalVisible(isShowDelPwdModal) {
    this.setState({ isShowDelPwdModal });
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

  jump = (e) => {
   this.props.history.push('/order')
  }

  render() {
    return (
      <div>
        <div>
          <Tabs defaultActiveKey="1" className="lh60 fs14 bold szx-tabs">
            <Tabs.TabPane tab="新商品" key="1">
              <Row className="plr20 ptb10 fs12 bgfff b bt0">
                <Col span={24} className="p10 bgfefdf6 fcdc9d16 bfcf4ea mb20">
                  <span className="mlr20">按次付费API变更为按时长计费。</span>
                </Col>
                <Col span={15} offset={4} className="mtb20">
                  <span className="mr20 fc999"><img src={Img4} alt="" className="mr10" style={{position: 'relative', top: -2}} />部分</span>
                  <span className="mr20">付费方式</span>
                  <Select defaultValue="lucy" style={{ width: 160 }}>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">近一个月</Select.Option>
                    <Select.Option value="disabled" disabled>Disabled</Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                  </Select>
                  <span className="ml40 numberHandle">
                    <strong><img src={Add} className="mr10" /></strong>
                    <Input style={{ width: 80 }} />
                    <strong><img src={Reduce} className="ml10" /></strong>
                    <span className="fc333 fs12 ml10">月</span>
                  </span>
                </Col>
              </Row>
              <div className="borderShadow mt20 cProduct fs12 fc333">
                <Row className="p10 fs14 bb bgf7f9fc bbb1c9e2">
                  <Col span={4}>
                    <Checkbox className="fc004ea1 bold">API接口名称1</Checkbox>
                    <Icon type="close-circle" className="fc999" />
                  </Col>
                  <Col span={20} className="tr">
                    (已选<span className="fc337ac4">2</span>个API接口) <Icon type="down" className="ml20 mr10 fc337ac4" />
                  </Col>
                </Row>
                <Row className="ptb20 plr10 bb">
                  <Col span={4}>
                    <Checkbox >API接口名称1</Checkbox>
                  </Col>
                  <Col span={3}>
                    <Checkbox >时长</Checkbox>
                  </Col>
                  <Col span={4}>
                    <Select defaultValue="lucy">
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">近一个月</Select.Option>
                      <Select.Option value="disabled" disabled>Disabled</Select.Option>
                      <Select.Option value="Yiminghe">yiminghe</Select.Option>
                    </Select>
                  </Col>
                  <Col span={3}>
                    ￥9.0深币/次
                  </Col>
                  <Col span={5}>
                    <span className="numberHandle">
                      <strong><img src={Add} className="mr10" /></strong>
                      <Input style={{ width: 80 }} />
                      <strong><img src={Reduce} className="ml10" /></strong>
                      <span className="fc333 fs12 ml10">月</span>
                    </span>
                  </Col>
                  <Col span={3} className="fcebc014 bold">
                    ￥9.0深币
                  </Col>
                  <Col span={2}>
                    <Button onClick={() => this.setdelModalVisible(true)}>删除</Button>
                  </Col>
                </Row>
                <Row className="ptb20 plr10">
                  <Col span={4}>
                    <Checkbox >API接口名称1</Checkbox>
                  </Col>
                  <Col span={3}>
                    <Checkbox >时长</Checkbox>
                  </Col>
                  <Col span={4}>
                    <Select defaultValue="lucy">
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">近一个月</Select.Option>
                      <Select.Option value="disabled" disabled>Disabled</Select.Option>
                      <Select.Option value="Yiminghe">yiminghe</Select.Option>
                    </Select>
                  </Col>
                  <Col span={3}>
                    ￥9.0深币/次
                  </Col>
                  <Col span={5}>
                    <span className="numberHandle">
                      <strong><img src={Add} className="mr10" /></strong>
                      <Input style={{ width: 80 }} />
                      <strong><img src={Reduce} className="ml10" /></strong>
                      <span className="fc333 fs12 ml10">月</span>
                    </span>
                  </Col>
                  <Col span={3} className="fcebc014 bold">
                    ￥9.0深币
                  </Col>
                  <Col span={2}>
                    <Button>删除</Button>
                  </Col>
                </Row>
              </div>
              <div className="borderShadow mt20 cProduct fs12 fc333">
                <Row className="p10 fs14 bb bgf7f9fc bbb1c9e2">
                  <Col span={4}>
                    <Checkbox className="fc004ea1 bold">API接口名称1</Checkbox>
                    <Icon type="close-circle" className="fc999" />
                  </Col>
                  <Col span={20} className="tr">
                    (已选<span className="fc337ac4">2</span>个API接口) <Icon type="down" className="ml20 mr10 fc337ac4" />
                  </Col>
                </Row>
                <Row className="ptb20 plr10 bb">
                  <Col span={4}>
                    <Checkbox >API接口名称1</Checkbox>
                  </Col>
                  <Col span={3}>
                    <Checkbox >时长</Checkbox>
                  </Col>
                  <Col span={4}>
                    <Select defaultValue="lucy">
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">近一个月</Select.Option>
                      <Select.Option value="disabled" disabled>Disabled</Select.Option>
                      <Select.Option value="Yiminghe">yiminghe</Select.Option>
                    </Select>
                  </Col>
                  <Col span={3}>
                    ￥9.0深币/次
                  </Col>
                  <Col span={5}>
                    <span className="numberHandle">
                      <strong><img src={Add} className="mr10" /></strong>
                      <Input style={{ width: 80 }} />
                      <strong><img src={Reduce} className="ml10" /></strong>
                      <span className="fc333 fs12 ml10">月</span>
                    </span>
                  </Col>
                  <Col span={3} className="fcebc014 bold">
                    ￥9.0深币
                  </Col>
                  <Col span={2}>
                    <Button>删除</Button>
                  </Col>
                </Row>
                <Row className="ptb20 plr10">
                  <Col span={4}>
                    <Checkbox >API接口名称1</Checkbox>
                  </Col>
                  <Col span={3}>
                    <Checkbox >时长</Checkbox>
                  </Col>
                  <Col span={4}>
                    <Select defaultValue="lucy">
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">近一个月</Select.Option>
                      <Select.Option value="disabled" disabled>Disabled</Select.Option>
                      <Select.Option value="Yiminghe">yiminghe</Select.Option>
                    </Select>
                  </Col>
                  <Col span={3}>
                    ￥9.0深币/次
                  </Col>
                  <Col span={5}>
                    <span className="numberHandle">
                      <strong><img src={Add} className="mr10" /></strong>
                      <Input style={{ width: 80 }} />
                      <strong><img src={Reduce} className="ml10" /></strong>
                      <span className="fc333 fs12 ml10">月</span>
                    </span>
                  </Col>
                  <Col span={3} className="fcebc014 bold">
                    ￥9.0深币
                  </Col>
                  <Col span={2}>
                    <Button>删除</Button>
                  </Col>
                </Row>
              </div>
              <div className="borderShadow mt20 cProduct fs12 fc333">
                <Row className="p10 fs14">
                  <Col span={12} className="bold">
                    <Checkbox className="bold" style={{width: 60}}>全选</Checkbox>
                    <span>已选商品</span>
                    <span className="ml10 fcebc014">2</span> 件
                  </Col>
                  <Col span={12} className="tr fs12">
                    合计：<span className="bold fs16 fcebc014">9999.0</span> 深币
                    <Button className="plr20 ml20" onClick={this.jump}>结算</Button>
                  </Col>
                </Row>
              </div>
            </Tabs.TabPane>
              <Tabs.TabPane tab="续费商品" key="2">
                <Row className="plr20 ptb10 fs12 bgfff b bt0">
                  <Col span={24} className="p10 bgfefdf6 fcdc9d16 bfcf4ea mb20">
                    <span className="mlr20">按次付费API变更为按时长计费。</span>
                  </Col>
                  <Col span={15} offset={4} className="mtb20">
                    <span className="mr20 fc999"><img src={Img4} alt="" className="mr10" style={{position: 'relative', top: -2}} />部分</span>
                    <span className="mr20">付费方式</span>
                    <Select defaultValue="lucy" style={{ width: 160 }}>
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">近一个月</Select.Option>
                      <Select.Option value="disabled" disabled>Disabled</Select.Option>
                      <Select.Option value="Yiminghe">yiminghe</Select.Option>
                    </Select>
                    <span className="ml40 numberHandle">
                      <strong><img src={Add} className="mr10" /></strong>
                      <Input style={{ width: 80 }} />
                      <strong><img src={Reduce} className="ml10" /></strong>
                      <span className="fc333 fs12 ml10">月</span>
                    </span>
                  </Col>
                </Row>
              </Tabs.TabPane>
            </Tabs>
        </div>

        <Modal
          title="提示"
          centered
          visible={this.state.isShowDelPwdModal}
          onOk={() => this.setdelModalVisible(false)}
          onCancel={() => this.setdelModalVisible(false)}
        >
          <p className="tc">确定要删除该商品吗？</p>
        </Modal>
      </div>
    );
  }
}

export default Cart;
