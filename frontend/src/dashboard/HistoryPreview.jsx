import React, { useState, useEffect, useContext } from "react";
import Sidebar from "./components/Sidebar";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { AuthContext } from "../context/AuthContext";

const HistoryPreview = () => {
  const [history, setHistory] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) return;

    const scansRef = collection(db, "scans");
    const q = query(
      scansRef,
      where("userId", "==", currentUser.uid),
      orderBy("scanDate", "desc") 
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          image: data.imageData || data.image || data.imageBase64 || "",
          disease: data.diseaseName || "Pending Analysis",
          date: data.scanDate || "No date available",
          treatment: data.treatment || "Analysis in progress...",
          severity: data.severity || "Unknown",
          status: data.status || "pending",
          confidence: data.confidence || 0,
        };
      });
      setHistory(list);
    });

    return () => unsubscribe();
  }, [currentUser]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Scan History</h1>

        {history.length === 0 ? (
          <p className="text-gray-600">No scan history found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                {/* ✅ Image display with fallback */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt="Scan"
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg mb-3">
                    <span className="text-gray-500 text-sm">No Image</span>
                  </div>
                )}

                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.disease}
                </h2>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Date:</strong> {item.date}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Severity:</strong> {item.severity}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Confidence:</strong> {item.confidence}%
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Status:</strong> {item.status}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Treatment:</strong> {item.treatment}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPreview;
