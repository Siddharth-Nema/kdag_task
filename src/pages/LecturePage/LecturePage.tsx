import TopNavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

export default function LecturePage() {
  return (
    <div className="LecturePage">
      <TopNavBar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex-1">
          <h4 className="text-xl font-semibold px-36 pt-20 text-left">
            Module 1. Introduction to Stock Market
          </h4>
          <div className="flex flex-row items-end justify-between px-36">
            <h2 className="text-3xl font-bold py-5">1. The Need to Invest</h2>
            <div className="flex flex-row">
              <a className="mx-10 hover:text-sky-500" href="/module1">
                Chapters
              </a>
              <a className="hover:text-sky-500" href="/page">
                Next
              </a>
            </div>
          </div>
          <hr className="mx-28 my-5" />
        </div>
      </div>
    </div>
  );
}
