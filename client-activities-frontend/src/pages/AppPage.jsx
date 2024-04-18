import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FileUploader from "../components/FileUploader";
import DataTable from "../components/DataTable";
import TableActions from "../components/TableActions";
import PaginationNav from "../components/PaginationNav";

export default function AppPage() {
  const [activityData, setActivityData] = useState([]);
  const [refreshTable, setRefreshTable] = useState(false);
  const [numRows, setNumRows] = useState(10);
  const [numPages, setNumPages] = useState(0);
  const [showPagination, setShowPagination] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3175/api/data?numRows=${numRows}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}.`);
        }
        const data = await res.json();
        setActivityData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [numRows, refreshTable]);

  const calculateNumPages = (data) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      return 0;
    }
    const totalObjects = data.length;
    if (totalObjects === 0) {
        return 0;
    }
    const totalPages = Math.ceil(totalObjects / numRows);
    setNumPages(totalPages);
    if (totalPages === 0) {
        setShowPagination(false);
    } else {
        setShowPagination(true);
    }
  };

  const onRefreshTable = () => {
    setRefreshTable(!refreshTable);
  };

  const handleNumRowsChange = (e) => {
    const selectedNumRows = parseInt(e.target.value);
    setNumRows(selectedNumRows);
  };

  const onPageChange = (page) => {
    console.log(`Navigating to page ${page}`);
  };

  return (
    <div className="mx-auto max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-full 2xl:mx-10">
      <FileUploader />
      <TableActions
        numRows={numRows}
        onRefreshTable={onRefreshTable}
        onNumRowsChange={handleNumRowsChange}
      />
      <DataTable activityData={activityData} />
      <PaginationNav
        showPagination={showPagination}
        numPages={numPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

AppPage.propTypes = {
  activityData: PropTypes.array,
  numRows: PropTypes.number,
  onRefreshTable: PropTypes.func,
  onPageChange: PropTypes.func,
};
