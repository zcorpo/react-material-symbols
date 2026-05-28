import type { SVGProps, JSX } from 'react'

export default function Terminal2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M504.62-180v-45.39H790V-180H504.62ZM212.23-360.31l-32-31.61 177.62-178.23-177.62-178.23 32-31.62 209.85 209.85-209.85 209.84Z" />
    </svg>
  )
}
