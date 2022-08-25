import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import JsonToYaml from './Pages/JsonToYaml';
import { Tabs } from 'antd';
import reportWebVitals from './reportWebVitals';

const { TabPane } = Tabs;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="JSON To YAML " key="1">
        <React.StrictMode>
          <JsonToYaml />
        </React.StrictMode>
      </TabPane>
      <TabPane tab="Tab Title 2" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="Tab Title 3" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  </div>

);

reportWebVitals();
