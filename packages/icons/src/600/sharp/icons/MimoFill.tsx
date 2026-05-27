import type { SVGProps, JSX } from 'react'

export default function MimoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M253.78-105.87v-73L307-232.65H65.87V-854.7H894.7v622.05H652l54.22 53.78v73H253.78Z" />
    </svg>
  )
}
