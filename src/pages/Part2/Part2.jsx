import React, { useState } from "react";
import "./Part2.css";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("busTour");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-navigation">
      <div className="tabs">
        <button
          className={activeTab === "busTour" ? "tab active" : "tab"}
          onClick={() => handleTabClick("busTour")}
        >
          Автобусный тур
        </button>
        <button
          className={activeTab === "jeeping" ? "tab active" : "tab"}
          onClick={() => handleTabClick("jeeping")}
        >
          Джиппинг
        </button>
        <button
          className={activeTab === "yachting" ? "tab active" : "tab"}
          onClick={() => handleTabClick("yachting")}
        >
          Яхтинг
        </button>
        <button
          className={activeTab === "canyoning" ? "tab active" : "tab"}
          onClick={() => handleTabClick("canyoning")}
        >
          Каньонинг
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "busTour" && <div><div className="filters">
        <div className="filter">
          <span className="icon">📍</span>
          <input type="text" placeholder="Абхазия" />
        </div>
        <div className="filter">
          <span className="icon">📅</span>
          <input type="date" />
        </div>
        <div className="filter">
          <span className="icon">👤</span>
          <input type="number" placeholder="5 человек" />
        </div>
        <button className="show-button">Показать</button>
      </div>
           </div>}
        {activeTab === "jeeping" && <div>Content for Джиппинг</div>}
        {activeTab === "yachting" && <div>Content for Яхтинг</div>}
        {activeTab === "canyoning" && <div>Content for Каньонинг</div>}
      </div>
    </div>
  );
}
