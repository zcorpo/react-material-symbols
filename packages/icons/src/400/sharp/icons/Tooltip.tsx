import type { SVGProps } from 'react'

export default function Tooltip({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-80 376-237H80v-643h800v643H584L480-80Zm0-108 72-109h268v-523H140v523h268l72 109Zm0-371Z" />
    </svg>
  )
}
