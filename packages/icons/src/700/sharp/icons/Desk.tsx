import type { SVGProps } from 'react'

export default function Desk({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M58-219v-524h845v524h-94v-85H642v85h-94v-429H152v429H58Zm584-344h167v-85H642v85Zm0 172h167v-85H642v85Z" />
    </svg>
  )
}
