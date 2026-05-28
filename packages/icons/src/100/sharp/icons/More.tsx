import type { SVGProps, JSX } from 'react'

export default function More({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M339-212 132-480l207-268h489v536H339ZM160-480l190 246h456v-492H350L160-480Zm323 0Zm-119 28h57v-56h-57v56Zm144 0h56v-56h-56v56Zm143 0h57v-56h-57v56Z" />
    </svg>
  )
}
