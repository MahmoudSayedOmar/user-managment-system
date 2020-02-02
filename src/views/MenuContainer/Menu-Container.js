import React from "react";
import * as _ from "lodash";

import { Row, Col } from "reactstrap";
import { Icon, Popconfirm, Tooltip, Select } from "antd";

import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  tryViewMenus,
  onAddMenu,
  changeMenuActivationStatus,
  mapMenuToScreens
} from "../../State/Menus/action-creator";

import { tryGetApplicationportofolioAllScreensById } from "../../State/Screen/action-creator";

import MenusListingComponent from "../../components/menu/menu";

class MenusContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenuTobeEdited: { screensIds: [] },
      visible: false,
      selectedScreens: [],
      options: [],
      currentApplicationPortofolio: 0
    };

    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentDidMount() {
    if (this.props.location.state) {
      this.props.tryViewMenus(this.props.location.state.id);
      this.props.tryGetApplicationportofolioAllScreensById(
        this.props.location.state.id
      );
      this.setState({
        currentApplicationPortofolio: this.props.location.state.id
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      options: nextProps.screens.map(screen => ({
        label: screen.name,
        value: screen.id
      }))
    });
  }

  showModal = () => {
    // debugger;
    this.setState({
      visible: true
    });
  };

  handleOk = screens => {
    this.props.mapMenuToScreens(this.state.selectedMenuTobeEdited.id, screens);
    // debugger;
    this.setState({
      visible: false
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  columns = [
    {
      title: "Menu",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Actions",
      dataIndex: "isActive",
      key: "isActive",
      render: (eachKey, row) => (
        <span>
          <Tooltip placement="top" title="Map menu to screens">
            <Icon
              type="retweet"
              style={{
                fontSize: "20px",

                cursor: "pointer",
                paddingRight: "5px"
              }}
              onClick={() => {
                this.setState(
                  {
                    selectedMenuTobeEdited: row,
                    selectedScreens: row.screensIds
                  },
                  () => {
                    this.showModal();
                  }
                );
              }}
            />
          </Tooltip>
          {row.isActive ? (
            <Popconfirm
              title="Are you sure deActivate this application portofolio?"
              onConfirm={() => {
                this.props.changeMenuActivationStatus(row.id, false);
              }}
              okText="Yes"
              cancelText="No"
            >
              <Tooltip placement="top" title="DeActivate">
                <Icon
                  type="eye"
                  style={{
                    paddingRight: "5px",
                    fontSize: "20px",
                    cursor: "pointer"
                  }}
                />
              </Tooltip>
            </Popconfirm>
          ) : (
            <Tooltip placement="top" title="Activate">
              <Icon
                type="eye-invisible"
                style={{
                  paddingRight: "5px",
                  fontSize: "20px",
                  cursor: "pointer"
                }}
                onClick={() => {
                  this.props.changeMenuActivationStatus(row.id, true);
                }}
              />
            </Tooltip>
          )}
        </span>
      )
    }
  ];

  static mapStatetToProps(state) {
    console.log(
      state.applicationsPortofolios.applicationsPortofolios,
      "tatatat"
    );
    return {
      menus: state.menus.menus,
      screens: state.screens.screens,
      applicationsPortofolios:
        state.applicationsPortofolios.applicationsPortofolios
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      {
        tryViewMenus,
        onAddMenu,
        changeMenuActivationStatus,
        tryGetApplicationportofolioAllScreensById,
        mapMenuToScreens
      },
      dispatch
    );
  }

  // onChange(value) {
  //   this.props.tryViewMenus(value);
  //   this.props.tryGetApplicationportofolioAllScreensById(value);
  //   this.setState({ currentApplicationPortofolio: value });
  // }
  render() {
    const { Option } = Select;

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <MenusListingComponent
                columns={this.columns}
                selectedMenuTobeEdited={this.state.selectedMenuTobeEdited}
                dataSource={this.props.menus}
                pagination={false}
                listingType={"UserType Name Roles"}
                onAddMenu={this.props.onAddMenu}
                onConfirmMapping={this.handleOk}
                onCancelMapping={this.handleCancel}
                options={this.state.options}
                selectedScreens={this.state.selectedScreens}
                startMapping={this.state.visible}
                currentApplicationPortofolio={
                  this.state.currentApplicationPortofolio
                }
              />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export const MenusScreen = connect(
  MenusContainer.mapStatetToProps,
  MenusContainer.mapDispatchToProps
)(MenusContainer);
