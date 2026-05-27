import type { SVGProps, JSX } from 'react'

export default function FlightClassFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-440v-360h240v360H480Zm240 200H320L200-643v-157h60v148l105 352h355v60ZM320-120v-60h400v60H320Z" />
    </svg>
  )
}
