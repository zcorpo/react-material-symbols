import type { SVGProps } from 'react'

export default function AddTriangleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80.77-200 480-880l400 680H80.77Zm383.85-136.15h30.76v-79.16h80.93v-30.77h-80.93v-78.61h-30.76v78.61h-80.16v30.77h80.16v79.16Z" />
    </svg>
  )
}
