import type { SVGProps, JSX } from 'react'

export default function VolumeMuteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M255-335v-291h175l236-235v762L430-335H255Z" />
    </svg>
  )
}
