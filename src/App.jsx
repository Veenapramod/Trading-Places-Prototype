import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import WorkspaceLayout from "./layouts/WorkspaceLayout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Scenario from "./pages/Scenario";
import Report from "./pages/Report";
import Consent from "./pages/Consent";
import CulturePulse from "./pages/CulturePulse";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scenario" element={<Scenario />} />
        <Route path="/report" element={<Report />} />
        <Route path="/consent" element={<Consent />} />

        <Route path="/workspace" element={<WorkspaceLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="scenario" element={<Scenario />} />
          <Route path="report" element={<Report />} />
          <Route path="pulse" element={<CulturePulse />} />
        </Route>
      </Routes>
    </>
  );
}
