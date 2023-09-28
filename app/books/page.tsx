"use client";
import { useEffect, useState} from "react";
import agent from "../api/agnet";
import Accordion from "@/components/accordion/Accordion";
import BooksAdd from "@/components/books/books-add";

const Bookspage =()=>{
    const [books,setBooks]=useState<BooksItem[]>([]);
    
useEffect( () => {

    agent.bookAPI.getlist().then(data=>{
        setBooks(data)
    })

},[])

const handleAddBook=(bookItem:BooksItem)=>{
    setBooks((prev) => [...prev,bookItem])
}

const handleUpdateBook= async (id:string,bookItem:BooksItem)=>{
   const response =  await agent.bookAPI.update(bookItem.id,bookItem);
   //第一種寫法
   const updateBooks = books.map((book)=>{
    if(book.id === bookItem.id){
        return {...book ,...response}
    }
    return book;
    });

    setBooks(updateBooks);
   }
    //第二種寫法
    // setBooks((prev) => prev.map((item) => (item.id === id ? bookItem : item)))


    const handleDeleteBook=(id:string)=>{
        agent.bookAPI.delete(id);
        //第一種寫法
        // const deleteBook = books.filter((item) => item.id !== id);
        // setBooks(deleteBook);
        
        //第二種寫法
        setBooks((prev) => prev.filter((item) => item.id !== id));
    }

return (<>
    <BooksAdd addBook ={handleAddBook} />
    <Accordion Item={books} handleUpdate={handleUpdateBook} handledeleteBook={ handleDeleteBook} />
    </>)
}
export default Bookspage;