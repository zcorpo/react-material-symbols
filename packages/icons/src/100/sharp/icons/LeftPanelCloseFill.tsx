import type { SVGProps, JSX } from 'react'

export default function LeftPanelCloseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M614-370v-220L503-480l111 110ZM344-194h422v-572H344v572Zm-172 22v-616h616v616H172Z" />
    </svg>
  )
}
