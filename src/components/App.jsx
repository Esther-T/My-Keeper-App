import React from "react";
import Heading from "./Heading.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";

function createNote(note) {
  return <Note key={note.id} title={note.title} content={note.content} />;
}
function App() {
  return (
    <div>
      <Heading />
      {notes.map(createNote)};
      <Footer />
    </div>
  );
}

export default App;
