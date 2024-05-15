import { useEffect, useState } from 'react';
import TopNavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import styles from '../HomePage/HomePage.module.css';
import ModuleItem from './ModuleItem';
import { LectureRef, modules } from '../../data/modules';

export default function ModulePage() {
  const [module, setModule] = useState('');
  const queryParameters: URLSearchParams = new URLSearchParams(
    window.location.search
  );

  useEffect(() => {
    setModule(queryParameters.get('moduleNum') ?? 'NOTFOUND');
  }, []);

  return module != '' ? (
    <div className="ModulePage">
      <TopNavBar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="">
          <h1 className="text-5xl px-24 font-bold pt-20 text-left">
            Week {module}
          </h1>
          <div className="flex flex-row items-end justify-between px-24">
            <h2 className="text-3xl font-bold py-5">
              {modules[`m${module}`] ? modules[`m${module}`].title : 'Loading'}
            </h2>
            <div>
              {parseInt(module) > 1 ? (
                <a
                  className="mr-3"
                  href={`/module?moduleNum=${parseInt(module) - 1}`}
                >
                  Previous
                </a>
              ) : null}
              <a href={`/module?moduleNum=${parseInt(module) + 1}`}>Next</a>
            </div>
          </div>
          <hr className="mx-24 my-5" />
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
          {/* <ModuleItem
            title="1. The Need to Invest"
            desc="Learn about the importance of savings. Identify avenues to invest the savings in suitable investment vehicle. Compare historical returns generated by different assets, and know what to expect from you .."
          />
          <ModuleItem
            title="2. Regulators, the guardians of capital markets"
            desc="Find out who and how the regulators govern the financial markets and also understand different types of financial market participants. Understand the need to regulate the markets. .."
          />
          <ModuleItem
            title="3. Market Intermediaries"
            desc="An overview of the financial intermediaries in the Indian stock market and the services they offer. .."
          />
          <ModuleItem
            title="1. The Need to Invest"
            desc="Learn about the importance of savings. Identify avenues to invest the savings in suitable investment vehicle. Compare historical returns generated by different assets, and know what to expect from you .."
          /> */}
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}