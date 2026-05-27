import type { SVGProps } from 'react'

export default function CloseSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m305.02-257.28-47.74-47.74L432.02-480 257.28-653.98l47.74-47.74L480-526.98l173.98-174.74 47.74 47.74L526.98-480l174.74 174.98-47.74 47.74L480-432.02 305.02-257.28Z" />
    </svg>
  )
}
