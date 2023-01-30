import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AxiomList from "./components/AxiomList";
import Axiom from "./components/Axiom";
import AffectionDefinitionList from "./components/AffectionDefinitionList";
import AffectionDefinition from "./components/AffectionDefinition";
import DefinitionList from "./components/DefinitionList";
import Definition from "./components/Definition";
import PostulateList from "./components/PostulateList";
import Postulate from "./components/Postulate";
import PropositionList from "./components/PropositionList";
import Proposition from "./components/Proposition";
import EthicItem from "./components/EthicItem";
import Preface from "./components/Preface";
import Layout from "./components/Layout";

export default function App() {

  return (
      <Router>
        <Layout>
            <Routes>
                <Route exact path="/" element={<PropositionList/>} />
                <Route exact path="/axioms" element={<AxiomList/>} />
                <Route path="/axiom/:partNumber/:itemNumber" element={<Axiom/>} />
                <Route exact path="/affection-definitions" element={<AffectionDefinitionList/>} />
                <Route path="/affection-definition/:partNumber/:itemNumber" element={<AffectionDefinition/>} />
                <Route exact path="/definitions" element={<DefinitionList/>} />
                <Route path="/definition/:partNumber/:itemNumber" element={<Definition/>} />
                <Route exact path="/postulates" element={<PostulateList/>} />
                <Route path="/postulate/:partNumber/:itemNumber" element={<Postulate/>} />
                <Route exact path="/preface/:partNumber/:itemNumber" element={<Preface/>} />
                <Route exact path="/propositions" element={<PropositionList/>} />
                <Route path="/proposition/:partNumber/:itemNumber" element={<Proposition/>} />
                <Route path="/ethicItem/:name" element={<EthicItem/>} />
            </Routes>
        </Layout>
      </Router>
  )
}