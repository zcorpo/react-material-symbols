import type { SVGProps, JSX } from 'react'

export default function BarcodeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M34.5-196.89v-566.7h85.96v566.7H34.5Zm121.43 0v-566.7h80.96v566.7h-80.96Zm121.68 0v-566.7h40.48v566.7h-40.48Zm121.43 0v-566.7H480v566.7h-80.96Zm121.44 0v-566.7h121.43v566.7H520.48Zm162.15 0v-566.7h40.48v566.7h-40.48Zm121.44 0v-566.7H925.5v566.7H804.07Z" />
    </svg>
  )
}
