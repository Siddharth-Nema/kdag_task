export default function ModuleItem({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <a href="/module/lec1">
      <div className=" px-40 py-5">
        <h1 className="text-2xl text-left font-semibold transition hover:text-sky-500">
          {title}
        </h1>
        <h3 className="text-md text-left text-slate-600">{desc}</h3>
      </div>
    </a>
  );
}
