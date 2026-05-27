import type { SVGProps, JSX } from 'react'

export default function FullCoverage({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M60.78-94v-581.22H140v501.44h627V-94H60.78ZM249-284.78V-853h690.78v568.22H249ZM328.78-364H860v-409.78H328.78V-364ZM408-482h161.22v-215H408v215Zm204.22 0h168v-88h-168v88Zm0-127h168v-88h-168v88ZM328.78-364v-409.78V-364Z" />
    </svg>
  )
}
