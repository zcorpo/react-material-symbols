import type { SVGProps } from 'react'

export default function TabletFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-200v-560h800v560H80Zm116.92-30.77h566.16v-498.46H196.92v498.46Z" />
    </svg>
  )
}
