import type { SVGProps, JSX } from 'react'

export default function SendFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M107-146.43v-246.7L428.22-480 107-568.87v-244.7L896.96-480 107-146.43Z" />
    </svg>
  )
}
