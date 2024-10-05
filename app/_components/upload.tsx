'use client';

import { useState } from "react";

export default function UploadModal() {
    const [data, setData] = useState(false);
    return (
        <div>
            <button onClick={() => {
                console.log({data: data});
                setData(!data);
            }}>X</button>
            <div><h1>hello</h1></div>
        </div>
    );
}
