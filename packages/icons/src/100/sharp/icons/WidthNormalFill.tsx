import type { SVGProps, JSX } from 'react'

export default function WidthNormalFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm22-22h221v-492H154v492Zm431 0h221v-492H585v492Z" />
    </svg>
  )
}
