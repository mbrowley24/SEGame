import React,{useMemo, useState} from "react";
import CategoryQAndA from "./CategoryQAndA";
import useCategory from "../hooks/useCategory";


const CategoryForm = props => {
    const {inputChange, category, setCategory, submit} = props;
    const {questionValidation, categoryFillBox} = useCategory();
    const validCategory = useMemo(()=>questionValidation(category),[category])
    return(
        <form onSubmit={submit} className={'bg-dark-green w-75 m-auto border p-2 border-dark border-2 rounded-2'}>
            <div>
                <label htmlFor=""
                        className={'text-jeopardy-yellow fw-bold'}
                >Name</label>
                <input type="text"
                    name={'name'}
                    maxLength={25}
                    minLength={2}
                    value={category.name}
                    className={categoryFillBox(category.name.length===0)}
                    onChange={(e)=>inputChange(e)}
                />
            </div>
            <div className={'height600px overflow-auto py-2 jeopardy-scrollbar'}>
                <div className={""}>
                    <label htmlFor=""
                        className={'text-jeopardy-yellow fw-bold'}
                    >$200</label>
                    <CategoryQAndA
                        data={category}
                        value={200}
                        setCategory={setCategory}
                    />
                </div>
                <div>
                    <label htmlFor=""
                        className={'text-jeopardy-yellow fw-bold'}
                    >$400</label>
                    <CategoryQAndA
                        data={category}
                        value={400}
                        setCategory={setCategory}
                    />
                </div>
                <div>
                    <label htmlFor=""
                        className={'text-jeopardy-yellow fw-bold'}
                    >$600</label>
                    <CategoryQAndA
                        data={category}
                        value={600}
                        setCategory={setCategory}
                    />
                </div>
                <div>
                    <label htmlFor=""
                        className={'text-jeopardy-yellow fw-bold'}
                    >$800</label>
                    <CategoryQAndA
                        data={category}
                        value={800}
                        setCategory={setCategory}
                    />

                </div>
                <div>
                    <label htmlFor=""
                        className={'text-jeopardy-yellow fw-bold'}
                    >$1000</label>
                    <CategoryQAndA
                        data={category}
                        value={1000}
                        setCategory={setCategory}
                    />
                </div>
            </div>

            <div className={'py-1'}>
                <button
                    className={'btn btn-sm button-jeopardy-orange'}
                    disabled={!validCategory}

                >submit</button>
            </div>
        </form>
    )
};

export default CategoryForm;