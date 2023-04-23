/* eslint-disable react/prop-types */
const TimelinePoint = ({ period, title, company, tasks }) => {
  return (
    <div className="border-l-2 relative border-white pl-24 md:pl-40  pb-24">
      <span className="absolute bg-white font-black text-md px-6 top-0 left-0 text-black w-auto h-10 rounded-full text-center flex items-center justify-center -translate-x-[50%]">
        {period}
      </span>
      <div className="-translate-y-1 space-y-3">
        <h3 className="md:text-3xl text-xl font-bold flex flex-col">
          {title}{" "}
          <span className="md:text-2xl text-lg font-semibold text-slate-400">
            {company}
          </span>
        </h3>
        <ul className="flex flex-col gap-2 text-md">
          {tasks &&
            tasks.map((task, i) => {
              return <li key={i}>{task}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default TimelinePoint;
