import { Input } from 'antd';
import React from 'react';
import { useState, useEffect } from "react";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
//import { load } from 'js-yaml'

const { TextArea } = Input;
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

function JsonToYaml() {
    const [json, setJson] = useState("");
    const [validJson, setValidJson] = useState("");
    const [yaml, setYAML] = useState("");
    //const [jsonOutput, setJsonOutput] = React.useState('')

    useEffect(() => {
        //const value = localStorage.getItem('json')
        //setJson(value)
        //log({ target: { value } })

    }, []);

 
    function validateJson() {
        setValidJson(json)
    }

    function converJsonToYaml() {

        const YAML = require('yaml');
        // parse YAML string
        const nativeObject = YAML.parse(json);

        // Generate YAML
        const yamlString = YAML.stringify(nativeObject, 4);
        setYAML(yamlString)
    }

    function clearData() {
        setJson("")
        setValidJson("")
        setYAML("")
    }

    function onCut() {
        setJson("")
        setValidJson("")
        setYAML("")
    }

    /*const log = ({ target: { value: json } }) => Promise.resolve(json)
        .then(load)
        .then(t => JSON.stringify(t, null, 2))
        .then(setJsonOutput)
        .then(() => localStorage.setItem('json', json))*/

    return (
        <>
           
                <TextArea
                    style={{ height: '400px', width: '800px' }}
                    rows={4}
                    type="text"
                    value={json}
                    //defaultValue={json}
                    //onChange={log}
                    onCut={onCut}
                    onChange={(e) => setJson(e.target.value)}
                />

                <div style={{ marginTop: '-410px', marginLeft: '830px' }}>
                    <JSONPretty style={{ marginTop: '10px', height: '410px', display: 'flex' }} data={validJson} theme={JSONPrettyMon} themeClassName="custom-json-pretty"></JSONPretty>
                </div>

                <button style={{ marginLeft: '300px', float: 'left' }} onClick={validateJson}>Validate Json</button>
                <button style={{ marginLeft: '10px', float: 'left' }} onClick={converJsonToYaml}>JSON TO YAML</button>
                <button style={{ marginLeft: '10px', float: 'left' }} onClick={clearData}>Clear</button>


                <TextArea rows={4}
                    style={{ height: '400px', width: '1450px', marginTop: '10px', marginBottom: '10px' }}
                    type="text"
                    value={yaml}
                />
        </>
    );
}

export default JsonToYaml;
