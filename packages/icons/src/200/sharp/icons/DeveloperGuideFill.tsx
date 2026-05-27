import type { SVGProps, JSX } from 'react'

export default function DeveloperGuideFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-640h640v640H160Zm340-609.23v244.38l78.77-47.46 79.54 47.46v-244.38H500Z" />
    </svg>
  )
}
