import React, { useState } from "react";

export const Form = ({ handleTranscript }) => {
  const [tipoConteudo, setTipoConteudo] = useState("Vídeo");
  const [videoURL, setVideoURL] = useState("");
  const [audioFile, setAudioFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    tipoConteudo == "Vídeo"
      ? handleTranscript(tipoConteudo, videoURL)
      : handleTranscript(tipoConteudo, audioFile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="buttons-select-type">
        <button type="button" onClick={() => setTipoConteudo("Vídeo")}>
          Vídeo
        </button>
        <button type="button" onClick={() => setTipoConteudo("Áudio")}>
          Áudio
        </button>
      </div>

      {tipoConteudo == "Vídeo" ? (
        <input
          type="url"
          placeholder="Insira a URL do vídeo que você deseja transcrever."
          required
          onChange={(e) => setVideoURL(e.target.value)}
        />
      ) : (
        <input
          type="file"
          accept="audio/*"
          required
          onChange={(e) => setAudioFile(e.target.files[0])}
        />
      )}

      <button type="submit">Transcrever</button>
    </form>
  );
};
