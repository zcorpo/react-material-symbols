import type { SVGProps, JSX } from 'react'

export default function FlashOnFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M420-143.08V-420H307.69v-440h345.77L580-604.23h158.08L420-143.08Z" />
    </svg>
  )
}
