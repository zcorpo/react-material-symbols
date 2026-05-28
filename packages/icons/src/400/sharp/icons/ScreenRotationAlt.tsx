import type { SVGProps, JSX } from 'react'

export default function ScreenRotationAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M544-48 128-462h86l330 330 246-246H652v-60h240v240h-60v-138L544-48ZM68-522v-240h60v138l288-288 416 414h-86L416-828 170-582h138v60H68Z" />
    </svg>
  )
}
