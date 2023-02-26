import React, {useState} from "react";

function ColorForm(props){
    let [input, setInput] = useState('')

    const handlesubmit = (e) => {
        e.preventDefault()
        props.addColor(input)
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type='text' 
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm