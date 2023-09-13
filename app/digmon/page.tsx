"use client";
import Image from 'next/image';

import Link from "next/link"
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
import { toast } from "@/components/ui/use-toast"


const DigmonPage=()=>{


const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
})

 const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "你選的信箱",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }


 

    return(
        <>
         <div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
          <div className="col-span-2 grid items-start gap-6 lg:col-span-1"> 
               <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>


          
          </div>
      <div className=" col-span-2 grid items-start gap-6 p-8 lg:col-span-1">
          <div>
              <Image
                id="LOGO"
                src="/images/Digimon_Logo.png" // 指定圖片路徑
                alt="預設數碼寶貝圖"
                width={300} // 指定寬度
                height={200} // 指定高度
              />
        </div>
      </div>
      <div className="col-span-2 grid items-start gap-6  p-8 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
         <Image
                id="digmonimage"
                src="/images/Digimon_Adventure.gif" // 指定圖片路徑
                alt="預設數碼寶貝圖"
                width={300} // 指定寬度
                height={200} // 指定高度
              />
        
        </div>
    </div>
    </>
    )
}
export default DigmonPage;