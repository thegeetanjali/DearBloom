import { Routes, Route } from "react-router-dom"
import Logo from "./pages/logo"
import Note from "./pages/Note"
import Builder from "./pages/Builder"
import Customize from "./pages/Customize"
import Final from "./pages/Final"
import Share from "./pages/Share"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Logo />} />
      <Route path="/note" element={<Note />} />
      <Route path="/build" element={<Builder />} />
      <Route path="/customize" element={<Customize />} />
      <Route path="/final" element={<Final />} />
      <Route path="/share/:code" element={<Share />} />
    </Routes>
  )
}