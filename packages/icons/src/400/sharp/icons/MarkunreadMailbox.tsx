import type { SVGProps, JSX } from 'react'

export default function MarkunreadMailbox({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-417v-148H140v425h680v-425H360v-60h520v545H80v-545h160v-255h300v160H300v303h-60ZM140-565v148-148 425-425Z" />
    </svg>
  )
}
