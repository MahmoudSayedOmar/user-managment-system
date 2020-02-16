import React from "react";
import { Form, Input, Modal, Checkbox, Spin } from "antd";

const FormItem = Form.Item;

export const RoleControlMapper = Form.create()(
  class ImportMediaForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedRoleScreens: []
      };
    }
    static defaultProps = {};

    componentWillReceiveProps(nextProps) {
      let _selectedValues = nextProps.roleScreensControls.map(screen => {
        return {
          id: screen.id,
          selectedControls: screen.controlDTOs
            .filter(control => control.isSelected == true)
            .map(s => s.id),
          isSelected: screen.isSelected,
          checkAll: false
        };
      });
      this.setState({ selectedRoleScreens: _selectedValues });
      debugger;
    }
    onCancel = () => {
      this.props.onCancel();
    };

    onOk = () => {
      let _controls = [];
      const _selectedRoleScreens = this.state.selectedRoleScreens;
      debugger;
      _selectedRoleScreens.map(screen =>
        screen.selectedControls.map(control => _controls.push(control))
      );
      this.props.onOk(_controls);
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

      let FormItems = (
        <Form>
          {getFieldDecorator("id")(<Input type="hidden" />)}
          {this.props.roleScreensControls.map(obj => (
            <div style={{ border: "1px solid #E9E9E9", marginBottom: "5px" }}>
              <center>
                <div style={{ borderBottom: "1px solid #E9E9E9" }}>
                  <Checkbox
                    indeterminate={false}
                    onChange={e => {
                      let _selectedRoleScreens = this.state.selectedRoleScreens.map(
                        screen => {
                          if (screen.id == obj.id) {
                            let _screen = this.props.roleScreensControls.find(
                              s => s.id == obj.id
                            );
                            screen = {
                              id: _screen.id,
                              selectedControls: e.target.checked
                                ? _screen.controlDTOs.map(s => s.id)
                                : [],
                              isSelected: screen.isSelected ? false : true,
                              checkAll: e.target.checked
                            };
                            debugger;

                            return screen;
                          } else {
                            return screen;
                          }
                        }
                      );
                      debugger;

                      this.setState({
                        selectedRoleScreens: _selectedRoleScreens
                      });
                    }}
                    checked={
                      this.state.selectedRoleScreens.find(
                        screen => screen.id == obj.id
                      ).checkAll
                    }
                  >
                    {obj.name}{" "}
                  </Checkbox>
                </div>
              </center>
              <br></br>
              <Checkbox.Group
                key={obj.id}
                style={{ width: "100%" }}
                onChange={selectedValues => {
                  let _selectedRoleScreens = this.state.selectedRoleScreens.map(
                    screen => {
                      if (screen.id == obj.id) {
                        screen.selectedControls = selectedValues;
                        return screen;
                      } else {
                        return screen;
                      }
                    }
                  );
                  this.setState({ selectedScreens: _selectedRoleScreens });
                }}
                value={
                  this.state.selectedRoleScreens.find(
                    screen => screen.id == obj.id
                  ).selectedControls
                }
              >
                {obj.controlDTOs.map(control => (
                  <Checkbox key={control.id} value={control.id}>
                    {control.name}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </div>
          ))}
        </Form>
      );
      return (
        <Modal {...this.props} onCancel={this.onCancel} onOk={this.onOk}>
          {this.props.loading ? (
            <center>
              <Spin tip="Loading..." />
            </center>
          ) : (
            FormItems
          )}
        </Modal>
      );
    }
  }
);
