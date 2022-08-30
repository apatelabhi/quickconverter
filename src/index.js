import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import JsonToYaml from './Pages/JsonToYaml';
import JsonToXml from './Pages/JsonToXml';
import { Tabs } from 'antd';
import reportWebVitals from './reportWebVitals';

const { TabPane } = Tabs;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="JSON To YAML" key="1">
        <React.StrictMode>
          <JsonToYaml />
        </React.StrictMode>
      </TabPane>
      <TabPane tab="JSON To XML" key="2">
      <React.StrictMode>
          <JsonToXml />
        </React.StrictMode>
      </TabPane>
      {/*<TabPane tab="Tab Title 3" key="3">
      </TabPane>*/}
    </Tabs>
  </div>

);

reportWebVitals();
