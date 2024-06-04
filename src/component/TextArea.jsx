import { useEffect, useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [text, setText] = useState("");
  const [warningText, setWarningText]=useState('')

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarningText('no script tag allowed')
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText('no "@" allowed')
      newText = newText.replace("@", "");
    } else {
        setWarningText('')
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
      {warningText ? <Warning warningText={warningText} /> : null}
      
    </div>
  );
}
