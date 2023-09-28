import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import agent from "@/app/api/agnet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiFillEdit } from "react-icons/ai";




interface BookProps{
  bookItem:BooksItem
  handleUpdate?:(id:string,bookItem:BooksItem)=>void
}


const BookEdit=({bookItem,handleUpdate}:BookProps) => {
  const [open, setOpen] = useState(false);
  const idRef = useRef <HTMLInputElement>(null)
  const labelRef = useRef <HTMLInputElement>(null)
  const contentRef = useRef <HTMLInputElement>(null)


  const handleClick = () => {
 
    if(idRef.current&& labelRef.current && contentRef.current && handleUpdate){
      console.log(bookItem.id,idRef.current?.value,labelRef.current?.value, contentRef.current?.value)
      handleUpdate(idRef.current.id,{id:idRef.current.value,label:labelRef.current.value, content:contentRef.current.value  });
      //agent.bookAPI.update(bookItem.id,{id:idRef.current?.value,label:labelRef.current?.value, content:contentRef.current?.value  });
      setOpen(false);
    }
    
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="my-3">
        <AiFillEdit/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
          <DialogDescription>編輯書籍</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bookid" className="text-right">
              ID
            </Label>
            <Input
              ref={idRef}
              className="col-span-3"
              disabled
             defaultValue={bookItem.id}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="booklabel" className="text-right">
              Label
            </Label>
            <Input
              ref={labelRef}
              className="col-span-3"
              defaultValue={bookItem.label}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bookcontent" className="text-right">
              Content
            </Label>
            <Input
              ref={contentRef}
              className="col-span-3"
              defaultValue={bookItem.content}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleClick}>
            Save
           </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookEdit;


