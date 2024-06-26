import { useEffect, useState } from 'react';
import TopNavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import styles from '../HomePage/HomePage.module.css';
import ModuleItem from './ModuleItem';
import { LectureRef, modules } from '../../data/modules';

export default function ModulePage() {
  const [module, setModule] = useState('');
  const [sideBar, setSideBar] = useState(false);
  const queryParameters: URLSearchParams = new URLSearchParams(
    window.location.search
  );

  useEffect(() => {
    setModule(queryParameters.get('moduleNum') ?? 'NOTFOUND');
  }, []);

  return module !== '' ? (
    <div className="ModulePage">
      <TopNavBar
        openSideBar={() => {
          setSideBar(!sideBar);
        }}
        sidebarStatus={sideBar}
      />
      <div className="flex flex-row">
        <Sidebar status={sideBar} />
        <div className="md:ml-48 mt-10">
          <h1 className="text-3xl text-center md:text-5xl px-24 font-bold pt-20 md:text-left">
            Week {module}
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between md:px-24 px-10">
            <h2 className="text-3xl font-bold py-5">
              {modules[`m${module}`] ? modules[`m${module}`].title : 'Loading'}
            </h2>
            <div className="flex justify-between">
              {parseInt(module) > 1 ? (
                <a
                  className="mr-3 hover:text-sky-500"
                  href={`/module?moduleNum=${parseInt(module) - 1}`}
                >
                  Previous
                </a>
              ) : null}
              {parseInt(module) < 5 ? (
                <a
                  className="hover:text-sky-500"
                  href={`/module?moduleNum=${parseInt(module) + 1}`}
                >
                  Next
                </a>
              ) : null}
            </div>
          </div>
          <hr className="px-10 md:px-24 my-5" />
          {modules[`m${module}`].lectures.map((lecture, index) => {
            return (
              <ModuleItem
                title={lecture.title}
                desc={lecture.desc}
                index={index}
                module={module}
              />
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}
