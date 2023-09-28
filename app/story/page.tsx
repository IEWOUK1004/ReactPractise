"use client";

import { CardProp } from "@/components/story/CardProp";
import CardTemplate from "@/components/story/CardTemplate";
import { cn } from "@/lib/utils"


// import { button } from "@/components/ui/button"

// function DemoContainer({
//     className,
//     ...props
//   }: React.HTMLAttributes<HTMLDivElement>) {
//     return (
//       <div
//         className={cn(
//           "flex items-center justify-center [&>div]:w-full",
//           className
//         )}
//         {...props}
//       />
//     )
//   }

const StoryPage=()=>{
    return(<>
    {/*  */}
      
          <div className="  items-start justify-center gap-5 rounded-lg p-8  sm:grid  md:grid-cols-2 lg:grid-cols-3"> {/* 將列數改為3 */}
          
            {CardProp.map((cardData) => (
             
              <CardTemplate key={cardData.id}  cardData={cardData} />
              
            ))}
          </div>
    
    </>)
}
export default StoryPage;