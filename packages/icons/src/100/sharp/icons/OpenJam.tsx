import type { SVGProps, JSX } from 'react'

export default function OpenJam({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M292-184h376v-22H491v-373l94 94 17-17-122-122-122 122 17 17 94-94v373H292v22Zm188-302ZM132-374v-414h696v414H603v-22h203v-370H154v370h203v22H132Z" />
    </svg>
  )
}
