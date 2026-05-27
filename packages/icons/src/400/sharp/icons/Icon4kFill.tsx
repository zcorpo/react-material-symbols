import type { SVGProps } from 'react'

export default function Icon4kFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M520-360h50v-90l84 90h66L608-480l112-120h-66l-84 90v-90h-50v240Zm-150 0h50v-63h40v-50h-40v-127h-50v127h-64v-127h-50v177h114v63ZM120-120v-720h720v720H120Z" />
    </svg>
  )
}
