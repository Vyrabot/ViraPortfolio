import React from "react";
import CountUp from "react-countup";
function Stat() {
  const number = [{ num: 0 }, { num: 0 }, { num: 5 }, { num: 8 }];
  return (
    <>
      <div className="main-container absolute w-full h-auto bottom-8 left-0 hidden md:flex justify-between">
        <div className="flex items-center">
          <div className="w-[50px] text-5xl sm:text-6xl md:text-7xl">
            <CountUp
              className="dark:text-white text-Primery"
              end={number[0].num}
              duration={5}
              delay={2}
            />
          </div>
          <div className="text-gray-400 flex flex-col justify-center items-start py-3">
            <p>
              Years of
              <br />
              experience
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[50px] text-5xl sm:text-6xl md:text-7xl">
            <CountUp
              className="dark:text-white text-Primery"
              end={number[1].num}
              duration={5}
              delay={2}
            />
          </div>
          <div className="text-gray-400 flex flex-col justify-center items-start py-3">
            <p>
              Happy
              <br />
              Client
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[50px] text-5xl sm:text-6xl md:text-7xl">
            <CountUp
              className="dark:text-white text-Primery"
              end={number[2].num}
              duration={5}
              delay={1}
            />
          </div>
          <div className="text-gray-400 flex flex-col justify-center items-start py-3">
            <p>
              Projects
              <br />
              Completed
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[50px] text-5xl sm:text-6xl md:text-7xl">
            <CountUp
              className="dark:text-white text-Primery"
              end={number[3].num}
              duration={5}
              delay={1}
            />
          </div>
          <div className="text-gray-400 flex flex-col justify-center items-start py-3">
            <p>
              Code
              <br />
              Commits
            </p>
          </div>
        </div>
      </div>
      <div className="main-container w-full h-auto mt-8 md:hidden flex justify-start overflow-x-auto">
        <div className="flex gap-6">
          <div className="flex items-center">
            <div className="w-[40px] text-4xl">
              <CountUp
                className="dark:text-white text-Primery"
                end={number[0].num}
                duration={5}
                delay={2}
              />
            </div>
            <div className="text-gray-400 flex flex-col justify-center items-start py-3">
              <p>
                Years of
                <br />
                experience
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[40px] text-4xl">
              <CountUp
                className="dark:text-white text-Primery"
                end={number[1].num}
                duration={5}
                delay={2}
              />
            </div>
            <div className="text-gray-400 flex flex-col justify-center items-start py-3">
              <p>
                Happy
                <br />
                Client
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[40px] text-4xl">
              <CountUp
                className="dark:text-white text-Primery"
                end={number[2].num}
                duration={5}
                delay={1}
              />
            </div>
            <div className="text-gray-400 flex flex-col justify-center items-start py-3">
              <p>
                Projects
                <br />
                Completed
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[40px] text-4xl">
              <CountUp
                className="dark:text-white text-Primery"
                end={number[3].num}
                duration={5}
                delay={1}
              />
            </div>
            <div className="text-gray-400 flex flex-col justify-center items-start py-3">
              <p>
                Code
                <br />
                Commits
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stat;
