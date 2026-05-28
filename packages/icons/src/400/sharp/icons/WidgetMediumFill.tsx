import type { SVGProps, JSX } from 'react'

export default function WidgetMediumFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-224h224v224H80Zm288 0v-224h224v224H368Zm288 0v-224h224v224H656ZM80-368v-224h224v224H80Zm288 0v-224h224v224H368Zm288 0v-224h224v224H656ZM80-656v-224h512v224H80Zm576 0v-224h224v224H656Z" />
    </svg>
  )
}
