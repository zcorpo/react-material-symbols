import type { SVGProps, JSX } from 'react'

export default function TransitEnterexit({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M278-272v-336h49v252l320-320 35 36-319 319h251v49H278Z" />
    </svg>
  )
}
