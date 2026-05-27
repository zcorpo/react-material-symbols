import type { SVGProps } from 'react'

export default function OnHubDevice({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M307.43-97.39v-79.22h345.14v79.22H307.43Zm0-109.22L261.3-865.44h437.4l-46.13 658.83H307.43Zm75.09-79.78h194.87l37.96-499.83H345.22l37.3 499.83Zm0-499.83h-37.3 270.13-232.83Z" />
    </svg>
  )
}
