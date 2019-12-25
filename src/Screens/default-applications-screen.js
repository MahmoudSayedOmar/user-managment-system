import React from "react";
import { connect } from "react-redux";
import { State } from "../State/state";
import { Dispatch, bindActionCreators } from "redux";
import { tryGetAllDefaultApplications } from "../State/DefaultApplications/action-creator";
import DefaultApplicationsListing from "../components/DefaultApplicationsListing/default-applications-listing"
class DefaultApplicationsContainer extends React.Component {

  props: {
    loading: boolean,
    errorMessage: string,
    tryGetAllDefaultApplications: UserLoginModel => void
  };
UNSAFE_componentWillMount(){
    this.props.tryGetAllDefaultApplications();
}
  static mapStatetToProps(state: State) {
    return {
      loading: state.defaultApplications.loading,
      errorMessage: state.defaultApplications.errorMessage,
      defaultApplications:state.defaultApplications.defaultApplications
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryGetAllDefaultApplications }, dispatch);
  }

  render() {
    return (<DefaultApplicationsListing dataSource={this.props.defaultApplications} />);
  }
}

export const DefaultApplicationsScreen = connect(
    DefaultApplicationsContainer.mapStatetToProps,
    DefaultApplicationsContainer.mapDispatchToProps
)(DefaultApplicationsContainer);
