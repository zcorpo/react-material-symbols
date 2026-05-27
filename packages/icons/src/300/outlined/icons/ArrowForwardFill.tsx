import type { SVGProps } from 'react'

export default function ArrowForwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M693.69-457.31H180v-45.38h513.69L448.39-748 480-780l300 300-300 300-31.61-32 245.3-245.31Z" />
    </svg>
  )
}
