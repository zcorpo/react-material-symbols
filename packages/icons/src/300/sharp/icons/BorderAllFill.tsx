import type { SVGProps, JSX } from 'react'

export default function BorderAllFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M502.69-140v-317.31H820V-140H502.69Zm0-362.69V-820H820v317.31H502.69Zm-362.69 0V-820h317.31v317.31H140ZM140-140v-317.31h317.31V-140H140Z" />
    </svg>
  )
}
