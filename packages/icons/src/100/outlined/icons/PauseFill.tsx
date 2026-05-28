import type { SVGProps, JSX } from 'react'

export default function PauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M559-252v-456h138v456H559Zm-296 0v-456h139v456H263Z" />
    </svg>
  )
}
