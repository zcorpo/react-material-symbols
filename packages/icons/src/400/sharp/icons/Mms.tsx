import type { SVGProps, JSX } from 'react'

export default function Mms({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M262-390h460L580-577 454-410l-92-113-100 133ZM80-80v-800h800v640H240L80-80Zm134-220h606v-520H140v600l74-80Zm-74 0v-520 520Z" />
    </svg>
  )
}
