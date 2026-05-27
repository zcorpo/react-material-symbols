import type { SVGProps, JSX } from 'react'

export default function Send({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-238v-484l574 242-574 242Zm22-34 495-208-495-209v168l181 41-181 40v168Zm0 0v-417 417Z" />
    </svg>
  )
}
