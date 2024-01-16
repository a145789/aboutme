import Head from "next/head"
import clsx from "clsx"
import { SmileySansFont } from "@/libs/font"
import { motion } from "framer-motion"
// import useAvatar from "@/hooks/useAvatar"
// import useMotionTypeWriter from "@/hooks/useMotionTypeWriter"
import defaultImg from "@/public/default.jpg"

const NAME = "clen cat" as const

export default function Home() {
  // const word = useMotionTypeWriter(NAME, 0.8, 0.2)
  // const { avatarRef, imgUrl } = useAvatar()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-full h-full flex flex-col justify-center items-center overflow-x-hidden">
        <motion.div
          className="w-100px h-100px border-2px border-solid rounded-full c-border-ripple-100px"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0,
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img
            alt="Picture of the author"
            className="w-full h-full object-cover rounded-full relative z-2"
            src={defaultImg.src}
          />
        </motion.div>
        <div>
          <motion.h1
            className={clsx(
              SmileySansFont.className,
              "mt-5 h-9 min-w-90px text-3xl font-bold w-full"
            )}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            clen cat
          </motion.h1>
        </div>
        <motion.p
          className={clsx(
            SmileySansFont.className,
            "text-lg mt-2 text-center lt-md:w-86%"
          )}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 1.4,
            delay: 0,
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
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 1.4,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          恰同学少年，风华正茂；书生意气，挥斥方遒。
        </motion.p>
      </div>
    </>
  )
}
