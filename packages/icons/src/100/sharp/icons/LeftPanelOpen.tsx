import type { SVGProps, JSX } from 'react'

export default function LeftPanelOpen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M503-590v220l111-110-111-110ZM194-194h128v-572H194v572Zm150 0h422v-572H344v572Zm-22 0H194h128Zm-150 22v-616h616v616H172Z" />
    </svg>
  )
}
