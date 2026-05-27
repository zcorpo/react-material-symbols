import type { SVGProps } from 'react'

export default function MagnificationLargeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M224-388h429v-268H224v268Zm-92 176v-536h696v536H132Z" />
    </svg>
  )
}
