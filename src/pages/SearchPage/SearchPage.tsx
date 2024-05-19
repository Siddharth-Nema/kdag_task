import { useEffect, useState } from 'react';
import TopNavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import { LectureRef, modules } from '../../data/modules';
import ModuleItem from '../ModulePage/ModuleItem';

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState('NULL');
  const [sideBar, setSideBar] = useState(false);

  const queryParameters: URLSearchParams = new URLSearchParams(
    window.location.search
  );

  function getSearchResults(query: string) {
    var list: LectureRef[] = [];

    for (var module in modules) {
      modules[module].lectures.forEach((lecture) => {
        if (
          lecture.title
            .toLocaleLowerCase()
            .includes(`${query.toLocaleLowerCase()}`)
        ) {
          list.push(lecture);
        }
      });
    }

    return list;
  }

  useEffect(() => {
    var query: string = queryParameters.get('q') ?? 'NOTFOUND';
    setSearchValue(query);
  }, []);

  return searchValue !== 'NULL' ? (
    <div className="ModulePage">
      <TopNavBar
        openSideBar={() => {
          setSideBar(!sideBar);
        }}
        sidebarStatus={sideBar}
      />
      <Sidebar status={sideBar} />
      <div className="flex flex-row">
        <Sidebar status={sideBar} />
        <div className="md:ml-48 mt-10">
          <h1 className="text-3xl text-center md:text-5xl px-24 font-bold pt-20 md:text-left">
            Search Results for : {searchValue}
          </h1>
          <hr className="mx-10 md:px-24 my-5" />
          {getSearchResults(searchValue).map((lecture, index) => {
            return (
              <ModuleItem
                title={lecture.title}
                desc={lecture.desc}
                index={index}
                module={'1'}
              />
            );
          })}
          {/* {modules[`m${module}`].lectures.map((lecture, index) => {
            return (
              <ModuleItem
                title={lecture.title}
                desc={lecture.desc}
                index={index}
                module={'m1'}
              />
            );
          })} */}
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}
