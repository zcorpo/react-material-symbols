import type { SVGProps, JSX } from 'react'

export default function TurnSlightLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M529-135v-313L312-664v127h-94v-289h288v95H379l244 245v351h-94Z" />
    </svg>
  )
}
