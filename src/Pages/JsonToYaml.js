import { Input, Button } from 'antd';
import React from 'react';
const { TextArea } = Input;

function JsonToYaml() {
  return (
    <>
    <TextArea rows={4} />
    <br />
    <Button type="primary">Primary Button</Button>
    <br />
    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
    </>
  );
}

export default JsonToYaml;
