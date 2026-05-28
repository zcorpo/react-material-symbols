import type { SVGProps, JSX } from 'react'

export default function AirlineSeatLegroomExtra({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M508-306H120v-508h22v486h366v22Zm217 138L622-377H231v-437h182v295h202l139 287 104-43 20 38-153 69Z" />
    </svg>
  )
}
