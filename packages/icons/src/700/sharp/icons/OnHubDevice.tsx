import type { SVGProps, JSX } from 'react'

export default function OnHubDevice({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M297-80v-94h366v94H297Zm0-124-47-681h460l-47 681H297Zm89-95h187.84L611-791H350l36 492Zm0-492h-36 261-225Z" />
    </svg>
  )
}
