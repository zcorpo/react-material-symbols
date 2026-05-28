import type { SVGProps, JSX } from 'react'

export default function WindowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M502.69-457.31H820V-140H502.69v-317.31Zm0-45.38V-820H820v317.31H502.69Zm-45.38 0H140V-820h317.31v317.31Zm0 45.38V-140H140v-317.31h317.31Z" />
    </svg>
  )
}
