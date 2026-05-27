import type { SVGProps } from 'react'

export default function SubheaderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M245-593h340v-78.08H245V-593ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
