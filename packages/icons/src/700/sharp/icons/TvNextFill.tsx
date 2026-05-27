import type { SVGProps, JSX } from 'react'

export default function TvNextFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m805-50-54-53 124-124-123-123 53-53 177 176L805-50ZM317-95v-80H55v-691h851v383H693v308h-41v80H317Z" />
    </svg>
  )
}
