import Head from "next/head"
import clsx from "clsx"
import { SmileySansFont } from "@/libs/font"
import { motion } from "framer-motion"
import { useAvatar, useTypewriter } from "@/hooks/"
import { type CSSProperties } from "react"

export default function Home() {
  const word = useTypewriter("clen cat", 2)
  const { avatarRef, imgColor } = useAvatar()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-full h-full flex flex-col justify-center items-center overflow-x-hidden">
        <motion.div
          ref={avatarRef}
          className="w-100px h-100px border-2px border-solid rounded-full c-border-ripple-100px"
          style={
            {
              borderColor: imgColor,
              "--c-border-ripple-color": imgColor,
            } as CSSProperties
          }
          initial={{ opacity: 0, scale: 0.8, y: "-60vh" }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
            y: { type: "spring", stiffness: 100 },
          }}
        />
        <motion.h1
          className={clsx(
            SmileySansFont.className,
            "text-3xl font-bold mt-5z w-100px"
          )}
        >
          {word}
        </motion.h1>
        <motion.p
          className={clsx(
            SmileySansFont.className,
            "text-lg mt-2 text-center lt-md:w-86%"
          )}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          弃我去者，昨日之日不可留，乱我心者，今日之日多烦忧。
        </motion.p>
        <motion.p
          className={clsx(
            SmileySansFont.className,
            "text-lg mt-2 text-center slide-in-right"
          )}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          恰同学少年，风华正茂；书生意气，挥斥方遒。
        </motion.p>
      </div>
    </>
  )
}
