import type { SVGProps, JSX } from 'react'

export default function Mobile3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M366.15-200h229.54v-30.77H366.15V-200ZM240-80v-800h481.85v196.15H760v138.39h-38.15V-80H240Z" />
    </svg>
  )
}
