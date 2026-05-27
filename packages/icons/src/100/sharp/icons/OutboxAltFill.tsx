import type { SVGProps, JSX } from 'react'

export default function OutboxAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m294-322 345-159-345-158v104l145 54-145 54v105Zm345-159ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
