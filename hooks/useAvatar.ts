import { useEffect, useRef, useState } from "react"
import defaultImg from "@/public/default.jpg"

function genImage(url: string): Promise<HTMLImageElement> {
  const image = new Image()
  image.alt = "avatar"
  image.crossOrigin = "Anonymous"
  image.src = url
  return new Promise((resolve, reject) => {
    image.onload = () => resolve(image)
    image.onerror = () => reject()
  })
}

const avatarList = [
  "https://cdn.seovx.com/d/?mom=302",
  "https://api.uuz.bid/random/?image",
  "https://tuapi.eees.cc/api.php?category=dongman&type=302",
  "https://api.likepoems.com/img/pe",
  "https://random-picture.vercel.app/api",
  "https://www.loliapi.com/bg/",
  "https://www.loliapi.com/acg/pp/",
]

function getColor(image: HTMLImageElement) {
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  canvas.width = image.width
  canvas.height = image.height

  ctx!.drawImage(image, 0, 0)
  const matrix: number[][] = []
  for (let x = 0; x <= ctx!.canvas.width; x = x + 20) {
    for (let y = 0; y <= ctx!.canvas.height; y = y + 20) {
      matrix.push([x, y])
    }
  }
  const res = matrix
    .map((p) => ctx!.getImageData(p[0], p[1], 1, 1).data)
    .filter((c) => {
      const l = c[0] * 0.3 + c[1] * 0.59 + c[2] * 0.11
      return l > 50 && l < 200
    })
  const color = res[res.length >>> 1]

  return `rgb(${Array.from(color)
    .slice(0, color.length - 1)
    .join()})`
}

export default function useAvatar() {
  const avatarRef = useRef<HTMLDivElement>(null)
  const [imgColor, setImgColor] = useState<string>("#f3f3f3")

  useEffect(() => {
    if (!avatarRef.current) {
      return
    }
    const findAvailableImageUrl = async () => {
      const promises = avatarList.map(genImage)

      let image: HTMLImageElement | null = null
      try {
        image = await Promise.any(promises)
      } catch (e) {
        console.log("error", e)
        image = await genImage(defaultImg.src)
      } finally {
        if (!image) {
          return
        }

        const color = getColor(image)
        setImgColor(color)
        image.classList.add("w-full", "h-full", "object-cover", "rounded-full")
        if (!avatarRef.current) {
          return
        }
        avatarRef.current!.innerHTML = ""
        avatarRef.current!.appendChild(image)
      }
    }

    findAvailableImageUrl()
  }, [])

  return {
    avatarRef,
    imgColor,
  }
}