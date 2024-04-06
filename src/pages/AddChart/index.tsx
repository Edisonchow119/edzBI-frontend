import { genChartByAiUsingPost } from '@/services/edzbi/chartController';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space, Upload, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

/**
 * 添加图表页面
 * @returns
 */
const AddChart: React.FC = () => {
  /**
   * 提交
   * @param values
   */
  const onFinish = async (values: any) => {
    // console.log('表单内容: ', values);
    // todo 对接后端，上传数据
    const params = {
      ...values,
      file: undefined,
    };
    try {
      const res = await genChartByAiUsingPost(params, '', values.file.file.originFileObj);
      console.log(res);
      message.success('分析成功');
    } catch (e: any) {
      message.error('分析失败: ', e.message);
    }
  };
  return (
    <div className="add-chart">
      <Form name="add-chart" onFinish={onFinish} initialValues={{}}>
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

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddChart;
