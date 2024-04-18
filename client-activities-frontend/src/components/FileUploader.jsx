import React from "react";

export default function FileUploader() {
  const handleFileUpload = async (e) => {
    e.preventDefault();

    const fileInput = e.target.querySelector("#fileInput");
    const file = fileInput.files[0];
    console.log(file);

    if (!file) {
      console.error("No file selected.");
      return;
    }

    if (!file.name.endsWith(".csv")) {
      console.error("Please select a .csv file.");
      fileInput.value = "";
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:3170/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Failed to upload file: ${res.status}.`);
      } else {
        console.log("File uploaded successfully.");
      }

      fileInput.value = "";

      return res.json();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="max-w-lg mt-10">
      <p> Upload Activity Data</p>
      <form
        className="flex flex-row gap-4"
        id="fileUploadForm"
        encType="multipart/form-data"
        onSubmit={handleFileUpload}
      >
        <input
          className="block p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          id="fileInput"
          name="files"
          type="file"
        ></input>
        <button
          className="p-2 rounded-lg border uppercase bg-green-200"
          type="submit"
        >
          upload
        </button>
      </form>
      <p className="mt-1 ml-1 text-sm text-gray-500">.csv files</p>
    </div>
  );
}
