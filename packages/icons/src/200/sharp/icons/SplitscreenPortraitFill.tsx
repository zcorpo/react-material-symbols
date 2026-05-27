import type { SVGProps } from 'react'

export default function SplitscreenPortraitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M316.92-236.92h326.16v-200H316.92v200Zm0-286.16h326.16v-200H316.92v200ZM200-120v-720h560v720H200Z" />
    </svg>
  )
}
