import sovapoti from "../assets/headmaster2.png";
import headmaster from "../assets/headmaster.png";

const CardChief = () => {
  return (
    <div className="flex justify-around items-center bg-[#F5F5F5] p-4 rounded-lg shadow-md mb-5 font-bengali">
      <div className="space-y-2">
        <h1 className="text-center text-2xl bg-blue-500 p-3 text-white">
          সভাপতি
        </h1>
        <img className="w-1/2 mx-auto" src={sovapoti} alt="" />
        <h2 className="text-center">এখনো নির্বাচিত হয়নি</h2>
        <p className="text-center my-0">
          মোবাইল:{" "}
          <span>
            <a href="tel:017xxxxxxxx">017xxxxxxxx</a>
          </span>
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="text-center text-2xl bg-blue-500 p-3 text-white">
          প্রধান শিক্ষক
        </h1>
        <img className="w-1/2 mx-auto" src={headmaster} alt="" />
        <h2 className="text-center">গণেশ চন্দ্র মণ্ডল</h2>
        <p className="text-center my-0">
          মোবাইল:{" "}
          <span className="text-blue-500 underline underline-offset-2">
            <a href="tel:+8801713722859">01713722859</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardChief;
