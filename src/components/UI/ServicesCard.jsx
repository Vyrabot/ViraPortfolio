import HireBtn from "./MainBtn";
function ServicesCard(props) {
  const { icon, name, title } = props;
  return (
    <div className="relative dark:bg-servicesBg bg-white overflow-hidden md:w-full h-auto md:h-auto text-center flex flex-row md:flex-col items-center justify-start md:justify-between border-[1px] border-solid border-accent py-4 px-2 rounded-xl">
      <div className="sm:w-[300px] sm:h-full flex justify-center items-center sm:px-2">
        <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] border-2 border-solid border-accent-hover flex items-center justify-center">
          <div className="text-3xl md:text-4xl text-accent hover:text-accent-hover">
            {icon}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-accent font-semibold text-xl mt-2 md:mt-4">
          {name}
        </h3>
        <p className="dark:text-gray-400 text-gray-700 text-start md:text-center">
          {title}
        </p>
        <HireBtn name="Read More.." />
      </div>
      <div className="absolute w-full h-1 bottom-0 md:h-full md:w-1 md:top-0 bg-accent left-0"></div>
    </div>
  );
}

export default ServicesCard;
