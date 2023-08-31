import React, {useState} from 'react';
import {useWhyDidYouUpdate} from "ahooks";



type CategoryProps = {
    selectedCategory: number;
     setSelectedCategory: (i: number) => void;
}



const Category: React.FC<CategoryProps> = React.memo(({selectedCategory, setSelectedCategory}) => {
        useWhyDidYouUpdate('Category', {selectedCategory,setSelectedCategory})


        const OnChangeCategories = (index:number) => {
            setSelectedCategory(index)
        }


        const categories = ['All', 'Fastest', 'Cheapest', 'Nearest', 'Private', 'Closed']




        return (
            <>
                <div className="categories">
                    <ul>
                        {categories.map((value, index) => <li
                            key={index}
                            onClick={() => OnChangeCategories(index)}
                            className={selectedCategory === index ? 'active' : ''}>{value}</li>)}
                    </ul>
                </div>
            </>
        );
    })
    ;

export default Category;