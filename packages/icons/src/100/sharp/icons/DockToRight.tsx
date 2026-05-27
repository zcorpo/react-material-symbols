import type { SVGProps } from 'react'

export default function DockToRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M194-194h128v-572H194v572Zm150 0h422v-572H344v572Zm-22 0H194h128Zm-150 22v-616h616v616H172Z" />
    </svg>
  )
}
