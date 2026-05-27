import type { SVGProps, JSX } from 'react'

export default function DisabledByDefaultFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-640h640v640H160Zm176-154.77 144-144 144 144L645.23-336l-144-144 144-144L624-645.23l-144 144-144-144L314.77-624l144 144-144 144L336-314.77Z" />
    </svg>
  )
}
