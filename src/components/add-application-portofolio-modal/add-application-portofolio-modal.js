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
    }
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
          this.props.form.resetFields();
        }
      });
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
                onOk={this.onOk}
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
