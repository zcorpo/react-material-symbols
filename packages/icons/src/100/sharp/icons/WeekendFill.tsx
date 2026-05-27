import type { SVGProps } from 'react'

export default function WeekendFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M289-467v-148H146v-279h668v279H671v148H289ZM20-140v-405h187v316h546v-316h187v405H20Z" />
    </svg>
  )
}
