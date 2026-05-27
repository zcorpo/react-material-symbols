import type { SVGProps } from 'react'

export default function KeyboardControlKey({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-651 275-447q-14 14-33 14t-33-14q-14-14-14-33t14-33l237-237q14-14 34-14t34 14l237 237q14 14 14 33t-14 33q-14 14-33 14t-33-14L480-651Z" />
    </svg>
  )
}
