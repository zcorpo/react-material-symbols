import type { SVGProps, JSX } from 'react'

export default function HomeImprovementAndToolsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M226.13-885.74h507.98L603.22-697.46v148.85h-246.2v-148.85L226.13-885.74Zm130.89 397.13h246.2v118h-246.2v-118Zm0 178h246.2v118.63L480-69 357.02-191.48v-119.13Z" />
    </svg>
  )
}
