import type { SVGProps, JSX } from 'react'

export default function FolderOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h253l74 74h360v22H154v416l91-322h662l-98 346H132Z" />
    </svg>
  )
}
