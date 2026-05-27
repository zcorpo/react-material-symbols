import type { SVGProps } from 'react'

export default function MobileCharge({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m460-281 119-239h-79v-159L381-440h79v159ZM175-15v-931h608v223h43v193h-43v515H175Zm94-93h420v-744H269v744Zm0 0v-744 744Z" />
    </svg>
  )
}
