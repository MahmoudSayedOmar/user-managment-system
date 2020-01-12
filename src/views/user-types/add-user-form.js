import React from "react";
import { Form, Input, Modal, Upload, Button, Icon } from "antd";
// const Option = Select.Option;

const FormItem = Form.Item;

export const AddUserTypeForm = Form.create()(
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

          <FormItem {...formItemLayout} label="User type Name">
            {getFieldDecorator("name", {
              rules: [
                { required: true, message: "Please Write User type Name!" }
              ]
            })(<Input placeholder="User type Name" />)}
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
