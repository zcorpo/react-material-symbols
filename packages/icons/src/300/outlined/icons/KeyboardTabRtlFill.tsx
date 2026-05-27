import type { SVGProps } from 'react'

export default function KeyboardTabRtlFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.39-250H100v-460h45.39v460Zm328.07-3.62L247.08-480l226.38-226.38 31.62 31.23L334-502.69h526v45.38H333.61l172.47 172.08-32.62 31.61Z" />
    </svg>
  )
}
