import type { SVGProps, JSX } from 'react'

export default function VideoTemplateFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M157.69-80v-106.54h644.62V-80H157.69ZM120-272.69v-415.39h720v415.39H120Zm297.46-110.46L578.92-480l-161.46-97.08v193.93ZM157.69-774.23V-880h644.62v105.77H157.69Z" />
    </svg>
  )
}
