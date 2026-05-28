import type { SVGProps, JSX } from 'react'

export default function FilterBAndWFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M800-160H160v-640h640v640Zm-608.46-30.77h288.84v-330.46L769.23-190v-579.23H480.38v248L191.54-190.77Z" />
    </svg>
  )
}
