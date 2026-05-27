import type { SVGProps } from 'react'

export default function SplitscreenTopFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-510v-330h720v330H120Zm0 390v-330h720v330H120Zm60-60h600v-210H180v210Z" />
    </svg>
  )
}
