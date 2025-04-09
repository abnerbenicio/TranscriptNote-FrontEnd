import { useState } from 'react'
import "./App.css";
import { Form } from "./components/Form";
import Header from "./components/Header";
import transcriptnoteApi from "./api/transcriptnote-api";

function App() {

  const [transcription, setTranscription] = useState('')

  const handleTranscript = async (transcriptionType, midiaContent) => {
    console.log(transcriptionType)

    let res;

    if (transcriptionType == 'Vídeo') {
      res = await transcriptnoteApi.post("/video-transcript", {url: midiaContent})
      setTranscription(res.data.summary)
    }
    else {
      const formData = new FormData()
      formData.append("file", midiaContent)
      res = await transcriptnoteApi.post("/audio-transcript", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      setTranscription(res.data.Transcription)
    }

  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Form handleTranscript={handleTranscript}/>
        <p>{transcription}</p>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
