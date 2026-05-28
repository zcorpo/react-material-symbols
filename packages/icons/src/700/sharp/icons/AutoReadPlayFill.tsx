import type { SVGProps, JSX } from 'react'

export default function AutoReadPlayFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m407-411 221-149-221-148v297ZM55-55v-851h851v691H215L55-55Z" />
    </svg>
  )
}
