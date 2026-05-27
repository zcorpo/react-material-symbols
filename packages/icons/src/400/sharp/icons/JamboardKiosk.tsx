import type { SVGProps } from 'react'

export default function JamboardKiosk({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M250-120v-60h200v-140H80v-520h800v520H510v140h200v60H250ZM140-380h680v-400H140v400Zm0 0v-400 400Z" />
    </svg>
  )
}
