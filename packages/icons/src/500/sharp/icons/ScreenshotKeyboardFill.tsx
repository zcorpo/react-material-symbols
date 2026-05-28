import type { SVGProps, JSX } from 'react'

export default function ScreenshotKeyboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-480Zm109.37 109.37q44.7-44.7 44.7-109.37t-44.7-109.37q-44.7-44.7-109.37-44.7t-109.37 44.7q-44.7 44.7-44.7 109.37t44.7 109.37q44.7 44.7 109.37 44.7t109.37-44.7ZM74.02-154.02v-652.2h812.2v652.2H74.02Z" />
    </svg>
  )
}
