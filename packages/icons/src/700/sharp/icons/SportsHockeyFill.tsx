import type { SVGProps, JSX } from 'react'

export default function SportsHockeyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M34-143v-159h83v159H34Zm127 0v-159h166l52-106 72 128-68 137H161Zm682 0v-159h83v159h-83Zm-44 0H577L242-817h132l108 217 104-217h132L551-470l82 168h166v159Z" />
    </svg>
  )
}
