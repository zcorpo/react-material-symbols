import type { SVGProps, JSX } from 'react'

export default function ScreenshotKeyboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-480Zm106.5 106.5Q630-417 630-480t-43.5-106.5Q543-630 480-630t-106.5 43.5Q330-543 330-480t43.5 106.5Q417-330 480-330t106.5-43.5ZM80-160v-640h800v640H80Z" />
    </svg>
  )
}
