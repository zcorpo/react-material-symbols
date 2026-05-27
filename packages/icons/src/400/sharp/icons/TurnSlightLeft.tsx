import type { SVGProps } from 'react'

export default function TurnSlightLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M540-160v-298L300-698v127h-60v-229h229v60H342l258 258v322h-60Z" />
    </svg>
  )
}
