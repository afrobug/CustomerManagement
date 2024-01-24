import { useEffect, useState } from "react";
import "../Table/table.css";
import { BusDetail } from "../BusDetail";

const Table = () => {
  const [TableData, setTableData] = useState([]);

  const CustomerData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/users`);
      let dataGet = await response.json();
      setTableData(dataGet);
      console.log("customer data", dataGet);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("Table data", TableData.users);
  useEffect(() => {
    CustomerData();
  }, []);

  {
    return (
      <>
        <div className="tableBody">
          <div>
            {TableData.users?.length > 0 && (
              <div className="tableHeadings">
                <label className="sortByLabels">USER ID</label>
                <label className="sortByLabels">NAME</label>
                <label className="sortByLabels">EMAIL</label>
                <label className="sortByLabels">PHONE</label>
              </div>
            )}
          </div>
          {TableData.users?.map((detail, index) => (
            <BusDetail
              userID={index}
              img = {detail.image}
              busName={detail.firstName}
              arrivalTime={detail.email}
              departureTime={detail.phone}
            />
          ))}
        </div>
      </>
    );
  }
};

export default Table;