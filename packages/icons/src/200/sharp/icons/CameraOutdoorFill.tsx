import type { SVGProps, JSX } from 'react'

export default function CameraOutdoorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-160v-420l280-210.77L760-580v78.46H424.23v310.77H760V-160H200Zm275-81.54v-209.23h211.15v87.69L760-403.69v115.07l-73.85-40.61v87.69H475Z" />
    </svg>
  )
}
