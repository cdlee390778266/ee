import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col, Button, TreeSelect, Table } from 'antd';

import echarts from 'echarts';

import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import face from '../../assets/images/face.png'

class Capital extends Component {

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
          title: '时间',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '使用情况',
          dataIndex: 'age',
          key: 'age',
        }],
        data: [
          {
            key: '1',
            age: 32,
            name: 1111
          },
          {
            key: '2',
            age: 32,
            name: 1111
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

  componentDidMount() {
    var base = +new Date(2016, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var valueBase = Math.random() * 300;
    var valueBase2 = Math.random() * 50;
    var data = [];
    var data2 = [];

    for (var i = 1; i < 10; i++) {
        var now = new Date(base += oneDay);
        var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');

        valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
        valueBase <= 0 && (valueBase = Math.random() * 300);
        data.push([dayStr, valueBase]);

        valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
        valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
        data2.push([dayStr, valueBase2]);
    }

    var option = {
        animation: false,
        title: {
            left: 'center',
            text: '触屏 tooltip 和 dataZoom 示例',
            subtext: '"tootip" and "dataZoom" on mobile device',
        },
        legend: {
            top: 'bottom',
            data:['意向']
        },
        tooltip: {
            triggerOn: 'none',
            position: function (pt) {
                return [pt[0], 130];
            }
        },
        toolbox: {
            left: 'center',
            itemSize: 25,
            top: 55,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {}
            }
        },
        xAxis: {
            type: 'time',
            // boundaryGap: [0, 0],
            axisPointer: {
                value: '2016-10-7',
                snap: true,
                lineStyle: {
                    color: '#004E52',
                    opacity: 0.5,
                    width: 2
                },
                label: {
                    show: true,
                    formatter: function (params) {
                        return echarts.format.formatTime('yyyy-MM-dd', params.value);
                    },
                    backgroundColor: '#004E52'
                },
                handle: {
                    show: true,
                    color: '#004E52'
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                inside: true
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                inside: true,
                formatter: '{value}\n'
            },
            z: 10
        },
        grid: {
            top: 110,
            left: 15,
            right: 15,
            height: 160
        },
        dataZoom: [{
            type: 'inside',
            throttle: 50
        }],
        series: [
            {
                name:'模拟数据',
                type:'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: '#8ec6ad'
                    }
                },
                stack: 'a',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#8ec6ad'
                        }, {
                            offset: 1,
                            color: '#ffe'
                        }])
                    }
                },
                data: data
            },
            {
                name:'模拟数据',
                type:'line',
                smooth:true,
                stack: 'a',
                symbol: 'circle',
                symbolSize: 5,
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: '#d68262'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#d68262'
                        }, {
                            offset: 1,
                            color: '#ffe'
                        }])
                    }
                },
                data: data2
            }

        ]
    };
    echarts.init(document.getElementById('chart')).setOption(option);
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24} className="lh60 pl20 fs14 fc004ea1 bold">
            订单列表
          </Col>
          <Col span={24}>
            <Row className="fc333 fs14">
              <Col span={8}>
                <span className="pl20">请选择：</span>
                <TreeSelect
                  showSearch
                  style={{ width: 120 }}
                  value={this.state.value}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  placeholder="Please select"
                  allowClear
                  treeDefaultExpandAll
                  onChange={this.onChange}
                >
                  <TreeSelect.TreeNode value="parent 1" title="parent 1" key="0-1">
                    <TreeSelect.TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                      <TreeSelect.TreeNode value="leaf1" title="my leaf" key="random" />
                      <TreeSelect.TreeNode value="leaf2" title="your leaf" key="random1" />
                    </TreeSelect.TreeNode>
                    <TreeSelect.TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                      <TreeSelect.TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                    </TreeSelect.TreeNode>
                  </TreeSelect.TreeNode>
                </TreeSelect>
              </Col>
              <Col span={8} className="tc szx-tab">
                <span className="active">当日</span>
                <span>近一月</span>
              </Col>
              <Col span={8} className="tr">
                <span className="mr20 fc999">2018-11-19</span>
                <Button.Group className="mr10">
                  <Button>
                    表格
                  </Button>
                  <Button>
                    图表
                  </Button>
                </Button.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="borderShadow mt20">
          <Table columns={this.state.columns} dataSource={this.state.data} pagination={{size: 'small'}} className="szx-ant-table-pagination tc" />
          <div className="p20"><div id="chart" style={{width: '100%', height: 600}}></div></div>
        </div>
      </div>
    );
  }
}

export default Capital;
