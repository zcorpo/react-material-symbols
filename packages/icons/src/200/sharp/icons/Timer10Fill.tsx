import type { SVGProps, JSX } from 'react'

export default function Timer10Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M501.92-266.15h220.39v-427.7H501.92v427.7Zm-30.77 30.77v-489.24h281.93v489.24H471.15Zm-160 0v-458.47H207.92v-30.77h134v489.24h-30.77Z" />
    </svg>
  )
}
