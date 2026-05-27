import type { SVGProps } from 'react'

export default function DevicesFold2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M175-95v-771h600l174 433H777.8v338H175Zm194-432h441l-99-245H271l98 245ZM268-188h416v-245H306l-38-94v339Zm273-462Z" />
    </svg>
  )
}
