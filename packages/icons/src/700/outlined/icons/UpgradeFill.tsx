import type { SVGProps, JSX } from 'react'

export default function UpgradeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M263-135v-94h434v94H263Zm170-204v-338L329-573l-66-66 217-217 217 217-66 66-104-104v338h-94Z" />
    </svg>
  )
}
