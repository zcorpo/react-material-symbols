import type { SVGProps, JSX } from 'react'

export default function Add2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457.31-140v-317.31H140v-45.38h317.31V-820h45.38v317.31H820v45.38H502.69V-140h-45.38Z" />
    </svg>
  )
}
