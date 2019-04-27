import React from 'react';
import './App.scss';
import TopbarMain from '../Topbar/components/TopbarMain/TopbarMain';
import SidebarMain from '../Sidebar/components/SidebarMain/SidebarMain';
import FilterBar from '../Filterbar/components/FilterBar/FilterBar';
import GraphContainer from '../Graphs/components/GraphContainer/GraphContainer';
import AirTable from '../AirplaneTable/components/Table/Table';



function App() {
  return (
    <div className="App">
      <TopbarMain/>
      <SidebarMain/>
      <FilterBar/>
      <GraphContainer/>
      <AirTable/>
    </div>
  );
}

export default App;
