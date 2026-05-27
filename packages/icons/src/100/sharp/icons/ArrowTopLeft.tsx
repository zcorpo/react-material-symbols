import type { SVGProps } from 'react'

export default function ArrowTopLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M686-212v-379H254l160 160-16 16-186-186 186-187 16 16-159 159h453v401h-22Z" />
    </svg>
  )
}
