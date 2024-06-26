import { modules } from '../data/modules';

export default function Sidebar({ status }: { status: boolean }) {
  var width: number = window.screen.width;
  var displayCSS = '';

  if (width > 640) {
    displayCSS = '';
  } else if (status) {
    displayCSS = '';
  } else {
    displayCSS = 'hidden';
  }

  console.log(displayCSS);

  function getModules() {
    var list: React.ReactElement[] = [];
    var count: number = 1;
    for (var key in modules) {
      list.push(
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="text-sm font-medium">{modules[key].title}</span>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              {modules[key].lectures.map((value, lecIndex) => {
                return (
                  <li>
                    <a
                      href={`/lecture?moduleNum=${count}&lecNo=${lecIndex}`}
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      {value.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </li>
      );
      count++;
    }

    return list;
  }
  return displayCSS === '' ? (
    <div className="sidebar">
      <div
        className={`sidebar  fixed mt-10 h-screen ${displayCSS} flex-col justify-between border-e bg-white w-64`}
      >
        <div className="px-4 py-6">
          <ul className="mt-6 space-y-1">
            {getModules().map((value) => value)}
          </ul>
        </div>

        <div className="sticky inset-x-0  bottom-0 border-t border-gray-100">
          <a href="/" className="flex items-center gap-2 p-4 hover:bg-gray-50">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="size-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  ) : null;
}

//Simple
{
  /* <li>
<a
  href="#"
  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
>
  Billing
</a>
</li> */
}

//DropDown
{
  /* <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Teams </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Banned Users
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
              </details>
            </li> */
}
