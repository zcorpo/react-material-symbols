import type { SVGProps } from 'react'

export default function LineEndArrow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440-200v-250H80v-60h360v-250l440 280-440 280Zm60-109 268-171-268-171v342Zm0-171Z" />
    </svg>
  )
}
