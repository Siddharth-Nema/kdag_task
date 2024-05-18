import React from 'react';
import TopNavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import { modules } from '../../data/modules';
import styles from './HomePage.module.css';
import ModuleGridItem from './ModuleGridItem';

export default function HomePage() {
  function getModules() {
    var list: React.ReactElement[] = [];
    var count: number = 1;
    for (var key in modules) {
      list.push(
        <ModuleGridItem
          moduleNum={(count++).toString()}
          title={modules[key].title}
          desc={modules[key].desc}
        />
      );
    }

    return list;
  }

  return (
    <div className=" text-left font-sans">
      {/* <Sidebar /> */}
      <TopNavBar openSideBar={() => {}} sidebarStatus={false} />
      <h1 className="text-5xl font-bold pt-20 px-10">Modules</h1>
      <div className={styles.modulesGrid}>
        {getModules().map((value) => value)}
      </div>
    </div>
  );
}
