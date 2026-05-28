import type { SVGProps, JSX } from 'react'

export default function ChipsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M265.85-458.92h428.3v-45.39h-428.3v45.39ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
