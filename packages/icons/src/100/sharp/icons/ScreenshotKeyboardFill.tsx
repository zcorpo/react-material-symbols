import type { SVGProps } from 'react'

export default function ScreenshotKeyboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-480Zm93 93q38-38 38-93t-38-93q-38-38-93-38t-93 38q-38 38-38 93t38 93q38 38 93 38t93-38ZM132-212v-536h696v536H132Z" />
    </svg>
  )
}
