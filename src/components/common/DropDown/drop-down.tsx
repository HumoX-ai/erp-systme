/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage } from "formik";
import React, { useState } from "react";
import { SvgIcon } from "../../ui/svgIcon";
import { DropdownProps, Option } from "../ModalFooter/types";

const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  errorName,
  initialValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: Option) => {
    setIsOpen(false);
    onSelect && onSelect(option);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className={`flex w-full bg-[#F4F4F5] py-[11px] cursor-pointer transition-all px-4 border-2 border-gray-200 rounded-xl shadow-sm hover:border-gray-400 focus:border-gray-400 text-sm items-center justify-between ${
          initialValue ? "text-black" : "text-gray-500"
        }`}
        onClick={toggleDropdown}
      >
        {initialValue ? initialValue.label : "Mahsulot brendi"}
        <SvgIcon
          iconName={isOpen ? "arrow-vertikal" : "arrow-horizontal"}
          strokeColor="#AFB0B8"
          fillColor="#AFB0B8"
          width="30"
          height="30"
        />
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md">
          {options.map((option) => (
            <li
              key={option.value}
              className="flex items-center justify-between py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer text-gray-500"
              onClick={() => handleSelect(option)}
            >
              {option.label}

              {initialValue?.value === option?.value ? (
                <SvgIcon
                  width="20"
                  height="20"
                  iconName="check"
                  strokeColor="#AFB0B8"
                  fillColor="#AFB0B8"
                />
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      )}
      {errorName && (
        <div className="text-red-500 text-sm">
          <ErrorMessage name={errorName} />
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
