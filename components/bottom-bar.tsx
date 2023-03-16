import useDark from "@/hooks/useDark"

export default function BottomBar() {
  const [isDark, setIsDark] = useDark()
  return (
    <div className="flex justify-center text-22px">
      <a href="https://github.com/a145789" target="_blank" className="mx-6px">
        <div className="i-uil-github-alt hover:i-mingcute-github-fill transition-all duration-200" />
      </a>

      <div
        className="i-ph-moon-stars-fill dark:i-ic-baseline-light-mode mx-6px cursor-pointer transition-all duration-200"
        onClick={() => setIsDark(!isDark)}
      />
    </div>
  )
}
