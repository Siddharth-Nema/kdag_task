export default function ModuleItem({
  title,
  desc,
  index,
  module,
}: {
  title: string;
  desc: string;
  index: number;
  module: string;
}) {
  return (
    <a href={`/lecture?moduleNum=${module}&lecNo=${index}`}>
      <div className="px-10 md:px-40 py-5">
        <h1 className="text-2xl text-left font-semibold transition hover:text-sky-500">
          {index + 1}. {title}
        </h1>
        <h3 className="text-md text-left text-slate-600">{desc}</h3>
      </div>
    </a>
  );
}
