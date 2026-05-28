import type { SVGProps, JSX } from 'react'

export default function MobileCancel({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m370-316 110-109 110 109 55-54-110-110 110-110-55-55-110 110-110-110-54 55 109 110-109 110 54 54ZM175-15v-931h608v223h43v193h-43v515H175Zm94-93h420v-744H269v744Zm0 0v-744 744Z" />
    </svg>
  )
}
