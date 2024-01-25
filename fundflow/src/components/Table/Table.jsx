import { useContext, useEffect, useState } from "react";
import "../Table/table.css";
import { CusDetail } from "../CusDetail";
import { ModalContext } from "../Context";

export const Table = () => {
  const [TableData, setTableData] = useState([]);
  const { modalData } = useContext(ModalContext);
  const [combinedData, setCombinedData] = useState([]);

  // console.log("NewData", NewData)
  const CustomerData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      let dataGet = await response.json();
      // setTableData(dataGet);
      setTableData(
        dataGet.users.map((user) => ({
          id: user.id,
          firstName: user.firstName,
          email: user.email,
          phone: user.phone,
        }))
      );
      console.log("customer data", dataGet);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("Table data", TableData.users);
  useEffect(() => {
    CustomerData();
  }, []);
  useEffect(() => {
    const Data = [...TableData, ...modalData];
    setCombinedData(Data);
  }, [TableData, modalData]);
  {
    return (
      <>
        <div className="tableBody">
          <div>
            {combinedData?.length > 0 && (
              <div className="tableHeadings">
                <label className="sortByLabels">NAME</label>
                <label className="sortByLabels">USER ID</label>
                <label className="sortByLabels">EMAIL</label>
                <label className="sortByLabels">PHONE</label>
              </div>
            )}
          </div>
          {combinedData?.map((detail, index) => (
            <CusDetail
              userID={index}
              firstName={detail.firstName}
              email={detail.email}
              phone={detail.phone}
            />
          ))}
        </div>
      </>
    );
  }
};
