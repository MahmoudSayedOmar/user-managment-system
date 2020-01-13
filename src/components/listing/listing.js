import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Button, Table, Popconfirm, Tooltip, Icon } from "antd";
import "./listing.css";

export default class ListingComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddModal: false
    };
  }
  props: {
    modalTitle: "",
    columns: [],
    dataSource: [],
    pagination: false,
    listingType: "",
    onAddModal: () => void
  };

  render() {
    return (
      <div className="content">
        <Card>
          <CardBody className="all-icons">
            <div className="eachCompnentButtonSection">
              <div className="buttonRight">
                <Button
                  type="primary"
                  size="small"
                  onClick={() => this.props.onAddModal()}
                >
                  Add {this.props.modalTitle}
                </Button>
              </div>
            </div>
            <div className="eachCompnentButtonSection">
              <Table
                rowKey="id"
                columns={this.props.columns}
                dataSource={this.props.dataSource}
                pagination={this.props.pagination}
              />
            </div>
          </CardBody>
        </Card>

        {/* <AddForm
          title={this.state.modalTitle}
          onCancel={this.onCancelSettingsModal}
          onAdd={this.onAddUser}
          visible={this.state.showAddUserModal}
          ref="addUserForm"
        /> */}
      </div>
    );
  }
}
