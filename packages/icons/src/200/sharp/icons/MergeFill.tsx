import type { SVGProps, JSX } from 'react'

export default function MergeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m256-160-21.23-21.23 229.85-229.08v-332.61L367.69-646l-21.23-20.46L480-800l133.54 133.54L592.31-646l-96.93-96.92v332.61l229.85 229.08L704-160 480-384 256-160Z" />
    </svg>
  )
}
