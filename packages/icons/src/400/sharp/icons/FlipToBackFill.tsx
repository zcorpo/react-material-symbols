import type { SVGProps, JSX } from 'react'

export default function FlipToBackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-555h60v495h495v60H120Zm165-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm165 495v-60h60v60h-60Zm0-495v-60h60v60h-60Zm165 0v-60h60v60h-60Zm0 495v-60h60v60h-60Zm165-495v-60h60v60h-60Zm0 495v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Z" />
    </svg>
  )
}
