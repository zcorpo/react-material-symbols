import type { SVGProps } from 'react'

export default function ModelingFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M712-205 590-326l122-121 15 17-95 93 196 1v22l-196-1 95 94-15 16Zm-580-7v-226h354v226H132Zm116-303-15-16 95-94H132v-22h196l-95-94 15-15 122 120-122 121Zm226-7v-226h354v226H474Z" />
    </svg>
  )
}
