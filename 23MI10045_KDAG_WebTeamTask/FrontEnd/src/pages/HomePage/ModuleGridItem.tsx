import styles from './HomePage.module.css';

export default function ModuleGridItem({
  moduleNum,
  title,
  desc,
}: {
  moduleNum: string;
  title: string;
  desc: string;
}) {
  return (
    <a
      href={`/module?moduleNum=${moduleNum}`}
      className="m-10 p-5 border-solid border-2 border-sky-500 rounded-md shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
    >
      <div className=" flex flex-row items-center mb-3">
        <h1 className="text-3xl mr-2">Week {moduleNum}</h1>
        <div className={styles.bar + ' flex-1'}></div>
      </div>

      <h2 className="text-xl mb-3">{title}</h2>
      <p className="text-slate-500">{desc}</p>
    </a>
  );
}
