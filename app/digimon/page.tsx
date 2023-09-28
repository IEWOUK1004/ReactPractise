"use client";
import Image from 'next/image';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useDigimonContext } from '@/context/digimondataContext';


const FormSchema = z.object({
  digimonName: z
    .string({
      required_error: "Please select an digimonName to display.",
    })
    .default("")
})

const DigimonPage=()=>{

  const { digimonData, image, setImage, introduce, setIntroduce } = useDigimonContext();

  // const [image,setImage] = useState("")
  // const [introduce ,setIntroduce ] = useState("")
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })


  function updateImageAndIntroduce(data: { digimonName: string }) {
    const selectedDigimon = digimonData[data.digimonName] || { image: "", introduce: "" };
    setImage(selectedDigimon.image);
    setIntroduce(selectedDigimon.introduce);
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    updateImageAndIntroduce(data);
  }

    return(
        <>
         <div className="items-start justify-center gap-6 rounded-lg p-8  sm:grid  md:grid-cols-2 lg:grid-cols-3">
          <div id="block1" className="col-span-2 grid items-start gap-6  p-8  lg:col-span-1"> 
               <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="digimonName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>選擇數碼獸</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="點選查看詳細資料" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Agumon">亞古獸</SelectItem>
                  <SelectItem value="Greymon">暴龍獸</SelectItem>
                  <SelectItem value="MetalGreymon">機械暴龍獸</SelectItem>
                  <SelectItem value="WarGreymon">戰鬥暴龍獸</SelectItem>
                  <SelectItem value="AgumonBondofCourage">戰鬥暴龍獸勇氣之絆</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                {/* You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">確定</Button>
      </form>
    </Form>
          
          </div>
          <div id="block2" className="auto-cols-auto   p-8 ">
          <div>
              <Image
                id="LOGO"
                src= {image|| "/images/Digimon_Logo.png"} // 指定圖片路徑
                alt="預設數碼寶貝圖"
                width={400} // 指定寬度
                height={200} // 指定高度
              />
        </div>
      </div>
      <div id="block3" className="auto-cols-auto p-8  ">
         <Image
                id="digimonimage"
                src="/images/Digimon_Adventure.gif" // 指定圖片路徑
                alt="預設數碼寶貝圖"
                width={300} // 指定寬度
                height={200} // 指定高度
              />
         <h1>數碼獸介紹</h1>
         <p>{introduce}</p>
        </div>
    </div>
    </>
    )
}
export default DigimonPage;