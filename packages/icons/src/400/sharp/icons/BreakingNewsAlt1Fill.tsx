import type { SVGProps, JSX } from 'react'

export default function BreakingNewsAlt1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M250-290h180v-60H250v60Zm400 0h60v-60h-60v60ZM250-450h180v-60H250v60Zm400 0h60v-220h-60v220ZM250-610h180v-60H250v60ZM72-120v-720h816v720H72Z" />
    </svg>
  )
}
