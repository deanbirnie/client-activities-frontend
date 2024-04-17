import React from "react";

export default function DataTable() {
  return (
    <div className="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg mx-auto max-w-full">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 border">
              Activity ID
            </th>
            <th scope="col" className="px-6 py-3 border">
              Description
            </th>
            <th scope="col" className="px-6 py-3 border">
              Client
            </th>
            <th scope="col" className="px-6 py-3 border">
              Start Date
            </th>
            <th scope="col" className="px-6 py-3 border">
              Duration
            </th>
            <th scope="col" className="px-6 py-3 border">
              Due Date
            </th>
            <th scope="col" className="px-6 py-3 border">
              Task 1
            </th>
            <th scope="col" className="px-6 py-3 border">
              Task 2
            </th>
            <th scope="col" className="px-6 py-3 border">
              Task 3
            </th>
            <th scope="col" className="px-6 py-3 border">
              Task 4
            </th>
            <th scope="col" className="px-6 py-3 border">
              Task 5
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b hover:bg-gray-50 ">
            <td className="px-6 py-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
