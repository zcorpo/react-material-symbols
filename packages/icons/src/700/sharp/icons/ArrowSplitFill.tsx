import type { SVGProps } from 'react'

export default function ArrowSplitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-432v-94h324l206-206h-99v-94h260v259h-95v-98L498-432H135Zm431 297v-95h98L523-372l66-66 142 140v-97h95v260H566Z" />
    </svg>
  )
}
