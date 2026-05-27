import type { SVGProps } from 'react'

export default function Equalizer({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-212v-206h102v206H212Zm217 0v-536h102v536H429Zm217 0v-346h102v346H646Z" />
    </svg>
  )
}
