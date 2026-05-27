import type { SVGProps } from 'react'

export default function SelectWindow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-142v-412h165v-264h531v412H664v264H132Zm22-22h488v-294H154v294Zm510-264h142v-294H319v168h345v126Z" />
    </svg>
  )
}
