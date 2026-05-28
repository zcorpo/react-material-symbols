import type { SVGProps, JSX } from 'react'

export default function WindowOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-120v-720h640v720H160Zm90-390h190v-40h80v40h190v-240H250v240Zm-30 330h520v-600H220v600Z" />
    </svg>
  )
}
