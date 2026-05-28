import type { SVGProps, JSX } from 'react'

export default function Stat0({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-179.65 179.65-480 480-780.35 780.35-480 480-179.65Zm0-108.7L671.65-480 480-671.65 288.35-480 480-288.35ZM480-480Z" />
    </svg>
  )
}
