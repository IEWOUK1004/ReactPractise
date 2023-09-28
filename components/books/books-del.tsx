import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import agent from "@/app/api/agnet"
import { FaRegEdit, FaRegTrashAlt} from "react-icons/fa";

interface DeleteProps {
  deleteBook:  (bookItem:BooksItem) => void;
}

const BookDelete: React.FC<DeleteProps> = ({ deleteBook }) => {
  const [idToDelete, setIdToDelete] = useState("");

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setIdToDelete(e.target.value);
  // };

  const handleDelete = async () => {
    try {
      // 调用API来删除书籍
      await agent.bookAPI.delete(idToDelete);
      // 调用父组件的deleteBook函数来从列表中删除
      deleteBook(idToDelete);
      // 清空输入
      setIdToDelete("");
    } catch (error) {
      console.error("删除书籍失败:", error);
    }
  };
  
    return (
      <div>
        <button onClick={handleDelete}>
          <FaRegTrashAlt />
        </button>
      </div>
    );
  };

export default BookDelete;