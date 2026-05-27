import type { SVGProps, JSX } from 'react'

export default function HealthMetricsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M246-61v-185H61v-190h285.09L445-321h5l83-186 62 71h305v190H715v185H246Zm189-383-61-71H61v-200h185v-185h469v185h185v200H622l-98-117h-4l-85 188Z" />
    </svg>
  )
}
