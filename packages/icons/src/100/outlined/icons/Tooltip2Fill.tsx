import type { SVGProps } from 'react'

export default function Tooltip2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M266-413h266v-22H266v22Zm0-123h428v-22H266v22Zm0-123h428v-22H266v22Zm214 527-86-133H186q-21.5 0-37.75-16.25T132-319v-455q0-21.5 16.25-37.75T186-828h588q21.5 0 37.75 16.25T828-774v455q0 21.5-16.25 37.75T774-265H566l-86 133Z" />
    </svg>
  )
}
