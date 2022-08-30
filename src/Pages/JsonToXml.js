import { Input } from 'antd';
import React from 'react';
import { useState } from "react";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import {Buffer} from 'buffer';
window.Buffer = Buffer;

const { TextArea } = Input;
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

function JsonToXml() {
    const [json, setJson] = useState("");
    const [validJson, setValidJson] = useState("");
    const [xml, setXML] = useState("");

    function validateJson() {
        setValidJson(json)
    }

    function converJsonToXml() {
        const convert = require('xml-js');
        const options = { compact: true, ignoreComment: true, spaces: 4 };

        const xmlString = convert.json2xml(json, options);

        // Generate XML
        setXML(xmlString)
    }

    function clearData() {
        setJson("")
        setValidJson("")
        setXML("")
    }

    function onCut() {
        setJson("")
        setValidJson("")
        setXML("")
    }

    return (
        <>
            <TextArea
                style={{ height: '400px', width: '800px' }}
                rows={4}
                type="text"
                value={json}
                onCut={onCut}
                onChange={(e) => setJson(e.target.value)}
            />

            <div style={{ marginTop: '-410px', marginLeft: '830px' }}>
                <JSONPretty style={{ marginTop: '10px', height: '410px', display: 'flex' }} data={validJson} theme={JSONPrettyMon} themeClassName="custom-json-pretty"></JSONPretty>
            </div>

            <button style={{ marginLeft: '300px', float: 'left' }} onClick={validateJson}>Validate Json</button>
            <button style={{ marginLeft: '10px', float: 'left' }} onClick={converJsonToXml}>JSON TO XML</button>
            <button style={{ marginLeft: '10px', float: 'left' }} onClick={clearData}>Clear</button>


            <TextArea rows={4}
                style={{ height: '400px', width: '1450px', marginTop: '10px', marginBottom: '10px' }}
                type="text"
                value={xml}
            />
        </>
    );
}

export default JsonToXml;
