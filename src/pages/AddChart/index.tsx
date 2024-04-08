import { genChartByAiUsingPost } from '@/services/edzbi/chartController';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Form, Input, Row, Select, Space, Upload, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import ReactECharts from 'echarts-for-react';
import React, { useState } from 'react';

/**
 * 添加图表页面
 * @returns
 */
const AddChart: React.FC = () => {
  const [chart, setChart] = useState<API.BiResponse>();
  const [option, setOption] = useState<any>();
  const [submitting, setSubmitting] = useState<boolean>(false);
  /**
   * 提交
   * @param values
   */
  const onFinish = async (values: any) => {
    // 避免重复提交
    if (submitting) {
      return;
    }
    setSubmitting(true);
    // todo 对接后端，上传数据
    const params = {
      ...values,
      file: undefined,
    };
    try {
      const res = await genChartByAiUsingPost(params, '', values.file.file.originFileObj);
      console.log(res);
      if (!res.data) {
        message.error('分析失败');
      } else {
        message.success('分析成功');
        const chartOption = JSON.parse(res.data.genChart ?? '');
        if (!chartOption) {
          throw new Error('图表代码解析失败');
        } else {
          setChart(res.data);
          setOption(chartOption);
        }
      }
    } catch (e: any) {
      message.error('分析失败: ', e.message);
    }
    setSubmitting(false);
  };
  return (
    <div className="add-chart">
      <Card title="🤖 | 分析">
        <Form
          name="add-chart"
          labelAlign="left"
          labelCol={{ span: 2 }}
          onFinish={onFinish}
          initialValues={{}}
        >
          <Form.Item
            name="goal"
            label="分析目标"
            rules={[{ required: true, message: '请输入分析目标！' }]}
          >
            <TextArea placeholder="请输入分析目标，比如：分析用户增长趋势" />
          </Form.Item>
          <Form.Item name="name" label="图表名称">
            <Input placeholder="请输入图表名称，比如：用户增长表" />
          </Form.Item>
          <Form.Item name="chartType" label="图表类型">
            <Select
              placeholder="请选择图表类型"
              options={[
                { value: '折线图', label: '折线图' },
                { value: '柱状图', label: '柱状图' },
                { value: '饼图', label: '饼图' },
                { value: '雷达图', label: '雷达图' },
                { value: '散点图', label: '散点图' },
              ]}
            ></Select>
          </Form.Item>

          <Form.Item name="file" label="原始数据">
            <Upload name="file" listType="picture">
              <Button icon={<UploadOutlined />}>点击上传 CSV 文件</Button>
            </Upload>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 2 }}>
            <Space>
              <Button type="primary" htmlType="submit" loading={submitting} disabled={submitting}>
                生成 🚀
              </Button>
              <Button htmlType="reset">重置 🔨</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
      <Divider type="vertical" />
      <Row gutter={24}>
        <Col span={12}>
          <div>
            <Card title="📊 | 可视化" hoverable>
              {option && <ReactECharts option={option} />}
            </Card>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Card title="📝 | 结论" hoverable>
              {chart?.genResult}
            </Card>{' '}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AddChart;
