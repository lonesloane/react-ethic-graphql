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
                <Route path="/" element={<PropositionList/>} />
                <Route path="/axioms" element={<AxiomList/>} />
                <Route path="/axiom/:partNumber/:itemNumber" element={<Axiom/>} />
                <Route path="/affection-definitions" element={<AffectionDefinitionList/>} />
                <Route path="/affection-definition/:partNumber/:itemNumber" element={<AffectionDefinition/>} />
                <Route path="/definitions" element={<DefinitionList/>} />
                <Route path="/definition/:partNumber/:itemNumber" element={<Definition/>} />
                <Route path="/postulates" element={<PostulateList/>} />
                <Route path="/postulate/:partNumber/:itemNumber" element={<Postulate/>} />
                <Route path="/preface/:partNumber/:itemNumber" element={<Preface/>} />
                <Route path="/propositions" element={<PropositionList/>} />
                <Route path="/proposition/:partNumber/:itemNumber" element={<Proposition/>} />
                <Route path="/ethicItem/:name" element={<EthicItem uri={undefined}/>} />
            </Routes>
        </Layout>
      </Router>
  )
}