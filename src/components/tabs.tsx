import React, { useState } from "react";

const Tabs = ({ tabs, selectedTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(selectedTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <ul>
        {tabs.map((tab, i) => (
          <li key={i} onClick={() => handleTabClick(i)}>
            {tab.title}
          </li>
        ))}
      </ul>
      <div>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;