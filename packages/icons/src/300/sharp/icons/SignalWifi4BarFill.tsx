import type { SVGProps, JSX } from 'react'

export default function SignalWifi4BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-148.46 28.46-600q94-85.54 208.89-132.77Q352.23-780 480-780q127.77 0 242.65 47.23Q837.54-685.54 931.54-600L480-148.46Z" />
    </svg>
  )
}
