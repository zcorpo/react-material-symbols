import type { SVGProps, JSX } from 'react'

export default function Stockpot({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-145.87v-504.09H854.7v504.09H105.87Zm79.22-79.22h589.82v-345.65H185.09v345.65Zm-79.22-464.87v-80.78h256.22v-83.96h235.82v83.96H854.7v80.78H105.87ZM480-398.7Z" />
    </svg>
  )
}
