import type { SVGProps, JSX } from 'react'

export default function FolderDeleteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-154.02v-652.2h344.35L481-743.35h405.22v589.33H74.02Zm423.83-128.37h220v-247.83h40v-50h-110v-35h-80v35h-110v50h40v247.83Zm50-50v-197.83h120v197.83h-120Z" />
    </svg>
  )
}
