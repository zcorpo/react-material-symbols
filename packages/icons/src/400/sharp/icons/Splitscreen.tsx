import type { SVGProps, JSX } from 'react'

export default function Splitscreen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-533v-307h720v307H120Zm60-60h600v-187H180v187Zm-60 473v-308h720v308H120Zm60-60h600v-188H180v188Zm0-413v-187 187Zm0 413v-188 188Z" />
    </svg>
  )
}
