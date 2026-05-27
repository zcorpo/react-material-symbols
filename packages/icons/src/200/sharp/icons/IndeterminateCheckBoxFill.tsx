import type { SVGProps } from 'react'

export default function IndeterminateCheckBoxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M286.15-465.85h387.93v-30.77H286.15v30.77ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
