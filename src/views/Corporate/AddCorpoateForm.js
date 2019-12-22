import React from "react";
import {
  Form,
  Input,
  Modal,
  Select,
  Icon,
  InputNumber,
  Tooltip,
  Radio
} from "antd";
const Option = Select.Option;

const FormItem = Form.Item;

export default Form.create()(
  class ImportMediaForm extends React.Component {
    static defaultProps = {};

    onCancel = () => {
      this.props.onCancel();
    };

    onOk = () => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.props.onOk(values);
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 15 }
      };
      const onlyNumbers = (rule, value, callback) => {
        if (!value || !isNaN(value)) {
          callback("Numbers only please");
        } else {
          callback();
        }
        console.log(value, "we are here");
        if (!value || !isNaN(value)) {
          callback();
          return;
        }
        callback("Numbers only please");
      };

      let FormItems = (
        <Form>
          <FormItem {...formItemLayout} label="Corporate Name">
            {getFieldDecorator("corporateName", {
              rules: [
                { required: true, message: "Please Write Corporate Name!" }
              ]
            })(<Input placeholder="Corporate Name" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Country">
            {getFieldDecorator("corporateCountry", {
              rules: [
                { required: true, message: "Please Write Corporate Country!" }
              ]
            })(<Input placeholder="Corporate Country" />)}
          </FormItem>

          <FormItem {...formItemLayout} label="City">
            {getFieldDecorator("corporateCity", {
              rules: [
                { required: true, message: "Please Write Corporate City!" }
              ]
            })(<Input placeholder="Corporate City" />)}
          </FormItem>

          <FormItem {...formItemLayout} label="Address">
            {getFieldDecorator("corporateAddress", {
              rules: [
                { required: true, message: "Please Write Corporate Address!" }
              ]
            })(<Input placeholder="Corporate Address" />)}
          </FormItem>
          <Form.Item {...formItemLayout} label="Posal Code">
            {getFieldDecorator("corporatePostalCode", {
              rules: [
                { required: true, message: "Please input your postal code!" },
                { validator: onlyNumbers }
              ]
            })(<InputNumber />)}
          </Form.Item>
          <FormItem {...formItemLayout} label="VRAM/instance (GB)">
            {getFieldDecorator("gpu_memory", {
              initialValue: 1
            })(<InputNumber />)}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={
              <span>
                Processing&nbsp;
                <Tooltip
                  title={
                    <span>
                      <p>Performance: faster processing </p>
                      <p> Quality: accurate processing</p>
                    </span>
                  }
                >
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator("compress", {
              initialValue: false
            })(
              <Radio.Group>
                <Radio value={false}>Quality</Radio>
                <Radio value={true}>Perfomance</Radio>
              </Radio.Group>
            )}
          </FormItem>
        </Form>
      );
      return (
        <Modal {...this.props} onCancel={this.onCancel} onOk={this.onOk}>
          {FormItems}
        </Modal>
      );
    }
  }
);
