import type { SVGProps, JSX } from 'react'

export default function TileLargeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-183.46h258.77V-160H160Zm380.69 0v-183.46H800V-160H540.69ZM160-464.62V-800h640v335.38H160Z" />
    </svg>
  )
}
