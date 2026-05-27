import type { SVGProps, JSX } from 'react'

export default function Icon30fpsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-200v-80h255v-160H83v-80h252v-160H80v-80h335v240l-40 40 40 40v240H80Zm502-80h218v-400H582v400Zm-80 80v-560h378v560H502Z" />
    </svg>
  )
}
