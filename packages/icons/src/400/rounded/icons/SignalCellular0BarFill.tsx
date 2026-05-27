import type { SVGProps } from 'react'

export default function SignalCellular0BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M152-80q-20 0-27.5-18.5T131-131l698-698q14-14 32.5-6.5T880-808v683q0 19-13 32t-32 13H152Zm72-60h596v-596L224-140Z" />
    </svg>
  )
}
