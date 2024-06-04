import { useEffect, useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning]=useState(false)
  const [warningText, setWarningText]=useState('')

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setShowWarning(true)
      setWarningText('no script tag allowed')
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setShowWarning(true)
      setWarningText('no "@" allowed')
      newText = newText.replace("@", "");
    }
    setText(newText);
  };

  useEffect(
    function () {
      console.log(text);
    },
    [text]
  );
  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="enter your text"
        spellCheck="false"
        
      />
      {showWarning ? <Warning warningText={warningText} /> : null}
      
    </div>
  );
}
