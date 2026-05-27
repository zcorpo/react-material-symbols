import type { SVGProps, JSX } from 'react'

export default function ShowChart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M126-206.43 66.43-266 380-579.57 539.43-419.7l298-335 56.14 54.57-352.44 399.26L380-460.43l-254 254Z" />
    </svg>
  )
}
