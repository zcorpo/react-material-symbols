import type { SVGProps, JSX } from 'react'

export default function South({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-120 226.15-373.85l21.23-21.23 217.24 218v-663.69h30.76v662.92l217.24-218 21.23 22L480-120Z" />
    </svg>
  )
}
