import type { SVGProps } from 'react'

export default function Stop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M305.39-654.61v349.22-349.22ZM260-260v-440h440v440H260Zm45.39-45.39h349.22v-349.22H305.39v349.22Z" />
    </svg>
  )
}
