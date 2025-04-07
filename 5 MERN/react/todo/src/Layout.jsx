import React, { useState } from 'react'
import Input from './Input'
import Display from './Display'
import { ToastContainer, toast } from 'react-toastify';

export default function Layout() {

    const [allToDo, setAllToDo] = useState(['sita', 'geeta', 'ram', 'shyam', 'hello'])

    const getValue = (data) => {
        const finalData = [...allToDo];
        finalData.push(data);
        setAllToDo(finalData);
        toast.success("Todo is added")
    }

    const deleteList = (listIndex) => {

        const finalData = allToDo.filter(
            (value, index) => {
                return index != listIndex
            }
        )
        setAllToDo(finalData);
        toast.success("Todo is deleted")
    }


    return (
        <div className='max-w-xl mx-auto'>
            <Input getValue={getValue} />
            <Display allToDo={allToDo} deleteList={deleteList} />
            <ToastContainer autoClose={500} />
        </div>
    )
}
