import React,{useState} from "react";
import {useDrop, useDrag} from "react-dnd";
import QuestionAnswer from "./QuestionAnswer";
import CategoryQAndA from "./CategoryQAndA";


const CategoryForm = props => {
    const {inputChange, category, setCategory} = props;


    return(
        <form action="">
            <div>
                <label htmlFor="">name</label>
                <input type="text"
                       name={'name'}
                       value={category.name}
                       className={'form-control w-25 m-auto'}
                        onChange={(e)=>inputChange(e)}
                />
            </div>
            <div>
                <label htmlFor="">$200</label>
                <CategoryQAndA
                    data={category[200]}
                    value={200}
                    setCategory={setCategory}
                />
            </div>
            <div>
                <label htmlFor="">$400</label>
                <CategoryQAndA
                    data={category[400]}
                    value={400}
                    setCategory={setCategory}
                />
            </div>
            <div>
                <label htmlFor="">$600</label>
                <CategoryQAndA
                    data={category[600]}
                    value={600}
                    setCategory={setCategory}
                />
            </div>
            <div>
                <label htmlFor="">$800</label>
                <CategoryQAndA
                    data={category[800]}
                    value={800}
                    setCategory={setCategory}
                />

            </div>
            <div>
                <label htmlFor="">$1000</label>
                <CategoryQAndA
                    data={category[1000]}
                    value={1000}
                    setCategory={setCategory}
                />
            </div>
        </form>
    )
};

export default CategoryForm;