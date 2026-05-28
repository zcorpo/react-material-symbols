import type { SVGProps, JSX } from 'react'

export default function SelectCheckBoxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-640h647.08l-30.77 30.77H190.77v578.46h578.46v-329.92L800-551.46V-160H160Zm301-151.85L280.54-492.31l22-22 159.23 159.23L820.69-714l20.46 22L461-311.85Z" />
    </svg>
  )
}
