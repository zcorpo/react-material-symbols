import type { SVGProps } from 'react'

export default function LineEndDiamond({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m600-313 167-167-167-167-167 167 167 167Zm0 134L346-433H63v-94h283l254-254 301 301-301 301Zm0-301Z" />
    </svg>
  )
}
