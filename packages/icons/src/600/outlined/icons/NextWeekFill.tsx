import type { SVGProps } from 'react'

export default function NextWeekFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-105.87v-622.04H307v-179.22h346v179.22h241.7v622.04H65.87Zm320.35-622.04h187.56v-100H386.22v100ZM426-266.09l150.52-150.52L425-568.13l-32.52 32.52 119 119-118 118L426-266.09Z" />
    </svg>
  )
}
