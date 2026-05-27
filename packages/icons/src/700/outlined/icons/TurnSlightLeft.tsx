import type { SVGProps } from 'react'

export default function TurnSlightLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M529-135v-313L312-664v127h-94v-289h288v95H379l216 217q13 13 20.5 30.38T623-448v313h-94Z" />
    </svg>
  )
}
