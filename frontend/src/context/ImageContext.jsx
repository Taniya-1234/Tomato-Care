// src/context/ImageContext.jsx
import React, { createContext, useContext, useState } from "react";
import TomatoDiseaseAPI from "../services/api";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [selectedImageData, setSelectedImageData] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState(null);

  const analyzeImage = async () => {
    if (!selectedImageData) {
      setAnalysisError("No image selected for analysis");
      return;
    }

    setIsAnalyzing(true);
    setAnalysisError(null);
    setAnalysisResult(null);

    try {
      // Get the image file - prefer file object, fallback to converting base64
      let imageFile;
      
      if (selectedImageData.file) {
        // If we have the original file, use it directly
        imageFile = selectedImageData.file;
      } else if (selectedImageData.preview) {
        // Convert base64 data URL to File
        // Remove data:image/...;base64, prefix if present
        const base64Data = selectedImageData.preview.includes(',') 
          ? selectedImageData.preview.split(',')[1] 
          : selectedImageData.preview;
        
        // Determine file type from data URL or default to jpeg
        let mimeType = "image/jpeg";
        if (selectedImageData.preview.startsWith("data:image/")) {
          mimeType = selectedImageData.preview.split(";")[0].split(":")[1];
        }
        
        // Convert base64 to binary
        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: mimeType });
        
        // Create File from Blob
        imageFile = new File([blob], selectedImageData.name || "image.jpg", {
          type: mimeType,
        });
      } else {
        throw new Error("No image data available");
      }

      // Call the API
      const result = await TomatoDiseaseAPI.predictFromFile(imageFile);
      
      // Transform the API response to match what DiseaseDetected expects
      const transformedResult = {
        predicted_class: result.prediction?.disease || result.disease,
        disease: result.prediction?.disease || result.disease,
        class_name: result.prediction?.disease || result.disease,
        confidence: result.prediction?.confidence 
          ? result.prediction.confidence / 100 
          : result.confidence 
            ? typeof result.confidence === 'number' 
              ? result.confidence / 100 
              : parseFloat(result.confidence) / 100
            : 0,
        treatment: result.prediction?.disease_info?.treatment 
          || result.prediction?.disease_info?.description
          || result.treatment
          || "Please consult with an agricultural expert for specific treatment recommendations.",
        severity: result.prediction?.disease_info?.severity 
          || result.severity
          || "Unknown",
        disease_info: result.prediction?.disease_info || result.disease_info,
        all_predictions: result.all_predictions || [],
      };

      setAnalysisResult(transformedResult);
    } catch (error) {
      console.error("Analysis error:", error);
      setAnalysisError(error.message || "Failed to analyze image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearAnalysis = () => {
    setAnalysisResult(null);
    setAnalysisError(null);
    setIsAnalyzing(false);
  };

  return (
    <ImageContext.Provider
      value={{
        selectedImageData,
        setSelectedImageData,
        analysisResult,
        isAnalyzing,
        analysisError,
        analyzeImage,
        clearAnalysis,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);
