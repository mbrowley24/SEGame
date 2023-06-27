import React,{useMemo, useState} from "react";
import CategoryQAndA from "./CategoryQAndA";
import useCategory from "../hooks/useCategory";


const CategoryForm = props => {
    const {inputChange, category, setCategory, submit} = props;
    const {questionValidation} = useCategory();
    const validCategory = useMemo(()=>questionValidation(category),[category])
    return(
        <form onSubmit={submit} className={'bg-light w-75 m-auto border-3 border-dark rounded-2'}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text"
                       name={'name'}
                       maxLength={25}
                       minLength={2}
                       value={category.name}
                       className={'form-control w-50 m-auto text-center'}
                        onChange={(e)=>inputChange(e)}
                />
            </div>
            <div className={'height600px overflow-auto py-2'}>
                <div className={""}>
                    <label htmlFor="">$200</label>
                    <CategoryQAndA
                        data={category}
                        value={200}
                        setCategory={setCategory}
                    />
                </div>
                <div>
                    <label htmlFor="">$400</label>
                    <CategoryQAndA
                        data={category}
                        value={400}
                        setCategory={setCategory}
                    />
                </div>
                <div>
                    <label htmlFor="">$600</label>
                    <CategoryQAndA
                        data={category}
                        value={600}
                        setCategory={setCategory}
                    />
                </div>
                <div>
                    <label htmlFor="">$800</label>
                    <CategoryQAndA
                        data={category}
                        value={800}
                        setCategory={setCategory}
                    />

                </div>
                <div>
                    <label htmlFor="">$1000</label>
                    <CategoryQAndA
                        data={category}
                        value={1000}
                        setCategory={setCategory}
                    />
                </div>
            </div>

            <div className={'py-1'}>
                <button
                    className={'btn btn-sm btn-success'}
                    disabled={!validCategory}

                >submit</button>
            </div>
        </form>
    )
};

export default CategoryForm;