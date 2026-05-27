import type { SVGProps } from 'react'

export default function BrowseActivityFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-120v-60h880v60H40Zm40-120v-290h221l80 160h37l140-245 42 85h280v290H80Zm322-222-63-128H80v-250h800v250H638l-58-118h-38L402-462Z" />
    </svg>
  )
}
