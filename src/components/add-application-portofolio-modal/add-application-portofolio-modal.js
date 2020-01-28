import React from "react";
import {
  Form,
  Input,
  Modal,
  Upload,
  Button,
  Icon,
  Select,
  Checkbox
} from "antd";
import { Consumer } from "../../context";
import * as _ from "lodash";
const FormItem = Form.Item;

export default Form.create()(
  class AddApplicationPortofolioModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        extraModulesOptions: [],
        defaultApps: ""
      };
    }
    onSelectbaseModules = value => {
      this.props.form.setFieldsValue({ extramodules: [] });
      let extraModulesArray = this.props.baseApplications.find(
        eachExtraModule => eachExtraModule.id === value
      ).modulesDefaultApp;

      let extraModuleOptions = [];
      let defaultAppsArray = [];
      for (var m = 0; m < extraModulesArray.length; m++) {
        if (extraModulesArray[m].isDefault === false) {
          extraModuleOptions.push(extraModulesArray[m]);
        } else if (extraModulesArray[m].isDefault === true) {
          defaultAppsArray.push(extraModulesArray[m]);
        }
      }

      if (defaultAppsArray.length > 0) {
        this.setState({
          defaultApps: defaultAppsArray.map((eachDefaultApp, index) => {
            return (
              <span key={index}>
                {index === 0 ? "Default Apps : " : ""}
                {eachDefaultApp.title}
                {index === defaultAppsArray.length - 1 ? ".  " : ", "}
              </span>
            );
          })
        });
      }
      if (extraModuleOptions.length > 0) {
        this.setState({
          extraModulesOptions: extraModuleOptions.map(baseApplication => {
            return (
              <Select.Option
                key={baseApplication.id}
                value={baseApplication.id}
              >
                {baseApplication.title}
              </Select.Option>
            );
          })
        });
      }
    };
    onOk = () => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.props.onOk({
            name: values.applicationportofolio,
            baseAPPId: values.baseapplictaion,
            extraModules: _.map(values.extramodules, extraModule => {
              return { moduleId: extraModule };
            }),

            isActive: true
          });
          this.setState({ defaultApps: "" });
          this.props.form.resetFields();
        }
      });
    };
    cancelForm = () => {
      this.setState({ defaultApps: "" });
      this.props.onCancel();
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 15 }
      };

      const { Option } = Select;
      const { visible, modalText, onOk, onCancel } = this.props;
      const extraModules = [];

      return (
        <div>
          <Consumer>
            {context => (
              <Modal
                title="New Application Portofolio"
                visible={visible}
                onOk={this.onOk}
                onCancel={this.cancelForm}
              >
                <Form>
                  <Form.Item
                    {...formItemLayout}
                    label=" Application Portofolio Name"
                  >
                    {getFieldDecorator("applicationportofolio", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your Portofolio Name!"
                        }
                      ]
                    })(
                      <Input
                        type={"text"}
                        placeholder={"Enter Application Portofolio Name"}
                      />
                    )}
                  </Form.Item>
                  <Form.Item
                    {...formItemLayout}
                    label="Base Application"
                    help={
                      this.state.defaultApps !== ""
                        ? this.state.defaultApps
                        : ""
                    }
                  >
                    {getFieldDecorator("baseapplictaion", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your base applictaion Name!"
                        }
                      ]
                    })(
                      <Select
                        placeholder="Select Base Application"
                        onChange={this.onSelectbaseModules}
                      >
                        {_.map(context.baseApplications, baseApplication => {
                          return (
                            <Option
                              key={baseApplication.id}
                              value={baseApplication.id}
                            >
                              {baseApplication.title}
                            </Option>
                          );
                        })}
                      </Select>
                    )}
                  </Form.Item>

                  <Form.Item {...formItemLayout} label="Extra Modules">
                    {getFieldDecorator("extramodules", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your extra modules Name!"
                        }
                      ]
                    })(
                      <Select
                        mode="multiple"
                        placeholder="Please select your extra modules"
                      >
                        {this.state.extraModulesOptions}
                      </Select>
                    )}
                  </Form.Item>
                </Form>
              </Modal>
            )}
          </Consumer>
        </div>
      );
    }
  }
);
