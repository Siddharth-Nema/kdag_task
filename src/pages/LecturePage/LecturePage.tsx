import { useEffect, useState } from 'react';
import TopNavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import { modules } from '../../data/modules';
import styles from './LecturePage.module.css';

export default function LecturePage() {
  const [module, setModule] = useState(-1);
  const [sideBar, setSideBar] = useState(false);
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
      <TopNavBar
        openSideBar={() => {
          setSideBar(!sideBar);
        }}
        sidebarStatus={sideBar}
      />
      <div className="flex flex-row text-center">
        <Sidebar status={sideBar} />
        <div className="flex-1 md:ml-36 mt-10 ">
          <h4 className="text-xl font-semibold md:px-36 pt-20 md:text-left">
            Module {module}. {modules[`m${module}`].title}
          </h4>
          <div className="flex flex-col md:flex-row md:items-end justify-between md:px-36">
            <h2 className="text-3xl font-bold py-5 ">
              {lecture + 1}. {modules[`m${module}`].lectures[lecture].title}
            </h2>
            <div className="flex flex-row justify-between px-8">
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
          <hr className="md:mx-28 my-5" />
          <div className="text-justify md:text-left px-10 md:px-36">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ex
              a felis suscipit scelerisque. Duis massa enim, molestie nec justo
              egestas, condimentum feugiat nisl. Nunc facilisis posuere massa
              eget imperdiet. Maecenas nisi lacus, feugiat at lorem placerat,
              pretium commodo est. Vivamus fringilla lacus urna, et ultricies
              lorem maximus nec. Sed nec libero quis odio scelerisque sagittis.
              Maecenas felis sapien, consectetur pellentesque massa eget,
              efficitur sollicitudin justo. Nam vel massa faucibus, sagittis ex
              eu, tincidunt tortor. Nunc malesuada lorem ac ante egestas,
              lacinia venenatis arcu egestas.
              <br />
              <br />
              Pellentesque sit amet ipsum erat. Vestibulum ac commodo mi, eu
              posuere massa. Curabitur quis faucibus nisl. Vivamus et egestas
              augue, eu ultrices nisi. Nullam malesuada interdum dolor sit amet
              imperdiet. Quisque semper dignissim ex. In sed congue leo. Cras
              purus sem, auctor accumsan est at, vehicula vehicula enim. Fusce
              sed metus tellus. Ut malesuada sagittis sollicitudin. Curabitur
              fermentum felis id nisl lobortis ornare. Fusce hendrerit interdum
              dui et dapibus. Pellentesque cursus mattis mi sit amet
              pellentesque. Etiam quis nibh hendrerit, porta magna eget,
              consequat dolor. Nullam sed vulputate metus. In tempus nibh at
              arcu faucibus, interdum fermentum dui tempus. Fusce condimentum
              magna risus, porttitor imperdiet metus pharetra vitae.
              <br />
              <br />
              Nulla molestie pulvinar neque id euismod. Nulla non orci eget erat
              finibus lobortis. Nulla nec urna semper, porta tellus sit amet,
              pulvinar enim. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Nunc lorem velit, ornare ut pellentesque at, fringilla
              vitae felis. Duis lobortis dolor faucibus, finibus quam in,
              accumsan enim. Maecenas at enim ut sem rhoncus pretium. Vestibulum
              vel erat arcu. Mauris sit amet eros interdum, lacinia sapien sit
              amet, malesuada nibh. Nulla ipsum risus, congue id tellus in,
              laoreet ornare ligula. In malesuada, lacus condimentum iaculis
              luctus, libero odio vehicula quam, sed auctor odio nibh in libero.
              <br />
              <br />
              Phasellus eu nunc nec nisl dapibus consequat. Nam malesuada tortor
              vel consectetur dapibus. Nulla posuere felis vel dictum commodo.
              Aliquam varius scelerisque elit vel lacinia. Pellentesque et elit
              in urna consectetur ornare. Donec vehicula malesuada ex tincidunt
              rhoncus. Proin dapibus rhoncus risus, sit amet cursus dolor
              venenatis ut. Etiam ipsum mauris, euismod eu neque at, aliquam
              semper sapien. Duis sit amet elit varius, pharetra risus eu,
              dignissim erat. Praesent et orci sed quam hendrerit tempus.
              Praesent egestas neque id mauris consequat, sit amet tempor quam
              semper. Aliquam egestas eros purus, eget gravida neque condimentum
              consectetur. Ut vel ultrices sem. Praesent quis nibh nibh. Sed
              vitae luctus metus. Aenean sed ipsum magna. Ut condimentum iaculis
              eleifend. Proin et odio in ipsum aliquam euismod.
              <br />
              <br />
              <ul className={`${styles.list} list-disc`}>
                <li>
                  <a href="https://www.coursera.org/learn/python-crash-course?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_python-crash-course_google_ftcof_learn_arte_may-24_dr_sem_rsa_gads_lg-all&campaignid=21252004699&adgroupid=161814720676&device=c&keyword=python%20courses&matchtype=p&network=g&devicemodel=&adposition=&creativeid=698202487832&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjw3ZayBhDRARIsAPWzx8pCPj3jmO13jJ9rWcmro-emW-JdeOvBdZOxo3knravvr0UkOhFyJLAaApu9EALw_wcB">
                    Python by Course
                  </a>
                </li>
                <li>
                  <a href="https://www.udemy.com/">
                    100 Days of Code: The Complete Python Pro Bootcamp
                  </a>
                </li>
                <li>
                  <a href="https://www.codecademy.com/catalog/language/python">
                    Codecademy
                  </a>
                </li>
                <li>
                  <a href="https://netninja.dev/courses/">Net Ninja</a>
                </li>
                <li>
                  <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
                </li>
                <li>
                  Nam efficitur augue in nunc sollicitudin, et hendrerit ante
                  bibendum.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}
