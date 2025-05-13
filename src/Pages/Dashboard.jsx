import { useState } from "react";
import { supabase } from "../supabase/supabase";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!title || !pdfFile) {
      alert("Please enter a title and select a PDF file.");
      return;
    }

    setLoading(true);

    try {
      const fileName = `${Date.now()}_${pdfFile.name}`;

      // Upload file to Supabase Storage
      const { error: storageError } = await supabase.storage
        .from("notices-pdf")
        .upload(fileName, pdfFile);

      if (storageError) {
        console.error(storageError);
        alert("Error uploading PDF.");
        setLoading(false);
        return;
      }

      // Get public URL of uploaded PDF
      const {
        data: { publicUrl },
      } = supabase.storage.from("notices-pdf").getPublicUrl(fileName);

      // Insert record into 'notices' table
      const { error: insertError } = await supabase.from("notices").insert([
        {
          title,
          pdf_url: publicUrl,
          // upload_date defaults to now() automatically
        },
      ]);

      if (insertError) {
        console.error(insertError);
        alert("Failed to save notice.");
      } else {
        alert("Notice uploaded successfully!");
        setTitle("");
        setPdfFile(null);
      }
    } catch (err) {
      console.error(err);
      alert("Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-272px)] p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Admin Dashboard
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Notice Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter notice title"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">
              Upload PDF Notice
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-600
                file:mr-4 file:py-2 file:px-4 
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
            />
          </div>

          {pdfFile && (
            <div className="mt-2 text-green-700 font-medium">
              Selected File: {pdfFile.name}
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            {loading ? "Uploading..." : "Upload PDF"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
