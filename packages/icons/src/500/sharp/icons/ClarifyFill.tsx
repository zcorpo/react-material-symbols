import type { SVGProps } from 'react'

export default function ClarifyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M262.15-300H520v-60H262.15v60Zm375.7 0h60v-360h-60v360Zm-375.7-150H520v-60H262.15v60Zm0-150H520v-60H262.15v60ZM66.02-114.02v-732.2h828.2v732.2H66.02Z" />
    </svg>
  )
}
