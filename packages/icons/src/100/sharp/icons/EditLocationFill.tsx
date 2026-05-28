import type { SVGProps, JSX } from 'react'

export default function EditLocationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M363-443h16l153-153-16-16-153 153v16Zm199-183 28-28-16-16-28 28 16 16Zm-82 495Q345-252 276-357t-69-190q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547q0 85-69 190T480-131Z" />
    </svg>
  )
}
