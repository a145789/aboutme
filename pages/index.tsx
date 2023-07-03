import Head from "next/head"
import clsx from "clsx"
import { SmileySansFont } from "@/libs/font"
import { Typewriter } from "react-simple-typewriter"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-full h-full flex flex-col justify-center items-center overflow-x-hidden">
        <img
          src="https://avatars.githubusercontent.com/u/37403253?v=4"
          alt="Picture of the author"
          className="w-100px h-100px border-2px border-solid border-#d0d7de rounded-full object-cover shadow-slate-200 slide-in-top"
        />
        <h1
          className={clsx(SmileySansFont.className, "text-3xl font-bold mt-4")}
        >
          c<Typewriter words={["len cat"]} typeSpeed={50} />
        </h1>
        <p
          className={clsx(
            SmileySansFont.className,
            "text-lg mt-2 text-center lt-md:w-86% slide-in-left"
          )}
        >
          弃我去者，昨日之日不可留，乱我心者，今日之日多烦忧。
        </p>
        <p
          className={clsx(
            SmileySansFont.className,
            "text-lg mt-2 text-center slide-in-right"
          )}
        >
          恰同学少年，风华正茂；书生意气，挥斥方遒。
        </p>
      </div>
    </>
  )
}
