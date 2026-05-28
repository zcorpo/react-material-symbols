import type { SVGProps, JSX } from 'react'

export default function Icon4gMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M307-306v-123H146v-225h22v203h139v-203h22v203h82v22h-82v123h-22Zm202 0v-348h305v22H531v304h261v-142H691v-22h123v186H509Z" />
    </svg>
  )
}
