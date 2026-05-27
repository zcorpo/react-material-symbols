import type { SVGProps } from 'react'

export default function ArrowOrEdge({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-95 90-265l66-69 57 58v-242H10v-348h95v254h203v336l56-56 66 67L260-95Zm439 0L528-265l67-69 57 58v-336h204v-254h94v348H746v241l57-55 66 67L699-95Z" />
    </svg>
  )
}
