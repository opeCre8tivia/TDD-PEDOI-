import React from "react";
import {
  AiFillBook,
  AiFillApple,
  AiFillBulb,
  AiFillCalendar,
} from "react-icons/ai";

const CircleList = () => {
  const _list = [
    {
      title: "Development",
      icon: <AiFillBook color="green" size={40} />,
    },
    {
      title: "Enterprise",
      icon: <AiFillApple color="green" size={40} />,
    },
    {
      title: "Casava Cluster",
      icon: <AiFillBulb color="green" size={40} />,
    },
    {
      title: "ICT Cluster",
      icon: <AiFillCalendar color="green" size={40} />,
    },
  ];

  let RoundDiv = ({ item }: any) => (
    <div className=" h-fit w-auto flex flex-col items-center justify-center relative top-[-60px] ">
      <div className="w-[100px] h-[100px] rounded-full bg-white p-2 m-3 flex justify-center items-center">
        {item.icon}
      </div>
      <div className="m-6 font-bold text-[16px] text-gray-600 text-center uppercase">
        {item.title}
      </div>
    </div>
  );

  return (
    <div className="w-full h-fit bg-gray-200 flex justify-center md:justify-around gap-10  flex-wrap relative">
      {_list &&
        _list.map((item, index) => <RoundDiv item={item} key={index} />)}
    </div>
  );
};

export default CircleList;
