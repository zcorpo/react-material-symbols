import type { SVGProps } from 'react'

export default function CameraOutdoorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-172v-402l268-202 268 202v66H418v314h330v22H212Zm263-79v-200h201v87l72-39v104l-72-39v87H475Z" />
    </svg>
  )
}
