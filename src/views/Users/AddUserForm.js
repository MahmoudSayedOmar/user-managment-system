import React from "react";
import {
  Form,
  Input,
  Modal,
  Upload,
  Button,
  Icon,
  Radio,
  DatePicker,
  Select
} from "antd";

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
      const Option = Select.Option;
      const { getFieldDecorator, getFieldValue } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 15 }
      };
      let corporates = this.props.allCoporates.map(eachCoporate => (
        <Option key={eachCoporate.id} value={eachCoporate.id}>
          {eachCoporate.corporateName}
        </Option>
      ));

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
          <FormItem style={{ display: "none" }}>
            {getFieldDecorator("id")(<Input type="hidden" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="First Name">
            {getFieldDecorator("fName", {
              rules: [{ required: true, message: "Please Write First Name!" }]
            })(<Input placeholder="First Name" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Middle Name">
            {getFieldDecorator("mName", {
              rules: [{ required: true, message: "Please Write Middle Name!" }]
            })(<Input placeholder="Middle Name" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Last Name">
            {getFieldDecorator("lName", {
              rules: [{ required: true, message: "Please Write Last Name!" }]
            })(<Input placeholder="Last Name" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Date Of Birth">
            {getFieldDecorator("dateOfBirth", {
              rules: [
                {
                  required: true,
                  message: "Please Choose a date of birth"
                }
              ]
            })(<DatePicker format="MM/DD/YYYY" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Gender">
            {getFieldDecorator("sex", {
              rules: [{ required: true, message: "Please Choose a Gender" }]
            })(
              <Radio.Group>
                <Radio value="male">male</Radio>
                <Radio value="female">female</Radio>
              </Radio.Group>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Email-Address">
            {getFieldDecorator("email", {
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
            {getFieldDecorator("mobileNumber", {
              rules: [
                { required: true, message: "Please Enter Phone Number!" },
                { validator: onlyNumbers }
              ]
            })(<Input placeholder="Mobile Number" />)}
          </Form.Item>
          <FormItem {...formItemLayout} label="Validation By">
            {getFieldDecorator("validateBy", {
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
          <Form.Item {...formItemLayout} label="Default Language">
            {getFieldDecorator("defaultLanguage", {
              rules: [
                { required: true, message: "Please select default Language!" }
              ]
            })(
              <Select
                placeholder="default Language"
                // onChange={this.handleSelectChange}
              >
                <Option value="english">English</Option>
                <Option value="arabic">Arabic</Option>
              </Select>
            )}
          </Form.Item>
          {/* <Form.Item {...formItemLayout} label="Choose Coporate">
            {getFieldDecorator("corporate", {
              rules: [{ required: true, message: "Please choose a coporate!" }]
            })(<Select placeholder="Choose Corporate">{corporates}</Select>)}
          </Form.Item> */}

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

          {getFieldValue("imageURL") && getFieldValue("imageURL") !== "" ? (
            <Form.Item {...formItemLayout}>"image url"</Form.Item>
          ) : (
            ""
          )}
          <FormItem style={{ display: "none" }}>
            {getFieldDecorator("imageURL")(<Input type="hidden" />)}
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
