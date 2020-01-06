import React from "react";

import { Card, CardBody, Row, Col } from "reactstrap";
import { Button, Table, Icon, Popconfirm, Tooltip } from "antd";

import './application-portofolio.css';

import ListingComponent from "../listing/listing";

export default class ApplicationsPortofoliosListingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  columns = [
    {
      title: "Corporate Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Country - City",
      dataIndex: "country",
      key: "country",
      render: (country, row) => <span>{country + " - " + row.city}</span>
    },
    {
      title: "Phone",
      dataIndex: "phoneNo",
      key: "phoneNo"
    },

    {
      title: "Address",
      key: "address",
      dataIndex: "address"
    }
    //,
    // {
    //   title: "Actions",
    //   dataIndex: "isActive",
    //   key: "isActive",
    //   render: (eachKey, row) => (
    //     <span>
    //       <Icon
    //         type="edit"
    //         style={{
    //           fontSize: "20px",

    //           cursor: "pointer",
    //           paddingRight: "5px"
    //         }}
    //         onClick={() => this.onEditRow(row.id)}
    //       />
    //       {row.isActive ? (
    //         <Popconfirm
    //           title="Are you sure deActivate this Company?"
    //           onConfirm={() => this.onDeactivateCoporate(row.id)}
    //           okText="Yes"
    //           cancelText="No"
    //         >
    //           <Tooltip placement="top" title="DeActivate">
    //             <Icon
    //               type="eye"
    //               style={{
    //                 paddingRight: "5px",
    //                 fontSize: "20px",
    //                 cursor: "pointer"
    //               }}
    //               // onClick={() => this.onDeleteRow()}
    //             />
    //           </Tooltip>
    //         </Popconfirm>
    //       ) : (
    //         <Tooltip placement="top" title="Activate">
    //           <Icon
    //             type="eye-invisible"
    //             style={{
    //               paddingRight: "5px",
    //               fontSize: "20px",
    //               cursor: "pointer"
    //             }}
    //             onClick={() => this.onActivateDeActivate(row.id)}
    //           />
    //         </Tooltip>
    //       )}

    //       <Tooltip placement="top" title="Corporate Applications">
    //         <Icon
    //           type="file-add"
    //           style={{ fontSize: "20px", cursor: "pointer" }}
    //         />
    //       </Tooltip>
    //     </span>
    //   )
    // }
  ];

  render() {
    return (
      <div>
        <ListingComponent
          modalTitle={"Application Portofolio"}
          columns={this.columns}
          dataSource={[]}
          pagination={false}
          listingType={"Corprate Name Application Portofolio"}
          onAddModal={() => {}}
        />
      </div>
    );
  }
}
