import type { SVGProps, JSX } from 'react'

export default function BottomSheets({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-140v-680h680v680H140Zm45.39-313.08h589.22v-321.53H185.39v321.53Zm0 45.39v222.3h589.22v-222.3H185.39Zm0 0v222.3-222.3Z" />
    </svg>
  )
}
