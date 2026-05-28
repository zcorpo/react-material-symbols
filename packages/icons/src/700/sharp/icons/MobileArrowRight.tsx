import type { SVGProps, JSX } from 'react'

export default function MobileArrowRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M315-520v80h182l-53 51 55 56 147-147-147-147-55 56 53 51H315ZM175-15v-931h608v223h43v193h-43v515H175Zm94-93h420v-744H269v744Zm0 0v-744 744Z" />
    </svg>
  )
}
