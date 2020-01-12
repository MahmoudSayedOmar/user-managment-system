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
export default class AddApplicationPortofolioModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      baseAPPId: undefined,
      extraModules: []
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
    debugger;
  }

  render() {
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
                <div className="form-group">
                  <label
                    htmlFor={"applicationportofolio"}
                    className="form-label"
                  >
                    Application Portofolio Name
                    <input
                      className={"form-input"}
                      name={"applicationportofolioname"}
                      type={"text"}
                      onChange={this.onChangeValue.bind(this)}
                      placeholder={"Enter Application Portofolio Name"}
                    />
                  </label>

                  <label htmlFor={"baseapplictaion"} className="form-label">
                    Base Application
                    <Select
                      style={{ width: 200 }}
                      placeholder="Select Base Application"
                      onChange={this.onChange.bind(this)}
                    >
                      {_.map(context.baseApplications, baseApplication => {
                        return (
                          <Option value={baseApplication.id}>
                            {baseApplication.title}
                          </Option>
                        );
                      })}
                    </Select>
                  </label>
                  <label htmlFor={"extramodules"} className="form-label">
                    Extra Modules
                    <Select
                      style={{ width: 200 }}
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
                  </label>
                </div>
              </Form>
            </Modal>
          )}
        </Consumer>
      </div>
    );
  }
}
