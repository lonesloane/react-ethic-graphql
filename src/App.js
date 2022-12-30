import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import PropositionList from "./components/PropositionList";
import PropositionTemplate from "./components/PropositionTemplate";
import Layout from "./components/Layout";

export default function App() {

  return (
      <Router>
        <Layout>
            <Routes>
                <Route exact path="/" element={<PropositionList/>} />
                <Route path="/proposition/:partNumber/:itemNumber" element={<PropositionTemplate/>} />
            </Routes>
        </Layout>
      </Router>
  )
}