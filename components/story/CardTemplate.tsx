
import React from "react";
import { CardData } from "./CardProp";
import Image from "next/image"
import { Button, buttonVariants } from "../ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";

interface CardProps {
  cardData: CardData;
}

const CardTemplate: React.FC<CardProps> = ({ cardData }) => {
  return (<>

    <Card className=" w-[350px]">
    <CardHeader>
      <CardTitle>{cardData.name}</CardTitle>
      <CardDescription>{cardData.date}</CardDescription>
    </CardHeader>
    <CardContent>      
        <p className="line-clamp-6 overflow-hidden">{cardData.bio}</p>
     <div> 
      <Image
          src={cardData.imageUrl} // 指定圖片路徑
          alt="圖片很大你忍一下"
          width="300" // 指定寬度
          height="150" // 指定高度
      /></div>
    </CardContent>
    <CardFooter className="flex justify-between">
    <AlertDialog>
      <AlertDialogTrigger className={buttonVariants()}>
      展開介紹
      </AlertDialogTrigger>
      <AlertDialogContent>
      <AlertDialogHeader>
      <AlertDialogTitle>故事大綱</AlertDialogTitle>
      <AlertDialogDescription>
        {cardData.bio}
      </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
      <AlertDialogCancel>結束</AlertDialogCancel>
      <AlertDialogAction><a href={cardData.wiki} target="_blank" rel="noopener noreferrer">
       閱讀更多</a></AlertDialogAction>
      </AlertDialogFooter>
      </AlertDialogContent>
  </AlertDialog>
      <Button variant={"secondary"}>
        ????
       </Button>
    </CardFooter>
  </Card>
  
  
    </> );
};

export default CardTemplate;