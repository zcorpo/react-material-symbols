import type { SVGProps, JSX } from 'react'

export default function AirlineSeatLegroomNormal({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M660-120v-290H250v-430h220v250h290v370h120v100H660ZM560-280H120v-560h60v500h380v60Z" />
    </svg>
  )
}
