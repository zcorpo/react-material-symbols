import type { SVGProps } from 'react'

export default function DoneOutline({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m381-255.85 430.69-430.3-32.61-32.62L381-321.08 181.54-520.54l-32.62 32.62L381-255.85Zm0 64.62L84.31-487.92l97.23-96.85L381-385.31l398.46-398.46 96.84 97.23L381-191.23Z" />
    </svg>
  )
}
