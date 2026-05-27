import type { SVGProps } from 'react'

export default function HandshakeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m484-104 445-447-338-338-89 89 235 235-107 106-185-185-252 250 57 57 213-213 22 21-213 213 56 56 213-212 21 21-214 213 57 57 214-214 21 21-213 213 57 57ZM169-412l275-275 186 186 64-64-325-325L30-551l139 139Z" />
    </svg>
  )
}
