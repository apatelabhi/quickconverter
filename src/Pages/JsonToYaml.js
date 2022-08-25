import { Input } from 'antd';
import React from 'react';
import { useState, useEffect } from "react";
const { TextArea } = Input;


function JsonToYaml() {
    const [json, setJson] = useState("");
    const [yaml, setYAML] = useState("");

    useEffect(() => {
        // storing input json
        localStorage.setItem("json", JSON.stringify(json));
    }, [json]);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const YAML = require('json-to-pretty-yaml');

        const data = YAML.stringify(json);
        setYAML(data)
        localStorage.setItem("yaml", data);

        //alert(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit}> 
                <TextArea
                    rows={4}
                    type="text"
                    value={json}
                    onChange={(e) => setJson(e.target.value)}
                />

                <br />
                <input type="submit" value="JSON TO YAML"></input>

                <br />
                <TextArea rows={4} 
                placeholder="maxLength is 6" 
                maxLength={6} 
                type="text"
                value={yaml}
                />

            </form>

        </>
    );
}

export default JsonToYaml;
