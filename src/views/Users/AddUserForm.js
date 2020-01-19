import React, { Component } from "react";
import {
  Form,
  Input,
  Modal,
  Upload,
  Button,
  Icon,
  Radio,
  DatePicker,
  Select,
  TreeSelect
} from "antd";
import axios from "axios";
import { BASE_URL } from "../../http-client/constants";

const FormItem = Form.Item;
const { TreeNode } = TreeSelect;
export default Form.create()(
  class ImportMediaForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userRolesValues: ""
      };
    }

    static defaultProps = {};

    onCancel = () => {
      this.props.onCancel();
    };
    onChangeUserCorporate = value => {
      this.props.onChangeCorporate(value);
    };
    onChangeUserApplications = value => {
      if (value && value.length > 0) {
        this.props.onChangeApplications(value);
      }
    };
    onChangeUsersTypes = value => {
      if (value && value.length > 0) {
        this.props.onChangeTypes(value);
      }
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

      let corporatesOptions = this.props.allCoporates.map(eachCoporate => (
        <Option key={eachCoporate.id} value={eachCoporate.id}>
          {eachCoporate.name}
        </Option>
      ));
      let corporateApplicationsOptions = this.props.applicationsPortofolios.map(
        eachApp => (
          <Option key={eachApp.id} value={eachApp.id}>
            {eachApp.name}
          </Option>
        )
      );

      let userTypesOptions =
        this.props.form.getFieldValue("userApplications") &&
        this.props.form.getFieldValue("userApplications").length > 0
          ? this.props.form
              .getFieldValue("userApplications")
              .map((eachPorto, index) => {
                return (
                  <TreeNode
                    value={eachPorto}
                    title={
                      this.props.applicationsPortofolios.find(
                        m => m.id === eachPorto
                      ).name || null
                    }
                    key={index}
                    disabled={true}
                  >
                    {this.props.userTypes.map(eachType => {
                      return eachPorto === eachType.appPortoflioId ? (
                        <TreeNode
                          value={eachType.id}
                          title={eachType.name}
                          key={eachType.id}
                        />
                      ) : (
                        ""
                      );
                    })}
                  </TreeNode>
                );
              })
          : "";

      let userRolesValues =
        this.props.form.getFieldValue("userTypes") &&
        this.props.form.getFieldValue("userTypes").length > 0
          ? this.props.form
              .getFieldValue("userTypes")
              .map((eachUserType, index) => {
                return (
                  <TreeNode
                    value={eachUserType}
                    title={
                      this.props.userTypes.find(m => m.id === eachUserType)
                        .name || null
                    }
                    key={index}
                    disabled={true}
                  >
                    {this.props.userRoles.map(eachUserRole => {
                      return eachUserType === eachUserRole.userTypeId ? (
                        <TreeNode
                          value={eachUserRole.id}
                          title={eachUserRole.name}
                          key={eachUserRole.id}
                        />
                      ) : (
                        ""
                      );
                    })}
                  </TreeNode>
                );
              })
          : "";

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

      const confirmPassword = (rule, value, callback) => {
        callback();
        return;
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
              <Select placeholder="default Language">
                <Option value="english">English</Option>
                <Option value="arabic">Arabic</Option>
              </Select>
            )}
          </Form.Item>

          {!this.props.isEdit && (
            <Form.Item {...formItemLayout} label="Password">
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please Enter Password Number!" },
                  { validator: onlyNumbers }
                ]
              })(<Input placeholder="Password " />)}
            </Form.Item>
          )}
          {!this.props.isEdit && (
            <Form.Item {...formItemLayout} label="Confirm password">
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please re-enter Password Number!"
                  },
                  { validator: confirmPassword }
                ]
              })(<Input placeholder="Confirm Password" />)}
            </Form.Item>
          )}
          <Form.Item {...formItemLayout} label="Choose Coporate">
            {getFieldDecorator("userCoporate", {
              rules: [{ required: true, message: "Please choose a coporate!" }]
            })(
              <Select
                onChange={this.onChangeUserCorporate}
                placeholder="Choose Corporate"
              >
                {corporatesOptions}
              </Select>
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Choose App. Portofilio">
            {getFieldDecorator(
              "userApplications",
              {}
            )(
              <Select
                mode="multiple"
                placeholder="Choose Applications"
                onChange={this.onChangeUserApplications}
              >
                {corporateApplicationsOptions}
              </Select>
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="User Types">
            {getFieldDecorator(
              "userTypes",
              {}
            )(
              <TreeSelect
                showSearch
                style={{ width: "100%" }}
                value={this.state.value}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                placeholder="Choose UserTypes"
                allowClear
                multiple
                treeDefaultExpandAll
                onChange={this.onChangeUsersTypes}
              >
                {userTypesOptions}
              </TreeSelect>
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="User Roles">
            {getFieldDecorator(
              "userRoles",
              {}
            )(
              // <Select mode="multiple" placeholder="Choose User Roles">
              //   {userRolesValues}
              // </Select>
              <TreeSelect
                showSearch
                style={{ width: "100%" }}
                value={this.state.value}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                placeholder="Choose UserTypes"
                allowClear
                multiple
                treeDefaultExpandAll
              >
                {userRolesValues}
              </TreeSelect>
            )}
          </Form.Item>
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
