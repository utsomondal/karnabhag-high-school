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
      alert("দয়া করে একটি শিরোনাম দিন এবং একটি PDF ফাইল নির্বাচন করুন।");
      return;
    }

    setLoading(true);

    try {
      const fileName = `${Date.now()}_${pdfFile.name}`;

      // Supabase স্টোরেজে ফাইল আপলোড করুন
      const { error: storageError } = await supabase.storage
        .from("notices-pdf")
        .upload(fileName, pdfFile);

      if (storageError) {
        console.error(storageError);
        alert("PDF আপলোড করতে ত্রুটি ঘটেছে।");
        setLoading(false);
        return;
      }

      // আপলোড হওয়া PDF এর পাবলিক URL পান
      const {
        data: { publicUrl },
      } = supabase.storage.from("notices-pdf").getPublicUrl(fileName);

      // 'notices' টেবিলে রেকর্ড ইনসার্ট করুন
      const { error: insertError } = await supabase.from("notices").insert([
        {
          title,
          pdf_url: publicUrl,
          // upload_date এখন() স্বয়ংক্রিয়ভাবে ডিফল্ট হিসেবে দেয়া হবে
        },
      ]);

      if (insertError) {
        console.error(insertError);
        alert("নোটিশ সংরক্ষণ করতে ব্যর্থ হয়েছে।");
      } else {
        alert("নোটিশ সফলভাবে আপলোড হয়েছে!");
        setTitle("");
        setPdfFile(null);
      }
    } catch (err) {
      console.error(err);
      alert("অপ্রত্যাশিত ত্রুটি ঘটেছে।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-272px)] p-6 flex items-center justify-center font-bengali">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          অ্যাডমিন ড্যাশবোর্ড
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              নোটিশ শিরোনাম
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="নোটিশের শিরোনাম লিখুন"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">
              PDF নোটিশ আপলোড করুন
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
              নির্বাচিত ফাইল: {pdfFile.name}
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            {loading ? "আপলোড হচ্ছে..." : "PDF আপলোড করুন"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
