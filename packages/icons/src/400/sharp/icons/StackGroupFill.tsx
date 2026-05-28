import type { SVGProps, JSX } from 'react'

export default function StackGroupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-80v-240H80v-560h560v240h240v560H320Z" />
    </svg>
  )
}
