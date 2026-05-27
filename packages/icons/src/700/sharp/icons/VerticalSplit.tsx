import type { SVGProps, JSX } from 'react'

export default function VerticalSplit({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M72-344v-94h349v94H72Zm0 178v-94h349v94H72Zm0-356v-94h349v94H72Zm0-178v-95h349v95H72Zm456 534v-629h361v629H528Zm95-94h172v-440H623v440Zm87-220Z" />
    </svg>
  )
}
