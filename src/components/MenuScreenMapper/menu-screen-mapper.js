import React from "react";
import { Form, Input, Modal, Row, Col, Icon, Checkbox } from "antd";
// const Option = Select.Option;

const FormItem = Form.Item;

export const MenuScreenMapperForm = Form.create()(
  class ImportMediaForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedScreens: []
      };
    }
    static defaultProps = {};

    componentWillReceiveProps(nextProps) {
      this.setState({ selectedScreens: nextProps.selectedScreens });
    }
    onCancel = () => {
      this.props.onCancel();
    };

    onOk = () => {
      this.props.onOk(this.state.selectedScreens);
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

          <FormItem {...formItemLayout} label="Menu Mapping Form">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please Write Menu Name!" }]
            })(<Input placeholder="Menu Name" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Screens">
            <Checkbox.Group
              style={{ width: "100%" }}
              options={this.props.options}
              value={this.state.selectedScreens}
              onChange={selectedValues => {
                this.setState({ selectedScreens: selectedValues });
              }}
            />
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
