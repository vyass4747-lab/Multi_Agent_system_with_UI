// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // function App() {
// //   const [message, setMessage] = useState("Loading...");

// //   useEffect(() => {
// //     axios
// //       .get("http://127.0.0.1:8000/api/chat/") // use the URL that works for you
// //       .then((response) => {
// //         setMessage(response.data.message);
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //         setMessage("Error connecting backend");
// //       });
// //   }, []);

// //   return (
// //     <>
// //       <div className="min-h-screen bg-[#0B1120] text-white px-4 py-6">
// //         <h1 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent mb-8">
// //           Your Multi Agent AI System!
// //         </h1>
// //         <div
// //           className="relative max-w-6xl w-full min-h-[500px] flex flex-col lg:flex-row mx-auto rounded-3xl
// // border border-transparent
// // bg-[#0B1120]
// // bg-clip-padding
// // shadow-[0_0_25px_rgba(34,211,238,0.20),0_0_50px_rgba(168,85,247,0.10)]
// // before:absolute before:inset-0 before:rounded-3xl
// // before:p-[1px]
// // before:bg-gradient-to-r before:from-cyan-400 before:via-violet-500 before:to-fuchsia-500
// // before:-z-10 overflow-hidden"
// //         >
// //           <div className="w-full lg:w-[30%] border-b lg:border-b-0 lg:border-r border-white/10 p-6 bg-[#111827]/40">
// //             <form className="flex flex-col gap-5">
// //               <div>
// //                 <label className="text-sm text-slate-300 block mb-2">
// //                   Research Topic
// //                 </label>
// //                 <textarea
// //                   className="w-full h-36 rounded-2xl border border-white/10 bg-[#0F172A] p-4 resize-none outline-none focus:border-cyan-400/40 text-sm"
// //                   placeholder="Enter your topic here..."
// //                 />
// //               </div>
// //               <button className="bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 py-3 rounded-2xl font-semibold hover:opacity-90 transition-all">
// //                 Start Research
// //               </button>
// //             </form>
// //           </div>
// //           <div className="w-full lg:w-[70%] p-6">
// //             <div className="border-b border-white/10 pb-4 mb-5">
// //               <h2 className="text-2xl font-bold">Research Output</h2>
// //               <p className="text-slate-400 text-sm mt-1">
// //                 Your AI generated research will appear here.
// //               </p>
// //             </div>
// //             <div className="rounded-3xl border border-white/10 bg-[#111827]/50 min-h-[350px] p-5">
// //               <div className="rounded-2xl border border-cyan-400/10 bg-cyan-500/5 p-5">
// //                 <h1 className="text-cyan-200 text-sm font-medium mb-2">
// //                   AI Agent Status
// //                 </h1>
// //                 <p className="text-slate-300 text-sm leading-relaxed">
// //                   See your research results here.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [topic, setTopic] = useState("");
//   const [output, setOutput] = useState("See your research results here.");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!topic) return;

//     setLoading(true);
//     setOutput("Research in progress...");

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/chat/", {
//         message: topic,
//       });

//       setOutput(response.data.report);
//     } catch (error) {
//       console.error(error);
//       setOutput("Error connecting backend");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#0B1120] text-white px-4 py-6">
//       <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8">
//         Your Multi Agent AI System!
//       </h1>

//       <div className="max-w-6xl w-full min-h-[500px] flex flex-col lg:flex-row mx-auto rounded-3xl border border-white/10 overflow-hidden">
//         <div className="w-full lg:w-[30%] p-6 bg-[#111827]/40">
//           <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
//             <div>
//               <label className="text-sm text-slate-300 block mb-2">
//                 Research Topic
//               </label>

//               <textarea
//                 value={topic}
//                 onChange={(e) => setTopic(e.target.value)}
//                 className="w-full h-36 rounded-2xl bg-[#0F172A] p-4 resize-none"
//                 placeholder="Enter your topic here..."
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 py-3 rounded-2xl font-semibold"
//             >
//               {loading ? "Researching..." : "Start Research"}
//             </button>
//           </form>
//         </div>

//         <div className="w-full lg:w-[70%] p-6">
//           <h2 className="text-2xl font-bold mb-4">Research Output</h2>

//           <div className="rounded-3xl border border-white/10 bg-[#111827]/50 min-h-[350px] p-5">
//             <p className="text-slate-300 whitespace-pre-wrap">{output}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  const [results, setResults] = useState({
    search_result: "",
    reader_result: "",
    report: "",
    feedback: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!topic) return;

    setLoading(true);

    // reset previous outputs
    setResults({
      search_result: "Searching...",
      reader_result: "Waiting...",
      report: "Waiting...",
      feedback: "Waiting...",
    });

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/chat/", {
        message: topic,
      });

      setResults({
        search_result: response.data.search_result,
        reader_result: response.data.reader_result,
        report: response.data.report,
        feedback: response.data.feedback,
      });
    } catch (error) {
      console.error(error);

      setResults({
        search_result: "Error",
        reader_result: "Error",
        report: "Error connecting backend",
        feedback: "Error",
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-4 py-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8">
        Your Multi Agent AI System!
      </h1>

      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left Input Panel */}
        <div className="w-full lg:w-[30%] p-6 rounded-3xl border border-white/10 bg-[#111827]/40">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm text-slate-300 block mb-2">
                Research Topic
              </label>

              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full h-36 rounded-2xl bg-[#0F172A] p-4 resize-none"
                placeholder="Enter your topic here..."
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 py-3 rounded-2xl font-semibold"
            >
              {loading ? "Researching..." : "Start Research"}
            </button>
          </form>
        </div>

        {/* Right Output Panel */}
        <div className="w-full lg:w-[70%] space-y-5">
          {/* Search Agent */}
          <div className="rounded-2xl border border-cyan-500/30 bg-[#111827]/50 p-5">
            <h2 className="text-xl font-bold text-cyan-300 mb-3">
              Search Agent Output
            </h2>
            <p className="text-slate-300 whitespace-pre-wrap text-sm">
              {results.search_result || "No output yet"}
            </p>
          </div>

          {/* Reader Agent */}
          <div className="rounded-2xl border border-violet-500/30 bg-[#111827]/50 p-5">
            <h2 className="text-xl font-bold text-violet-300 mb-3">
              Reader Agent Output
            </h2>
            <p className="text-slate-300 whitespace-pre-wrap text-sm">
              {results.reader_result || "No output yet"}
            </p>
          </div>

          {/* Writer Chain */}
          <div className="rounded-2xl border border-pink-500/30 bg-[#111827]/50 p-5">
            <h2 className="text-xl font-bold text-pink-300 mb-3">
              Writer Chain Report
            </h2>
            <p className="text-slate-300 whitespace-pre-wrap text-sm">
              {results.report || "No output yet"}
            </p>
          </div>

          {/* Critic Chain */}
          <div className="rounded-2xl border border-yellow-500/30 bg-[#111827]/50 p-5">
            <h2 className="text-xl font-bold text-yellow-300 mb-3">
              Critic Feedback
            </h2>
            <p className="text-slate-300 whitespace-pre-wrap text-sm">
              {results.feedback || "No output yet"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
