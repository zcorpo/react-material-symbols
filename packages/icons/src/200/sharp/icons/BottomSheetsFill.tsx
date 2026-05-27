import type { SVGProps } from 'react'

export default function BottomSheetsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-640h640v640H160Zm30.77-286.15h578.46v-323.08H190.77v323.08Z" />
    </svg>
  )
}
