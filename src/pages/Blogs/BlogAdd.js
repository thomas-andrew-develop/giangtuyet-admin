import React from 'react';
import { Row, Col, Button, Checkbox, Form, Input, Select } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

function BlogAdd() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
    form.resetFields();
  };

  return (
    <Form
      name="form-blog"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={onFinish}
      autoComplete="off"
      form={form}
      initialValues={{
        remember: true,
        status: 'Public',
      }}
    >
      <Row gutter={32}>
        <Col className="gutter-row" span={14}>
          <Form.Item
            className="form-control"
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: 'Please input your title!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="form-control"
            label="Slug"
            name="slug"
            rules={[
              {
                required: true,
                message: 'Please input your slug!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="form-control"
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please input your description!',
              },
            ]}
          >
            <TextArea rows={10} />
          </Form.Item>

          <Form.Item
            className="form-control"
            label="Excerpt"
            name="excerpt"
            rules={[
              {
                required: true,
                message: 'Please input your description!',
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={10}>
          <Form.Item name="status" label="Status" className="form-control">
            <Select>
              <Option value="Public">Public</Option>
              <Option value="Pending">Pending</Option>
            </Select>
          </Form.Item>

          <Form.Item name="categories" label="Categories" className="form-control">
            <Checkbox.Group>
              <Checkbox value="A" style={{ lineHeight: '32px' }}>
                F
              </Checkbox>
              <Checkbox value="B" style={{ lineHeight: '32px' }}>
                F
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            className="form-control"
            label="Image Featured"
            name="image"
            rules={[
              {
                required: true,
                message: 'Please input your image link!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="form-control" label="Sticky" name="sticky" valuePropName="checked">
            <Checkbox>Sticky</Checkbox>
          </Form.Item>
          <Button type="primary" htmlType="submit" size="large" className="mt-20 w-100-percent">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default BlogAdd;
