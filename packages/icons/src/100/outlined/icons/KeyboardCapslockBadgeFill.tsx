import type { SVGProps } from 'react'

export default function KeyboardCapslockBadgeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M321-335h318v-22H321v22Zm15-110 144-143 144 143 15-15-159-160-159 160 15 15ZM226-172q-23 0-38.5-15.5T172-226v-508q0-23 15.5-38.5T226-788h508q23 0 38.5 15.5T788-734v508q0 23-15.5 38.5T734-172H226Z" />
    </svg>
  )
}
