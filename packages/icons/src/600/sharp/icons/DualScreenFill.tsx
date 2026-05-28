import type { SVGProps, JSX } from 'react'

export default function DualScreenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M152.65-196.91v-691l415.26 153.08v704.7L152.65-196.91Zm475.26 4.26v-583.18L323.96-887.91h483.95v695.26h-180Z" />
    </svg>
  )
}
