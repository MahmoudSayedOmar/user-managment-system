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
        name: "",
        baseAPPId: undefined,
        extraModules: [],
        isActive: true
      };
    }

    handleChange(value) {
      var selectedModules = [];
      value.forEach(selectValue => {
        selectedModules.push({ moduleId: selectValue });
      });

      this.setState({ extraModules: selectedModules });
    }
    onChange(value) {
      console.log(value);
      this.setState({ baseAPPId: value });
    }
    onChangeValue(e) {
      console.log(e.target.value);
      console.log(e.target.name);
      this.setState({ name: e.target.value });
    }

    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 15 }
      };

      const { Option } = Select;
      const { visible, modalText, onOk, onCancel } = this.props;
      const extraModules = [];
      for (let i = 10; i < 36; i++) {
        extraModules.push(
          <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
        );
      }

      return (
        <div>
          <Consumer>
            {context => (
              <Modal
                title="New Application Portofolio"
                visible={visible}
                onOk={() => {
                  onOk(this.state);
                }}
                onCancel={onCancel}
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
                  <Form.Item {...formItemLayout} label="Base Application">
                    {getFieldDecorator("baseapplictaion", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your base applictaion Name!"
                        }
                      ]
                    })(
                      <Select placeholder="Select Base Application">
                        {_.map(context.baseApplications, baseApplication => {
                          return (
                            <Option value={baseApplication.id}>
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
                        onChange={this.handleChange.bind(this)}
                      >
                        {_.map(context.modules, module => {
                          return (
                            <Option key={module.id} value={module.id}>
                              {module.title}
                            </Option>
                          );
                        })}
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
