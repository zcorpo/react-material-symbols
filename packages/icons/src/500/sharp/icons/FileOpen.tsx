import type { SVGProps, JSX } from 'react'

export default function FileOpen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-74.02v-812.2h408.61l243.59 243.59v268.56h-68.37v-223.78h-220v-220h-295.7v675.7h403.78v68.13H154.02Zm723.98 1L754.07-197.2v123.09h-68.14v-239.96h239.96v68.14H801.8L925.74-122 878-73.02Zm-655.85-69.13v-675.7 675.7Z" />
    </svg>
  )
}
