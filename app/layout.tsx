"use client";
import "@/styles/globals.css"

import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { WorldProvider } from "@/context/worldsetting";
import { DigimonProvider } from "@/context/digimondataContext";

const digimonData = {
  Agumon: {
    image: "/images/Agumon.PNG",
    introduce: "成長為似乎可以用兩條腿步行，進化成小型恐龍模樣的爬蟲型數碼獸。雖然還在成長中力量弱小，但是性格卻相當勇猛無所畏懼。雙手雙腳長有堅硬銳利的爪子，就算在戰鬥時候也能發揮威力。預測其可以向力量偉大的數碼獸進化。",
  },
  Greymon: {
    image: "/images/Greymon.PNG",
    introduce: "頭部的皮膚硬化，覆蓋著像甲蟲一樣的殼的恐龍型數碼寶貝。擁有銳利的爪、巨大的角等如全身兇器般的身體，是非常有攻擊性的數碼寶貝。但是，智力很高，如果能馴服他，恐怕再沒有比他強的怪獸了。在文件夾大陸生息的暴龍獸沒有狂暴性，其高智商可以利用在同伴間的協同戰術。",
  },
  MetalGreymon: {
    image: "/images/MetalGreymon.PNG",
    introduce: "身體一半以上機械化的改造型數碼寶貝。文件島的機械暴龍獸通過改造可以大幅增長生命活動，但肉體部分卻無法忍耐而變為藍色。不過，完全的金屬暴龍獸卻從暴龍獸成功進化，是激發出更強大力量的改造型數碼獸。",
  },
  WarGreymon: {
    image: "/images/WarGreymon.PNG",
    introduce: "身著超金屬「時之數碼合金」之鎧的最強龍戰士，暴龍獸系數碼寶貝的終極形態。與暴龍獸系數碼獸所看到的巨大體型不同，他擁有人型的形態，不過速度、力量卻有著飛躍性的提高，應該不可能被完全體數碼寶貝程度的攻擊打敗。雙臂裝備的「龍獸剋星（Dramon Killer）」對龍獸系數碼獸能發揮巨大威力，不過同時也是把會對自身產生危險的雙刃劍。另外，把背部裝備的外殼合而為一體的話，就會成為最強硬度的盾「勇氣之盾（Brave Shield）」。據說歷戰的強者之中，當真正的勇者覺悟到了自己的使命，就會進化為戰鬥暴龍獸。",
  },
  AgumonBondofCourage: {
    image: "/images/AgumonBondofCourage.PNG",
    introduce: "亞古獸與搭檔間結下的深厚羈絆，在無限可能性的盡頭裡，達成了傳說中的最終進化。搭檔所具有的不屈「勇氣」化作熱炎從全身噴出，作為信任的證明出現。由於共同相處了很長的時間，加深了對人類的理解，進化後的姿態也更接近人型的形狀。",
  },
  // 你的數據
};
 


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

            <WorldProvider>
              <DigimonProvider data={digimonData}>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
                <Toaster />
              </div>
              </DigimonProvider>
            </WorldProvider>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
