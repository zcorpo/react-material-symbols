import type { SVGProps } from 'react'

export default function NavigationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m186.61-94-43.57-43.56L480-906l336.96 768.44L773.39-94 480-227.69 186.61-94Z" />
    </svg>
  )
}
