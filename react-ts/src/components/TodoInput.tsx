import { useState } from "react";

interface Props {
    onAdd: (text: string) => void;
}

function TodoInput ({ onAdd }: Props) {

    const [text, setText] = useState('');

    const handleAdd = () => {
        if(text.trim()) {
            onAdd(text);
            setText('');
        }
    };

   return (
    <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
    </div>
   )
}

export default TodoInput;