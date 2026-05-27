import type { SVGProps, JSX } from 'react'

export default function Chat({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-800h800v640H240L80-80Zm134-220h606v-520H140v600l74-80Zm-74 0v-520 520Zm100-99h313v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60Z" />
    </svg>
  )
}
