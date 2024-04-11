"use client";
import React from "react";
import PopularProdList from "./Comp/PopularProdList";
import { useDispatch } from "react-redux";
import { ProTypeRed } from "../Redux/Slice/ProductTypeSlice";
import { setLastIndex } from "../Redux/Slice/LoadMore";
export default function PopularProd() {
  const dispatch = useDispatch();

  const img = [
    { name: "All", value: "" },
    { value: "Cricket", name: "Cricket" },
    { value: "Football", name: "Football" },
    { value: "Hockey", name: "Hockey" },
    { value: "Gym", name: "Gym" },
    { value: "Basketball", name: "Basketball" },
    { value: "Tennis", name: "Tennis" },
    { value: "Badminton", name: "Badminton" },
    { value: "Boxing", name: "Boxing" },
  ];

  const [selType, setSelType] = React.useState("");
  const SelectType = (selType) => {
    dispatch(ProTypeRed(selType));
    dispatch(setLastIndex(8));
    setSelType(selType);
  };

  return (
    <>
      <main className="flex flex-col bg-white justify-center  items-center  gap-7  ">
        <h1 className="text- font-bold text-xl"> Popular Sport Equipments</h1>
        <div
          id="prod"
          className="flex lg:flex-row flex-col gap-[15px]  justify-center items-center "
        >
          <div className="flex mt-3 flex-wrap gap-4 lg:gap-10 justify-center items-center">
            {img?.map((i) => {
              return (
                <>
                  <p
                    key={i}
                    onClick={() => SelectType(i.value)}
                    className={
                      selType === i.value
                        ? `font-semibold text-xs lg:text-sm  bg-teal-500 rounded-lg p-2 text-white  hover:-translate-y-1 cursor-pointer`
                        : `font-semibold text-xs bg-gray-50 rounded-lg p-2 text-gray-800  hover:-translate-y-1 cursor-pointer`
                    }
                  >
                    {i.name}
                  </p>
                </>
              );
            })}
          </div>
        </div>
        <PopularProdList selType={selType} />
      </main>
    </>
  );
}
