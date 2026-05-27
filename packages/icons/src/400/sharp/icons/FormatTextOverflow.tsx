import type { SVGProps } from 'react'

export default function FormatTextOverflow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-640h60v640h-60Zm512-193-42-42 55-55H320v-60h365l-55-55 42-42 128 127-128 127ZM500-160v-190h60v190h-60Zm0-450v-190h60v190h-60Z" />
    </svg>
  )
}
