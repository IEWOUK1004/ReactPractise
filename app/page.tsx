import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import useWorldContext from "./hooks/use-world-context";

export default function IndexPage() {

  const { name } = useWorldContext();

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          デジモンアドベンチャー<br className="hidden sm:inline" />
          digimon Adventure <br className="hidden sm:inline" />
          數碼寶貝大冒險
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          想成為數碼寶貝訓練家嗎
        </p>
        <p>{name}</p>

      </div>
      <div className="flex gap-4">
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"//RickyRoll
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          點我看更多
        </Link>

        <Link
          target="_blank"
          rel="noreferrer"
          href="https://zh.wikipedia.org/zh-tw/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E7%B3%BB%E5%88%97"//數碼寶貝維基百科
          className={buttonVariants({ variant: "outline" })}
        >
          wikipedia
        </Link>
      </div>
    </section>
  )
}
