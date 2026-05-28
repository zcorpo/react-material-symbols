import type { SVGProps, JSX } from 'react'

export default function KeepFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m648.7-462.7 86 77v79.79H519.61v239.3L480-27l-39.61-39.61v-239.3H225.87v-79.79l80-77v-322.26h-50v-79.22H698.7v79.22h-50v322.26Z" />
    </svg>
  )
}
