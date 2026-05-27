import type { SVGProps } from 'react'

export default function CropLandscape({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-200v-560h720v560H120Zm30.77-30.77h658.46v-498.46H150.77v498.46Zm0 0v-498.46 498.46Z" />
    </svg>
  )
}
