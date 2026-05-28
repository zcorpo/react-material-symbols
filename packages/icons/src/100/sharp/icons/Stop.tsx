import type { SVGProps, JSX } from 'react'

export default function Stop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M314-646v332-332Zm-22 354v-376h376v376H292Zm22-22h332v-332H314v332Z" />
    </svg>
  )
}
