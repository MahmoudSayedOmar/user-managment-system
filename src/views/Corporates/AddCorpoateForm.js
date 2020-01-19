import React from "react";
import { Form, Input, Modal, Upload, Button, Icon } from "antd";

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
    normFile = e => {
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 15 }
      };

      const onlyNumbers = (rule, value, callback) => {
        if (value && isNaN(value)) {
          callback("Numbers Only Please");
          return;
        } else if (value && value < 0) {
          callback("it can't be negative number");
          return;
        } else {
          callback();
        }
      };
      let FormItems = (
        <Form>
          {getFieldDecorator("id")(<Input type="hidden" />)}

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
            })(<Input placeholder="Postal Code" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Phone Number">
            {getFieldDecorator("corporatePhoneNumber", {
              rules: [
                { required: true, message: "Please Enter Phone Number!" },
                { validator: onlyNumbers }
              ]
            })(<Input placeholder="Phone Number" />)}
          </Form.Item>
          <FormItem {...formItemLayout} label="Registration Number">
            {getFieldDecorator("corporateRegisterationNumber", {
              rules: [
                {
                  required: true,
                  message: "Please Enter Corporate Registeration Number!"
                }
              ]
            })(<Input placeholder="Registeration Number" />)}
          </FormItem>
          <Form.Item {...formItemLayout} label="Upload">
            {getFieldDecorator("upload", {
              // rules: [{ required: true }],
              valuePropName: "fileList",
              getValueFromEvent: this.normFile
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </Form.Item>
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
