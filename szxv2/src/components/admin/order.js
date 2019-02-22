import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col, Button, Modal, Form, Input, DatePicker, Table, Divider, Select, Tabs, Icon, Checkbox, Breadcrumb } from 'antd';

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
        isShowBuyModal: false,
      };
  }

  handleClick = (e) => {
    console.log('this is:', this);
  }

  setBuyModalVisible(isShowDelPwdModal) {
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

  render() {
    return (
      <div className="wrapper">
        <div className="borderShadow mt20 cProduct fs12 fc333">
          <div className="p10 fs14 fc333">
            <NavLink to="/admin/cart" className="fc333">我的购物车</NavLink> <i>></i><span> 订单确认</span>
          </div>
          <div>
            <Row className="p10 fs14 bb bgf7f9fc bbb1c9e2">
              <Col span={24}>
                <Checkbox className="bold">API接口名称1</Checkbox>
              </Col>
            </Row>
            <Row className="ptb20 plr10 bb">
              <Col span={4}>
                <Checkbox >API接口名称1</Checkbox>
              </Col>
              <Col span={4}>
                ￥9.0深币/次
              </Col>
              <Col span={4}>
                ￥9.0深币/次
              </Col>
              <Col span={8}>
                ￥9.0深币/次
              </Col>
              <Col span={4} className="fcebc014 bold">
                ￥9.0深币
              </Col>
            </Row>
            <Row className="ptb20 plr10">
              <Col span={4}>
                <Checkbox >API接口名称1</Checkbox>
              </Col>
              <Col span={4}>
                ￥9.0深币/次
              </Col>
              <Col span={4}>
                ￥9.0深币/次
              </Col>
              <Col span={8}>
                ￥9.0深币/次
              </Col>
              <Col span={4} className="fcebc014 bold">
                ￥9.0深币
              </Col>
            </Row>
          </div>
          <div>
            <Row className="p10 fs14 bb bgf7f9fc bbb1c9e2">
              <Col span={24}>
                <Checkbox className="bold">API接口名称1</Checkbox>
              </Col>
            </Row>
            <Row className="ptb20 plr10 bb">
              <Col span={4}>
                <Checkbox >API接口名称1</Checkbox>
              </Col>
              <Col span={4}>
                ￥9.0深币/次
              </Col>
              <Col span={4}>
                ￥9.0深币/次
              </Col>
              <Col span={8}>
                ￥9.0深币/次
              </Col>
              <Col span={4} className="fcebc014 bold">
                ￥9.0深币
              </Col>
            </Row>
            <Row className="ptb20 plr10">
              <Col span={4}>
                <Checkbox >API接口名称1</Checkbox>
              </Col>
              <Col span={4}>
                ￥9.0深币/次
              </Col>
              <Col span={4}>
                ￥9.0深币/次
              </Col>
              <Col span={8}>
                ￥9.0深币/次
              </Col>
              <Col span={4} className="fcebc014 bold">
                ￥9.0深币
              </Col>
            </Row>
          </div>
        </div>
        <div className="borderShadow mtb20 cProduct fs12 fc333">
          <Row className="p10 fs14">
            <Col span={24} className="tr fs12">
              合计：<span className="bold fs24 fcdb4858">9999.0</span> 深币
              <Button className="plr20 ml20" onClick={() => this.setBuyModalVisible(true)}>购买</Button>
            </Col>
          </Row>
        </div>

        <Modal
          title="余额不足提示"
          centered
          width="400px"
          className="tl"
          footer={null}
          visible={this.state.isShowDelPwdModal}
          onOk={() => this.setBuyModalVisible(false)}
          onCancel={() => this.setBuyModalVisible(false)}
        >
          <div className="fs12 fc333">你的账户余额不足，应付168.00深币，账户余额99.00深币，请立即前往充值</div>
          <div className="mt20 fs16">补差充值金额：<span className="fcdb4858">69.00深币</span></div>
          <div className="mtb10"><Button>去充值</Button></div>
        </Modal>
      </div>
    );
  }
}

export default Cart;
