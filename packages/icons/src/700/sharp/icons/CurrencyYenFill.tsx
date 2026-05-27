import type { SVGProps } from 'react'

export default function CurrencyYenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M433-95v-141H223v-94h210v-83H223v-94h167L163-866h113l204 325 205-325h112L571-507h166v94H527v83h210v94H527v141h-94Z" />
    </svg>
  )
}
