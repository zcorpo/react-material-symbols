import type { SVGProps, JSX } from 'react'

export default function TextSnippetFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h411l205 205v411H172Zm134-163h348v-22H306v22Zm0-134h348v-22H306v22Zm0-134h213v-22H306v22Z" />
    </svg>
  )
}
