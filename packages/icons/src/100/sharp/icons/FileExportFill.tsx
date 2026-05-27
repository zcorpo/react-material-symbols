import type { SVGProps, JSX } from 'react'

export default function FileExportFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m223-106-15-16 147-147H216v-22h176v176h-22v-138L223-106Zm263-26v-253H212v-443h374l162 162v534H486Zm86-520h154L572-806l154 154-154-154v154Z" />
    </svg>
  )
}
