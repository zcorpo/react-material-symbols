import type { SVGProps, JSX } from 'react'

export default function PromptSuggestion({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m606-175-67-67 146-149H288q-81 0-137-58T95-588q0-83 56-141t137-58h26v95h-26q-42 0-70.5 30.5T189-588q0 42 28.5 72t70.5 30h397L538-634l68-67 260 263-260 263Z" />
    </svg>
  )
}
