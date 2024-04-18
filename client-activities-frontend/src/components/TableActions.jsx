import React from "react";
import PropTypes from "prop-types";
import { HiOutlineRefresh } from "react-icons/hi";

export default function TableActions({ numRows, onRefreshTable }) {

  return (
    <div className="mt-10 mb-2 flex sm:flex-row justify-between mx-2">
      <div>
        <label htmlFor="numRows">Number of Rows:</label>
        <select className="border rounded-md p-1 mx-2" id="numberRows">
          <option value={10} defaultValue={numRows === 10 ? "selected" : ""}>
            10
          </option>
          <option value={20} selected={numRows === 20 ? "selected" : ""}>20</option>
          <option value={30} selected={numRows === 30 ? "selected" : ""}>30</option>
          <option value={50} selected={numRows === 50 ? "selected" : ""}>50</option>
          <option value={100} selected={numRows === 100 ? "selected" : ""}>100</option>
        </select>
      </div>
      <div className="flex p-1">
        <label htmlFor="refreshButton" className="mx-2">
          Refresh Table Data
        </label>
        <HiOutlineRefresh
          id="refreshButton"
          size={25}
          className=" hover:ring-1 rounded-md"
          cursor={"pointer"}
          onClick={onRefreshTable}
        />
      </div>
    </div>
  );
}

TableActions.propTypes = {
    numRows: PropTypes.number,
    onRefreshTable: PropTypes.func,
};
