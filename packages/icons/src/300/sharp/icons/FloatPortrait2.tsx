import type { SVGProps, JSX } from 'react'

export default function FloatPortrait2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M298.46-519.61h261.93v-221.93H298.46v221.93ZM780-100H180v-760h600v760Zm-45.39-45.39v-669.22H225.39v669.22h509.22Zm0-669.22H225.39h509.22Z" />
    </svg>
  )
}
