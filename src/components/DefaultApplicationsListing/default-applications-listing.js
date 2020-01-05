import React from "react";

import { Table } from "antd";
import { Card, CardBody, Row, Col } from "reactstrap";

const columns = [
  {
    title: "Sequence",
    dataIndex: "serial",
    key: "serial"
  },
  {
    title: "Application Name",
    dataIndex: "applicationName",
    key: "applicationName"
  },
  {
    title: "Basic Application",
    dataIndex: "basicApplication",
    key: "basicApplication"
  },
  {
    title: "Owner Corprate",
    dataIndex: "ownerCorprate",
    key: "ownerCorprate"
  }
];

const DefaultApplicationsListing = props => {
  const { dataSource } = props;

  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
};

export default DefaultApplicationsListing;
