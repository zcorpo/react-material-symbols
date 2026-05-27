import type { SVGProps } from 'react'

export default function GridLayoutSideFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M825.87-105.87V-854.7h28.83v748.83h-28.83Zm-709.26-10.74H530v-726.78H116.61v726.78Zm726.78 0v-726.78H590v726.78h253.39Z" />
    </svg>
  )
}
