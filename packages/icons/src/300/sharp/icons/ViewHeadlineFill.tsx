import type { SVGProps } from 'react'

export default function ViewHeadlineFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M170-381.23v-45.38h620v45.38H170Zm0 155.38v-45.38h620v45.38H170Zm0-307.54v-45.38h620v45.38H170Zm0-155.38v-45.38h620v45.38H170Z" />
    </svg>
  )
}
