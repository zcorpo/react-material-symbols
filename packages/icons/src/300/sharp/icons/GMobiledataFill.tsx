import type { SVGProps } from 'react'

export default function GMobiledataFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M290-287.69v-384.62h331v45.39H335.38v293.84h249.24v-124.23H452.46v-45.38H630v215H290Z" />
    </svg>
  )
}
