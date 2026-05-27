import type { SVGProps, JSX } from 'react'

export default function Icon2dFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M281-376h145v-25H306v-66h120v-117H281v25h120v66H281v117ZM172-172v-616h616v616H172Zm340-203h148l20-21v-169l-20-20H512v210Zm25-25v-160h118v160H537Z" />
    </svg>
  )
}
