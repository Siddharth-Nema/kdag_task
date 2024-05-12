import TopNavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import styles from './HomePage.module.css';
import ModuleGridItem from './ModuleGridItem';

export default function HomePage() {
  return (
    <div className=" text-left font-sans">
      {/* <Sidebar /> */}
      <TopNavBar />
      <h1 className="text-5xl font-bold pt-20 px-10">Modules</h1>
      <div className={styles.modulesGrid}>
        <ModuleGridItem moduleNum="1" title="Python" desc="Lets learn Python" />
        <ModuleGridItem moduleNum="1" title="Python" desc="Lets learn Python" />
        <ModuleGridItem moduleNum="1" title="Python" desc="Lets learn Python" />
        <ModuleGridItem moduleNum="1" title="Python" desc="Lets learn Python" />
        <ModuleGridItem moduleNum="1" title="Python" desc="Lets learn Python" />
        <ModuleGridItem moduleNum="1" title="Python" desc="Lets learn Python" />
        <ModuleGridItem moduleNum="1" title="Python" desc="Lets learn Python" />
      </div>
    </div>
  );
}
