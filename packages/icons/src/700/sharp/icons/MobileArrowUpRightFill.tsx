import type { SVGProps } from 'react'

export default function MobileArrowUpRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m393-341 145-145v105h83v-248H374v83h106L335-401l58 60ZM175-15v-931h608v223h43v193h-43v515H175Z" />
    </svg>
  )
}
