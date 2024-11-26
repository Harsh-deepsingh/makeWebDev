"use client";
import DashboardInput from "@repo/ui/DashboardDiv";
import React, { useState } from "react";
import icons from "../../lib/icon";
import { MdDelete } from "react-icons/md";
import { IconType } from "react-icons";
import SelectCard from "./SelectCard";

interface IconItem {
  component: IconType;
  color: string;
}

const TechSection = () => {
  const [search, setSearch] = useState("");
  const [selectedIcons, setSelectedIcons] = useState<IconItem[]>([]);

  const filteredIcons = icons
    .filter((icon: IconItem) =>
      icon.component.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((icon) => !selectedIcons.includes(icon));

  const handleIconClick = (icon: IconItem) => {
    addIconToArray(icon);
  };

  const addIconToArray = (icon: IconItem) => {
    setSelectedIcons((prevIcons) => [...prevIcons, icon]);
  };

  const handleDeleteLast = () => {
    setSelectedIcons((prevIcons) => prevIcons.slice(0, -1));
  };

  return (
    <>
      <div className="py-4 ">
        <div className="p-4 flex flex-col items-center  justify-center min-h-32 border-2 border-dashed border-gray-300 rounded-md">
          {selectedIcons.length === 0 ? (
            <span>Click Icon and add here</span>
          ) : (
            <div className="flex flex-wrap gap-6">
              {selectedIcons.map((icon, index) => (
                <icon.component key={index} size={30} color={icon.color} />
              ))}
            </div>
          )}
        </div>

        <div className="my-4 w-full flex justify-end">
          <button
            onClick={handleDeleteLast}
            disabled={selectedIcons.length === 0}
          >
            <MdDelete
              size={20}
              className="text-red-500 hover:text-red-500/50"
            />
          </button>
        </div>

        <DashboardInput>
          <input
            className="bg-transparent focus:outline-none w-full p-2"
            placeholder="Search for an Icon"
            onChange={(e) => setSearch(e.target.value)}
          />
        </DashboardInput>

        <div className="mt-7 h-[500px] grid grid-cols-3 gap-7 overflow-x-hidden scrollbar-custom">
          {filteredIcons.map((icon, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleIconClick(icon)}
            >
              <icon.component size={30} color={icon.color} />
              <p className="text-xs mt-2">{icon.component.name.slice(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechSection;
