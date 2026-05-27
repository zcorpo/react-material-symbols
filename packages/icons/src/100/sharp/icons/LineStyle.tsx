import type { SVGProps, JSX } from 'react'

export default function LineStyle({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M250-250v-22h22v22h-22Zm0-96v-22h116v22H250Zm0-96v-22h193v22H250Zm0-96v-172h460v172H250Zm110 288v-22h22v22h-22Zm62-96v-22h116v22H422Zm47 96v-22h22v22h-22Zm48-192v-22h193v22H517Zm62 192v-22h22v22h-22Zm14-96v-22h117v22H593Zm95 96v-22h22v22h-22Z" />
    </svg>
  )
}
