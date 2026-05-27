import type { SVGProps } from 'react'

export default function WeekendFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M242-389v-220h-90v-191h656v191h-90v220H242ZM40-160v-389h142v220h596v-220h142v389H40Z" />
    </svg>
  )
}
