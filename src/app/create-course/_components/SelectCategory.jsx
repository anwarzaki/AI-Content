import React, { useContext } from "react";
import Image from "next/image";
import CategoryList from "../../_shared/CategoryList";
import { UserInputContext } from "../../_context/UserInputContext";

export default function SelectCategory() {
  const { UserCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: category,
    }));
  };

  return (
    <div className="grid grid-cols-3 gap-10 px-10 md:px-20">
      {CategoryList && CategoryList.length > 0 ? (
        CategoryList.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-5 border items-center rounded-xl 
      hover:border-[rgb(40,204,205)] hover:bg-blue-50 cursor-pointer ${
        UserCourseInput?.category == item.name && "border-primary bg-blue-50"
      }`}
            onClick={() => handleCategoryChange(item.name)}
            // defaultValue={UserCourseInput?.item.name}
          >
            <Image src={item.icon} width={50} height={50} alt={item.name} />
            <h2>{item.name}</h2>
          </div>
        ))
      ) : (
        <p>No categories available</p>
      )}
    </div>
  );
}
