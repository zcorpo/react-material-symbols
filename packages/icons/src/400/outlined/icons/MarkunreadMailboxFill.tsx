import type { SVGProps } from 'react'

export default function MarkunreadMailboxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-80q-24 0-42-18t-18-42v-425q0-24 18-42t42-18h100v-255h300v160H300v303h60v-208h460q24 0 42 18t18 42v425q0 24-18 42t-42 18H140Z" />
    </svg>
  )
}
