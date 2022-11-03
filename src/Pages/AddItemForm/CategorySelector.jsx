import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCaretDownFill } from "react-icons/bs";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { Label, LabelTitle, Arrow } from "./CategorySelectorElements";

const CategorySelector = ({
  category,
  selectedCategories,
  setSelectedCategories,
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      setChecked(true);
      setSelectedCategories([...selectedCategories, event.target.value]);
    } else {
      setChecked(false);
      let newCategories = selectedCategories;
      const index = newCategories.indexOf(event.target.value);
      if (index > -1) {
        newCategories.splice(index, 1);
      }
      setSelectedCategories(newCategories);
    }

    // console.log(selectedCategories);
  };

  return (
    <>
      <Label>
        <LabelTitle>{category.name}</LabelTitle>
        <input type="checkbox" onChange={handleChange} value={category.id} />
        <Arrow>{checked ? <AiOutlineDown /> : <AiOutlineRight />}</Arrow>
      </Label>
      {checked ? (
        <>
          {category.children ? (
            <>
              {category.children.map((child, index) => {
                return (
                  <>
                    <CategorySelector
                      key={index}
                      category={child}
                      selectedCategories={selectedCategories}
                      setSelectedCategories={setSelectedCategories}
                    />
                  </>
                );
              })}
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default CategorySelector;
