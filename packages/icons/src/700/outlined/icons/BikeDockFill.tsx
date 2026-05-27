import type { SVGProps } from 'react'

export default function BikeDockFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-94l188-52 56-541q4-36 30.5-60t63.5-24h95q36 0 63 24t30 60l56 541 189 52v94H95Zm344-139h80v-497q0-17-11.5-28.5t-28-11.5q-16.5 0-28.5 11.5T439-731v497Z" />
    </svg>
  )
}
