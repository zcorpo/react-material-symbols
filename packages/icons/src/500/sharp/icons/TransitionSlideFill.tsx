import type { SVGProps } from 'react'

export default function TransitionSlideFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M34.02-154.02v-652.2h252.91v652.2H34.02Zm332.91 0v-652.2h559.29v652.2H366.93Z" />
    </svg>
  )
}
