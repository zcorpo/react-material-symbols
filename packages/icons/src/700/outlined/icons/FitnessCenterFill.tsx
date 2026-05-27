import type { SVGProps } from 'react'

export default function FitnessCenterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m539-71-59-60 142-142-349-349-142 142-60-59 56-56-56-56 87-87-42-40 66-66 41 41 86-86 56 56 56-56 60 59-142 142 349 349 142-142 59 60-56 56 56 56-88 88 42 40-66 66-40-42-86 86-56-56-56 56Z" />
    </svg>
  )
}
