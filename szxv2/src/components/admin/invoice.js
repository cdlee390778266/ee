import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col, Button, Modal, Form, Input, Radio, DatePicker, Table, Tabs, Icon, Tag } from 'antd';

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

class Invoice extends Component {

  constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        addType: 1,
        columns: [{
          title: '订单时间',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '订单编号',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '发票类型',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '发票内容',
          key: 'tags',
          dataIndex: 'tags'
        },
        {
          title: '发票金额',
          key: 'action',
          render(text) {
            return (
              <div>
                <span className="fce4bc18">8888.00</span>
              </div>
            );
          }
        },
        {
          title: '状态',
          key: 'handle',
          dataIndex: 'handle',
          render(text) {
            return (
              <div>
                <span className="fcea2727">已开</span>
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

  onAddTypeChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      addType: e.target.value,
    });
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
        <div className="">
          <Tabs defaultActiveKey="1" className="lh60 fs14 szx-tabs">
              <Tabs.TabPane tab="我的发票" key="1">
                <div className="plr20 ptb40 fs12 fcdc9d16 bgfff bt0 b">
                  <p className="bold fcba8513 fs14">温馨提示：</p>
                  <p>1、本页面仅记录在线支付时选中开发票的订单，开票信息不可更改：</p>
                  <p>2、线下付款的订单本页面支持开发票</p>
                  <p>3、其他注意事项</p>
                  <p>4、其他注意事项</p>
                </div>

                <div className="mt20">
                  选择时间：<DatePicker.RangePicker style={{width: 300}} className="ml20" />
                </div>
                <div className="borderShadow mt20">
                  <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} pagination={{size: 'small'}} className="szx-ant-table-pagination" pagination={false} />
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="发票模板" key="2">
                <div className="ptb10">
                  <span className="fs14 fc333 lh20 overflowHidden">发票模板信息</span>
                  <Button type="primary" className="fr">新增发票模板</Button>
                </div>
                <div className="invoice-box">
                  <div className="invoice-item borderShadow p10 mt10">
                    <div className="invoiceItem-title">
                      <Button type="primary" size="small">默认模板</Button>
                      <Icon type="close"  className="fr fs30 fc999"/>
                    </div>
                    <div className="invoiceItem-body fc333 fs12">
                      <Row>
                        <Col span={24}>
                          <Row className="mt10 lh30">
                            <Col span={6} className="tr">
                              单位名称：
                            </Col>
                            <Col span={18}>
                              创世纪环球有限公司
                            </Col>
                            <Col span={6} className="tr">
                              纳税人识别号：
                            </Col>
                            <Col span={18}>
                              1155 565652. 222
                            </Col>
                            <Col span={6} className="tr">
                              收票人手机：
                            </Col>
                            <Col span={18}>
                              1362656563
                            </Col>
                            <Col span={6} className="tr">
                              收票人邮箱：
                            </Col>
                            <Col span={18}>
                              1362656563
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                    <div className="invoiceItem-foot tr mt20">
                      <Button>编辑</Button>
                    </div>
                  </div>
                  <div className="invoice-item borderShadow p10 mt10">
                    <div className="invoiceItem-title">
                      <Radio value={1} className="fc333"></Radio>
                      <Icon type="close"  className="fr fs30 fc999"/>
                    </div>
                    <div className="invoiceItem-body fc333 fs12">
                      <Row>
                        <Col span={12}>
                          <Row className="mt10 lh30">
                            <Col span={12} className="tr">
                              单位名称：
                            </Col>
                            <Col span={12}>
                              创世纪环球有限公司
                            </Col>
                            <Col span={12} className="tr">
                              纳税人识别号：
                            </Col>
                            <Col span={12}>
                              1155 565652. 222
                            </Col>
                            <Col span={12} className="tr">
                              收票人手机：
                            </Col>
                            <Col span={12}>
                              1362656563
                            </Col>
                            <Col span={12} className="tr">
                              收票人邮箱：
                            </Col>
                            <Col span={12}>
                              1362656563
                            </Col>
                          </Row>
                        </Col>
                        <Col span={12}>
                          <Row className="mt10 lh30">
                            <Col span={12} className="tr">
                              单位名称：
                            </Col>
                            <Col span={12}>
                              创世纪环球有限公司
                            </Col>
                            <Col span={12} className="tr">
                              纳税人识别号：
                            </Col>
                            <Col span={12}>
                              1155 565652. 222
                            </Col>
                            <Col span={12} className="tr">
                              收票人手机：
                            </Col>
                            <Col span={12}>
                              1362656563
                            </Col>
                            <Col span={12} className="tr">
                              收票人邮箱：
                            </Col>
                            <Col span={12}>
                              1362656563
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                    <div className="invoiceItem-foot tr mt20">
                      <Button type="primary" className="mr10">设为默认</Button>
                      <Button>编辑</Button>
                    </div>
                  </div>
                </div>

                <div className="borderShadow mb100">
                  <div className="invoice-box p10">
                    <div>
                      <Tag color="#ebc014" className="ptb10">普通发票</Tag>
                      <Tag color="#ebc014" className="ptb10">普通发票</Tag>
                    </div>
                    <Row className="mt20">
                      <Col span={24}>
                        <Form.Item
                          wrapperCol={{ span: 17, offset: 3 }}>
                          <Radio.Group onChange={this.onAddTypeChange} value={this.state.addType}>
                            <Radio value={1}>个人</Radio>
                            <Radio value={2}>公司</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Col>
                    </Row>
                    { this.state.addType == 1 ? (
                      <Row className="mt20">
                      <Col span={24}>
                        <Form.Item
                          label="发票抬头"
                          labelCol={{ span: 3 }}
                          wrapperCol={{ span: 8 }}>
                          <Input width="200" />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          label="发票人手机"
                          labelCol={{ span: 3 }}
                          wrapperCol={{ span: 8 }}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          label="收票人地址"
                          labelCol={{ span: 3 }}
                          wrapperCol={{ span: 8 }}>
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    ) : (
                    <Row className="mt20">
                      <Col span={24}>
                        <Form.Item
                          label="发票抬头"
                          labelCol={{ span: 3 }}
                          wrapperCol={{ span: 8 }}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          label="纳税人识别号"
                          labelCol={{ span: 3 }}
                          wrapperCol={{ span: 8 }}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          label="收票人地址"
                          labelCol={{ span: 3 }}
                          wrapperCol={{ span: 8 }}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          label="收票人手机"
                          labelCol={{ span: 3 }}
                          wrapperCol={{ span: 8 }}>
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    )
                  }
                  </div>
                  <Row className="pb10 pb40">
                    <Col span={21} offset={3}>
                      <Button type="primary" className="mr20">保存</Button>
                      <Button>取消</Button>
                    </Col>
                  </Row>

                  <Row className="mt20">
                    <Col span={24}>
                      <Form.Item
                        label="名称"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 8 }}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="纳税人识别号"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 8 }}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="地址"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 8 }}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="公司电话"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 8 }}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="开户行"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 8 }}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="账号"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 8 }}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="收票人姓名"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 8 }}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="收票人手机"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 8 }}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="收票人电话"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 8 }}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="收票人地址"
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 8 }}>
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Tabs.TabPane>
            </Tabs>
        </div>
      </div>
    );
  }
}

export default Invoice;
