import type { SVGProps } from 'react'

export default function Notes({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-219.09v-79.78H614.7v79.78H105.87Zm0-221.3v-79.22H854.7v79.22H105.87Zm0-220.74v-79.78H854.7v79.78H105.87Z" />
    </svg>
  )
}
