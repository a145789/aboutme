import clsx from "clsx"
import Head from "next/head"
import { motion } from "framer-motion"

const THEME = [
  {
    primary: "bg-#F44336",
    color: "text-#FFFFFF",
    border: "border-#D32F2F",
  },
  {
    primary: "bg-#FFC107",
    color: "text-#FFFFFF",
    border: "border-#FFA000",
  },
  {
    primary: "bg-#4CAF50",
    color: "text-#FFFFFF",
    border: "border-#388E3C",
  },
  {
    primary: "bg-#2196F3",
    color: "text-#FFFFFF",
    border: "border-#1976D2",
  },
  {
    primary: "bg-#E91E63",
    color: "text-#FFFFFF",
    border: "border-#C2185B",
  },
  {
    primary: "bg-#212121",
    color: "text-#FFFFFF",
    border: "border-#757575",
  },
] as const
const LABEL = [
  "前端工程师",
  "Vue 小能手",
  "不怎么喜欢 React 但又能怎么办呢",
  "TypeScript 666",
  "Node.js 写脚本的福音",
  "Vite 是真的快啊",
  "快乐的风女，听候您的差遣",
  "与光同行者",
  "不要让懒惰吞噬你",
  "间歇性 emo",
  "你不在了我可怎么活",
  "开玩笑的",
  "嘻嘻",
]

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="w-full box-border overflow-x-hidden pt-50 lt-md:pt-10 px-12">
        <motion.div
          layout
          className="font-sans text-dark-300 dark:text-light-300 text-28px h-34px"
          initial={{ opacity: 0, x: "-40vw", scale: 0.4 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Hello, I&apos;m clencat.
        </motion.div>
        <div className="mt-14 w-full">
          <span>标签：</span>
          {LABEL.map((item, index) => {
            const { primary, color, border } =
              index < THEME.length ? THEME[index] : THEME[index % THEME.length]
            return (
              <motion.span
                layout
                suppressHydrationWarning
                className={clsx(
                  "inline-block rounded-2px px-8px py-5px text-14px mr-2 mb-2",
                  primary,
                  color,
                  border
                )}
                key={item}
                initial={{
                  x: `${
                    getRandomInt(100) * (getRandomInt(2) - getRandomInt(3))
                  }vw`,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  duration: 0.4,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                {item}
              </motion.span>
            )
          })}
        </div>
      </div>
    </>
  )
}
