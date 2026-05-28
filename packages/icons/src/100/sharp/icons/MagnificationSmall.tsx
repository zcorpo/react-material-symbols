import type { SVGProps, JSX } from 'react'

export default function MagnificationSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M224-548h109v-108H224v108Zm-92 336v-536h696v536H132Zm22-22h652v-492H154v492Zm0 0v-492 492Z" />
    </svg>
  )
}
