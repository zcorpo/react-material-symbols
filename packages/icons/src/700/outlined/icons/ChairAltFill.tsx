import type { SVGProps, JSX } from 'react'

export default function ChairAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M169-86v-319q0-40 26.77-67T264-499h50v-68h-50q-41.46 0-68.23-27Q169-621 169-661v-119q0-40 26.77-67.5T264-875h432q41.46 0 68.23 27.5Q791-820 791-780v119q0 40-26.77 67T696-567h-50v68h50q41.46 0 68.23 27Q791-445 791-405v319h-95v-110H264v110h-95Zm205-413h212v-68H374v68Z" />
    </svg>
  )
}
