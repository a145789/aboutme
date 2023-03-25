import "@/styles/globals.css"
import "uno.css"
import "@unocss/reset/eric-meyer.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import Sidebar from "@/components/sidebar"
import BottomBar from "@/components/bottom-bar"
import { IsUseLeftSliderProvider } from "@/store/isUseLeftSlider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-#060606 dark:text-gray-200 w-full h-full">
        <div className="w-1300px h-full mx-auto flex justify-center items-center  transition-colors flex-row lt-md:flex-col lt-md:w-full">
          <Sidebar />
          <main className="w-800px md:h-full lt-md:flex-1 pb-24px lt-md:pb-0 box-border flex flex-col items-center lt-md:w-full ml-26px lt-md:ml-0 lt-md:overflow-y-hidden">
            <IsUseLeftSliderProvider>
              <div className="w-full flex-1 overflow-y-auto">
                <Component {...pageProps} />
              </div>
              <BottomBar />
            </IsUseLeftSliderProvider>
          </main>
        </div>
      </div>
    </>
  )
}
