import { useEffect, useRef, useState } from "react"
import defaultImg from "@/public/default.jpg"

function genImage(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.alt = "avatar"
    image.src = url
    image.onload = () => resolve(url)
    image.onerror = () => reject()
  })
}

const avatarList = [
  "https://cdn.seovx.com/d/?mom=302",
  "https://api.uuz.bid/random/?image",
  "https://tuapi.eees.cc/api.php?category=dongman&type=302",
  "https://api.likepoems.com/img/pe",
  "https://random-picture.vercel.app/api",
  "https://www.loliapi.com/bg",
  "https://www.loliapi.com/acg/pp",
]

export default function useAvatar() {
  const avatarRef = useRef<HTMLImageElement>(null)
  const [imgUrl, setImgUrl] = useState<string>(defaultImg.src)

  useEffect(() => {
    if (!avatarRef.current) {
      return
    }
    const findAvailableImageUrl = async () => {
      const promises = avatarList.map(genImage)

      try {
        const url = await Promise.any(promises)
        setImgUrl(url)
      } catch (e) {
        console.log("error", e)

        setImgUrl(defaultImg.src)
      }
    }

    findAvailableImageUrl()
  }, [])

  return {
    avatarRef,
    imgUrl,
  }
}
