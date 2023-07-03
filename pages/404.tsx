import Link from "next/link"

function Custom404() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p className="text-3xl font-bold mt-4">404 - Page Not Found</p>
      <Link href="/" className="text-blue-600 underline mt-8">
        Go home
      </Link>
    </div>
  )
}

export default Custom404
