import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { setRequestMeta } from "next/dist/server/request-meta";

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {}, []);

  const handleChange = (e) => {
    if (e.target.name === "filename") {
      setFileName(e.target.value);
    }
    if (e.target.name === "file") {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var formData = new FormData();
      formData.append("filename", fileName);
      formData.append("file", file);

      const res = await fetch("/api/uploadData", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Network response is not ok");
      }
      const data = await res.json();
      setResult(data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.centeredContent}>
        <header
          className={styles.header}
          style={{
            background: "linear-gradient(to right,#3cc4ec,#000000)",
            color: "#fff",
            border: "1px solid #333",
            borderRadius: "10px",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          <h1>IPFS CloudStorage Descentralized</h1>
        </header>

        <form onSubmit={handleSubmit}>
          <label
            className={styles.label}
            style={{
              background: "linear-gradient(to right,#3cc4ec,#000000)",
              color: "#fff",
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "10px",
              fontWeight: "bold",
            }}
          >
            Enter Number ID for File:
          </label>
          <input
            type="text"
            name="filename"
            value={fileName}
            style={{
              background: "linear-gradient(to right,#3cc4ec,#6685a2)",
              color: "#fff",
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "10px",
              fontWeight: "bold",
            }}
            onChange={handleChange}
            className={styles.input}
          />
          <br />
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className={styles.input}
            style={{
              background: "linear-gradient(to right,#3cc4ec,#000000)",
              color: "#fff",
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "10px",
              fontWeight: "bold",
            }}
          />
          <br />

          <input type="submit" value="Submit" className={styles.button} />
        </form>

        <footer
          style={{
            textAlign: "center",
            position: "fixed",
            bottom: "0",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(to right,#3cc4ec,#000000)",
              color: "#fff",
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "10px",
              fontWeight: "bold",
              margin: "-5px",
              marginRight: "1450px",
              
            }}
          >
            
            <a
              href="https://github.com/querylab"
              target="_blank"
              rel="noopener noreferrer"
            >
         <div>     <img src="https://i.imgur.com/iywAlED.png" width="30" alt="GitHub"
              /></div>

            </a>
            Made with ❤️ by querylab
          </div>
        </footer>

        {result && <p className={styles.result}>{result}</p>}
      </div>
    </div>
  );
}

export default App;