import type { SVGProps, JSX } from 'react'

export default function Battery4Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M340-492h280v-264H340v264ZM280-80v-736h120v-64h160v64h120v736H280Z" />
    </svg>
  )
}
