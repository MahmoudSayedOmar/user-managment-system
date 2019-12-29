import React from "react";
import {
  Form,
  Input,
  Modal,
  Upload,
  Button,
  Icon,
  Radio,
  DatePicker
} from "antd";
// const Option = Select.Option;
import moment from "moment";
const FormItem = Form.Item;

export default Form.create()(
  class ImportMediaForm extends React.Component {
    static defaultProps = {};

    onCancel = () => {
      this.props.onCancel();
    };

    onOk = () => {
      this.props.form.validateFields((err, values) => {
        console.log(values, "values");
        if (!err) {
          // this.props.onOk(values);
        }
      });
    };
    normFile = e => {
      console.log("Upload event:", e);
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
          {getFieldDecorator("key")(<Input type="hidden" />)}
          {getFieldDecorator("corporateActive")(<Input type="hidden" />)}

          <FormItem {...formItemLayout} label="First Name">
            {getFieldDecorator("userFirstName", {
              rules: [{ required: true, message: "Please Write First Name!" }]
            })(<Input placeholder="First Name" />)}
          </FormItem>

          <FormItem {...formItemLayout} label="Middle Name">
            {getFieldDecorator("userMiddletName", {
              rules: [{ required: true, message: "Please Write Middle Name!" }]
            })(<Input placeholder="Middle Name" />)}
          </FormItem>

          <FormItem {...formItemLayout} label="Last Name">
            {getFieldDecorator("userLastName", {
              rules: [{ required: true, message: "Please Write Last Name!" }]
            })(<Input placeholder="Last Name " />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Date Of Birth">
            {getFieldDecorator("userDOB", {
              rules: [
                { required: true, message: "Please Choose a date of birth" }
              ]
            })(<DatePicker defaultValue={moment()} format="DD/MM/YYYY" />)}
          </FormItem>

          <FormItem {...formItemLayout} label="Gender">
            {getFieldDecorator("userGender", {
              rules: [{ required: true, message: "Please Choose a Gender" }]
            })(
              <Radio.Group>
                <Radio value="male">male</Radio>
                <Radio value="female">female</Radio>
              </Radio.Group>
            )}
          </FormItem>

          <FormItem {...formItemLayout} label="Email-Address">
            {getFieldDecorator("userEmail", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            })(<Input placeholder="E-mail Address" />)}
          </FormItem>

          <Form.Item {...formItemLayout} label="Mobile Number">
            {getFieldDecorator("userMobile", {
              rules: [
                { required: true, message: "Please Enter Phone Number!" },
                { validator: onlyNumbers }
              ]
            })(<Input placeholder="Phone Number" />)}
          </Form.Item>

          <FormItem {...formItemLayout} label="Validation By">
            {getFieldDecorator("userGeuserValidationTypender", {
              rules: [
                { required: true, message: "Please choose validation Type" }
              ]
            })(
              <Radio.Group>
                <Radio value="sms">SMS</Radio>
                <Radio value="mail">E-Mail</Radio>
              </Radio.Group>
            )}
          </FormItem>

          <Form.Item {...formItemLayout} label="Photo">
            {getFieldDecorator("upload", {
              // rules: [{ required: true }],
              valuePropName: "fileList",
              getValueFromEvent: this.normFile
            })(
              <Upload name="userPhoto" action="/upload.do" listType="picture">
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
