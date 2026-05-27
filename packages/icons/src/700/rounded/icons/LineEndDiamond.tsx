import type { SVGProps } from 'react'

export default function LineEndDiamond({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m600-313 167-167-167-167-167 167 167 167Zm-34 100L346-433H110q-20 0-33.5-13.5T63-480q0-20 13.5-33.5T110-527h236l220-220q14-14 34-14t34 14l233 233q14 14 14 34t-14 34L634-213q-14 14-34 14t-34-14Zm34-267Z" />
    </svg>
  )
}
