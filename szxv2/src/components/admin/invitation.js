import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col, Button, Form, Input, Table} from 'antd';

import Img5 from '../../assets/images/img5.png'
import QrCode from '../../assets/images/qr-code.png'

class Invitation extends Component {

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
          title: '会员昵称',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '时间',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '获得奖励',
          dataIndex: 'address',
          key: 'address',
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
        <div className="borderShadow p20">
          <Row>
            <Col span={18}>
              <Row className="mb10">
                <Col span={4} className="tr">
                我的推荐ID :
                </Col>
                <Col span={20}>
                  <div className="ml10">DEDGXSDREWQERD</div>
                </Col>
              </Row>
              <Row className="mb10">
                <Col span={4} className="tr">
                我的推荐ID :
                </Col>
                <Col span={20}>
                  <div className="ml10">
                    <Input style={{width: 400}} />
                    <Button className="ml10">复制</Button>
                  </div>
                </Col>
              </Row>
              <Row className="mb10">
                <Col span={4} className="tr">
                我的二维码 :
                </Col>
                <Col span={20}>
                  <div className="ml10">
                    <img src={QrCode} alt="" className="mt10 p10 b" />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={6} className="fc333 tc">
              <p>
                <img src={Img5} alt="" className="mtb10" /><br />
                已推荐朋友<br />
                <span className="fcfab256 fs30">12</span>
              </p>
              <p className="fs14">
                获得总次数：<span className="fs18 fce61c1c">36000</span> 赠送币
              </p>
            </Col>
          </Row>
        </div>
        <div className="mt20 fc004ea1">
          <span className="ml20 fs14 bold">我的邀请</span>
        </div>
        <div className="borderShadow mt20">
          <Table columns={this.state.columns} dataSource={this.state.data} pagination={{size: 'small'}} className="szx-ant-table-pagination" />
        </div>
      </div>
    );
  }
}

export default Invitation;
