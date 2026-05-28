import type { SVGProps, JSX } from 'react'

export default function CleaningFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m351-691 52-118v-22h-58v-71h310v77l-44 95H478v-34l-68 73h-59ZM295-34v-326l183-330h188v656H295Z" />
    </svg>
  )
}
