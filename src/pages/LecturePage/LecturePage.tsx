import { useEffect, useState } from 'react';
import TopNavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import { modules } from '../../data/modules';

export default function LecturePage() {
  const [module, setModule] = useState(-1);
  const [lecture, setLecture] = useState(-1);
  const queryParameters: URLSearchParams = new URLSearchParams(
    window.location.search
  );

  useEffect(() => {
    var m: string = queryParameters.get('moduleNum') ?? '';
    var l: string = queryParameters.get('lecNo') ?? '';

    setModule(m !== '' ? parseInt(m) : -2);
    setLecture(l !== '' ? parseInt(l) : -2);
  }, []);
  return module >= 0 && lecture >= 0 ? (
    <div className="LecturePage">
      <TopNavBar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex-1">
          <h4 className="text-xl font-semibold px-36 pt-20 text-left">
            Module {module}. {modules[`m${module}`].title}
          </h4>
          <div className="flex flex-row items-end justify-between px-36">
            <h2 className="text-3xl font-bold py-5">
              {lecture + 1}. {modules[`m${module}`].lectures[lecture].title}
            </h2>
            <div className="flex flex-row">
              {lecture > 0 ? (
                <a
                  className="mr-3 hover:text-sky-500"
                  href={`/lecture?moduleNum=${module}&lecNo=${lecture - 1}`}
                >
                  Previous
                </a>
              ) : null}

              <a
                className=" hover:text-sky-500"
                href={`/module?moduleNum=${module}`}
              >
                Chapters
              </a>
              {lecture < modules[`m${module}`].lectures.length - 1 ? (
                <a
                  className="hover:text-sky-500 ml-3"
                  href={`/lecture?moduleNum=${module}&lecNo=${lecture + 1}`}
                >
                  Next
                </a>
              ) : null}
            </div>
          </div>
          <hr className="mx-28 my-5" />
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}
