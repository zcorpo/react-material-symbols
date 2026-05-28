import type { SVGProps, JSX } from 'react'

export default function ArrowMenuOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M412-183v-594q0-4.92 3.05-7.96 3.06-3.04 8-3.04 4.95 0 7.95 3.04t3 7.96v594q0 4.93-3.05 7.96-3.06 3.04-8 3.04-4.95 0-7.95-3.04-3-3.03-3-7.96Zm133-208v-177q0-9.42 8.5-12.71Q562-584 568-577l76 78q7 7.64 7 18.82T644-461l-76 78q-6 7-14.5 3.92-8.5-3.09-8.5-11.92Z" />
    </svg>
  )
}
