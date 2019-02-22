import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col, Button, Modal, Form, Input, Select, Search, DatePicker, Table, Divider, Tag } from 'antd';

import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import face from '../../assets/images/face.png'

var that = null;
class Capital extends Component {
  constructor(){
      super();
      that= this;
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        name:'Hello world!',
        msgModalVisible: false,
        columns: [{
          title: '消息名称',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '消息摘要',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '消息类型',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '发布时间',
          key: 'tags',
          dataIndex: 'tags'
        },
        {
          title: '状态',
          key: 'action',
          render(text) {
            return (
                <div>
                  <span className="fc004ea1" onClick={() => that.setMsgModalVisible(true)}>未读</span>
                  <span className="fcc6dff8">未读</span>
                </div>
              )
          }
        }],
        data: [{
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        }, {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        }, {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        }]
      };
  }

  handleClick = (e) => {
    console.log('this is:', this);
  }

  setMsgModalVisible(msgModalVisible) {
    this.setState({ msgModalVisible });
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
        <Row>
          <Col span={24}>
            <Row className="ml10 mt10">
              <Col span={16}>
                类型：
              <Select defaultValue="lucy" style={{ width: 120 }} className="ml10">
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
          </Col>
        </Row>
        <div className="borderShadow mt20">
          <Table columns={this.state.columns} dataSource={this.state.data} pagination={{size: 'small'}} className="szx-ant-table-pagination" />
        </div>

        <Modal
          centered
          footer={null}
          visible={this.state.msgModalVisible}
          onOk={() => this.setMsgModalVisible(false)}
          onCancel={() => this.setMsgModalVisible(false)}
        >
          <p className="fc333 fs16 mt40">
            2017年春节放假通知 <br />
            <span className="fc999 fs12">2018.10.20</span>
          </p>
          <p className="tl fc333 fs12 lh26">
            2017年春节放假通知 <br />
            放假时间：2017年1月27日(星期五，农历除夕)至2017年2月2日(星期四)，共7天为放假时间<br />
            备注：放假期间无法使用接口
          </p>
        </Modal>
      </div>
    );
  }
}

export default Capital;
