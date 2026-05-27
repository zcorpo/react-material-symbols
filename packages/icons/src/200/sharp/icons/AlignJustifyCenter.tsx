import type { SVGProps } from 'react'

export default function AlignJustifyCenter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M464.62-120v-720h30.76v720h-30.76Zm110.76-184.62v-350.76h70.77v350.76h-70.77Zm-261.53 0v-350.76h70.77v350.76h-70.77Z" />
    </svg>
  )
}
