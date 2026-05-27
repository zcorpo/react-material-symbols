import type { SVGProps, JSX } from 'react'

export default function LastPageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m274.31-257.69-32.62-32.62L431.39-480l-189.7-189.69 32.62-33L496.61-480l-222.3 222.31ZM664.62-250v-460H710v460h-45.38Z" />
    </svg>
  )
}
