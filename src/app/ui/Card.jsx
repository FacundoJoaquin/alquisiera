import Image from "next/image";
import React from "react";
import { Link } from "../components/icons/Link";

const Card = ({ data }) => {
  function truncateString(str) {
    const maxLength = 50;
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength) + "...";
    }
  }

  return (
    <div className="h-[27rem] w-full border border-gray-300 shadow-md shadow-lightBlue bg-lightBlue rounded-3xl p-4 flex flex-col gap-y-2 hover:scale-[1.03] transition-all duration-200 cursor-default xs:w-full xs:h-max">
      <div className="w-full flex justify-center">
        <div className="size-40 rounded-full  overflow-hidden border border-white outline-1">
          <Image
            src={data.imgUrl || imgNotFound}
            alt={`Alquiler Puerto Madryn, en la dirección ${data.location} y ${data.title}`}
            height={1000}
            width={1000}
            className="aspect-square"
          />
        </div>
      </div>
      <div className="text-start px-1 mt-2 flex flex-col gap-y-2">
        <h3 className="font-semibold text-xl">{truncateString(data.title)}</h3>
        <p className="text-gray-400 text-lg">{data.location}</p>
      </div>
      <div className="flex mt-auto justify-between text-lg">
        <span className="">
          <p className="text-sm text-gray-400">{data.company}</p>
          <p className="font-semibold">
            {data.price ? `$${data.price.replace(/\./g, "")}` : "Sin precio"}
          </p>
        </span>
        <a
          href={data.link}
          target="__BLANK"
          className="size-12 rounded-lg text-2xl grid place-items-center border border-strongMainBlue hover:bg-mainBlue hover:text-white transition-all duration-300"
        >
          <Link />
        </a>
      </div>
    </div>
  );
};

export default Card;