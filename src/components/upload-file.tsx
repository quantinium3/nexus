"use client"

import { useRef } from "react"

export default function UploadFile() {
    const inputRef = useRef<HTMLInputElement>(null);
    function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (!files) return;

    
    }

    function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        console.log(inputRef)
        if (!inputRef || !inputRef.current) return;

        inputRef.current.click();
    }

    return (
        <form>
            <button onClick={handleButtonClick}>Upload File</button>
            <input ref={inputRef} type='file' hidden onChange={handleFileUpload} />
        </form>
    );
}
