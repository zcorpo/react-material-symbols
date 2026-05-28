import type { SVGProps, JSX } from 'react'

export default function DraftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-100v-760h405.23L780-665.23V-100H180Zm382.54-544.77h172.07L562.54-814.61v169.84Z" />
    </svg>
  )
}
