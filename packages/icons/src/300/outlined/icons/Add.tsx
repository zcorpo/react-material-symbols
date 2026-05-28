import type { SVGProps, JSX } from 'react'

export default function Add({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457.31-457.31H220v-45.38h237.31V-740h45.38v237.31H740v45.38H502.69V-220h-45.38v-237.31Z" />
    </svg>
  )
}
