import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import EditorPage from "./pages/EditorPage";
import PreviewPage from "./pages/PreviewPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/editor" />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}

export default App;
