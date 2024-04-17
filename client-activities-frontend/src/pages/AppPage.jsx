import React from "react";
import FileUploader from "../components/FileUploader";
import DataTable from "../components/DataTable";

export default function AppPage() {
  return (
    <div className="mx-auto max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-full 2xl:mx-10">
      <FileUploader />
      <DataTable />
    </div>
  );
}
