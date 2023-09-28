"use client"

import { Expand } from "lucide-react";
import { useState } from "react";
import {  LuAccessibility, LuGhost } from "react-icons/lu";
import BookDelete from "../books/books-del";
import BookEdit from "../books/books-edit";
import { Button } from "@/components/ui/button";
import { LuTrash2 } from "react-icons/lu";

interface AccordionProps {
    id:string,
    label:string,
    content:string
}


interface AccordionList {
    Item:AccordionProps[];
    handleUpdate?:(id:string,bookItem:BooksItem)=>void 
    handledeleteBook:(id:string)=>void;
}

const Accordion = ({Item,handleUpdate,handledeleteBook}:AccordionList) => {
    
const [expand,setExpand]=useState(-1);


const handleClick = (index:number) =>{
    setExpand(prevExpand => prevExpand === index ? -1 : index);
}

    const renderItems = Item.map ((item,idx) => {
        const isExpanded = expand === idx;
        const icons = isExpanded ?  <LuGhost/>:<LuAccessibility/>


        function handleEditBook(bookItem: BooksItem): void {
            throw new Error("Function not implemented.");
        }

        return(
            <div key={item.id}>
                <div className="border-3 flex cursor-pointer items-center justify-between  bg-gray-100 dark:bg-gray-700"  onClick={()=>handleClick(idx)}>
                    {item.label}
                    {icons}
                    </div>
                {isExpanded && 
                <div className="border-3 ">
                    <div className="row">
                    {item.content}
                    </div>
                    <div className="columns-6">
                    
                    <BookEdit bookItem={item} handleUpdate={handleUpdate}/>
                    <Button variant="destructive" onClick={()=>handledeleteBook(item.id)}><LuTrash2/></Button>
                    
                    </div>
                 </div>
                 }
            </div>
        )
       
    })

    return <div>{renderItems}</div>
}
export default Accordion;
