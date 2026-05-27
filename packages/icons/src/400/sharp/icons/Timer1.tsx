import type { SVGProps } from 'react'

export default function Timer1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M520-200v-480H320v-80h280v560h-80Z" />
    </svg>
  )
}
