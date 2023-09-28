"use client";
import {FormEvent ,useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"


import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { PeopleProp } from "@/components/adventure/PeopleProp";

 

const AdventurePage=()=>{
    const [userData, setUserData] = useState(PeopleProp);
    const [inputName,setInputName]= useState("");
    const [inputAge,setInputAge]= useState ("");
    const [inputCrest,setInputCrest]= useState("");



    const addAdventureButton=()=>{
        if (inputName && inputAge && inputCrest) { // 檢查輸入是否不為空
            // const newId = userData.length + 1;
            // const newId = userData.findLastIndex((userData) => userData.id) + 1;
            const newId = userData.length > 0 ? userData[userData.length - 1].id + 1 : 1; //(用三元運算值)去找最後一個值再把該值ID+1
            const newData = {
                id: newId,
                name: inputName,
                age: parseInt(inputAge),
                Crest: inputCrest
            };
            setUserData(prevUserData => [...prevUserData, newData]);
            setInputName("");
            setInputAge("");
            setInputCrest("");
        } else {
            // 如果輸入有空值，可以提示用戶或採取其他操作
            console.log("你啊罵的擔擔麵不准空白");
        }
    }

    const delAdventureButton=(id:number)=>{//從table中刪除一筆數據
        const newUserData = userData.filter((userData) => userData.id !== id);
        setUserData(newUserData);   
    }

    const updateAdventureButton=(id:number)=>{
   
        const newUserData = userData.map((userData) => userData.id === id
            ? {
                ...userData,
                name: inputName,
                age: parseInt(inputAge),
                Crest: inputCrest
            } : userData
        );   
        setUserData(newUserData);   
        setInputName("");
        setInputAge("");
        setInputCrest("");
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement> ) =>{//確認新增資料
        e.preventDefault();
        console.log(inputName,inputAge,inputCrest);
    }
    // const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
    //     setInputAge(e.target.value);
    // }   

    return(
        <>
            
                <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-2">
                    <Table id="adventureTable">
                        <TableCaption>數碼寶貝大冒險人物</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="col-3">編號</TableHead>
                                <TableHead className="col-3">名字</TableHead>
                                <TableHead className="col-3">年紀</TableHead>
                                <TableHead className="col-3">象徵徽章</TableHead>
                                <TableHead className="col-3">其他操作</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {userData.map((userData) => (
                                <TableRow key={userData.id}>
                                    <TableCell>{userData.id}</TableCell>
                                    <TableCell>{userData.name}</TableCell>
                                    <TableCell>{userData.age}</TableCell>
                                    <TableCell>{userData.Crest}</TableCell>
                                    <TableCell>
                                        {<Button variant="destructive" onClick={()=>delAdventureButton(userData.id)}>刪除</Button>}
                                        {<AlertDialog>
                                            <AlertDialogTrigger className={buttonVariants()}>修改</AlertDialogTrigger>
                                            <AlertDialogContent>
                                            <AlertDialogHeader>
                                            <AlertDialogTitle>確定修改嗎?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                舊資料 姓名:{userData.name}，年紀:{userData.age}， 徽章:{userData.Crest} 
                                                <h2>姓名</h2>
                                                    <input 
                                                        type="text" 
                                                        value={inputName} 
                                                        // className="border-block border"
                                                        onChange={(e)=>setInputName(e.target.value)} required
                                                        />
                                            
                                                    <h2>年紀</h2>
                                                    <input 
                                                        type="text" 
                                                        value={inputAge} 
                                                        // className="border-block border"
                                                        onChange={(e)=>setInputAge(e.target.value)} required
                                                        />
                                                    <h2>象徵徽章</h2>
                                                    <input 
                                                        type="text" 
                                                        value={inputCrest} 
                                                        // className="border-block border"
                                                        onChange={(e)=>setInputCrest(e.target.value)} required
                                                        />
                                            </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={()=>updateAdventureButton(userData.id)}>Continue</AlertDialogAction>
                                            </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>}
                                     </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <form id="adventureForm" onSubmit={handleSubmit}>
                        <div className=" row-auto mb-5 mr-5">
                            <p className="text-2xl ">新增被選召的孩子</p>
                            <h2>姓名</h2>
                            <input 
                                type="text" 
                                value={inputName} 
                                className="border-block border"
                                onChange={(e)=>setInputName(e.target.value)} required
                                />
                        </div>
                        <div className=" row-auto mb-5">
                            <h2>年紀</h2>
                            <input 
                                type="text" 
                                value={inputAge} 
                                className="border-block border"
                                onChange={(e)=>setInputAge(e.target.value)} required
                                />
                        </div>
                        <div className=" row-auto mb-10">
                            <h2>象徵徽章</h2>
                            <input 
                                type="text" 
                                value={inputCrest} 
                                className="border-block border"
                                onChange={(e)=>setInputCrest(e.target.value)} required
                                />
                        </div>
                        <div>
                        <AlertDialog>
                            <AlertDialogTrigger>新增</AlertDialogTrigger>
                            <AlertDialogContent>
                            <AlertDialogHeader>
                            <AlertDialogTitle>確定新增嗎?</AlertDialogTitle>
                            <AlertDialogDescription>
                                姓名 :{inputName}，年紀:{inputAge}， 徽章:{inputCrest}?
                            </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={addAdventureButton}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                            </AlertDialogContent>
                         </AlertDialog>
                            {/* <button type="submit" className="border-blue rounded border" onClick={addAdventureButton}>新增</button> */}
                        </div>
                    </form>
                </div>           
    </>
    )
}
export default AdventurePage;