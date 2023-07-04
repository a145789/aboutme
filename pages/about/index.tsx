import clsx from "clsx"
import Head from "next/head"

const theme = [
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
const label = [
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
] as const

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="mt-44 mx-12 font-sans text-dark-300 dark:text-light-300 text-28px h-34px">
        Hello, I&apos;m clencat.
      </div>
      <div className="mt-14 mx-12">
        <span>标签：</span>
        {label.map((item, index) => {
          const { primary, color, border } =
            index < theme.length ? theme[index] : theme[index % theme.length]
          return (
            <span
              className={clsx(
                "inline-block rounded-2px px-8px py-5px text-14px mr-2 mb-2",
                primary,
                color,
                border
              )}
              key={item}
            >
              {item}
            </span>
          )
        })}
      </div>
    </>
  )
}
