import type { SVGProps, JSX } from 'react'

export default function SplitSceneLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M575.77-180v-45.39h198.84v-509.22H575.77V-780H820v600H575.77Zm-118.46 80v-80H140v-600h317.31v-80h45.38v760h-45.38Zm317.3-634.61v509.22-509.22Z" />
    </svg>
  )
}
