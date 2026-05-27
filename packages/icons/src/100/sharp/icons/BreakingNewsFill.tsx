import type { SVGProps } from 'react'

export default function BreakingNewsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M249-293h50v-50h-50v50Zm14-111h22v-251h-22v251Zm206 99h228v-22H469v22Zm0-165h228v-22H469v22Zm0-163h228v-22H469v22ZM130-172v-616h700v616H130Z" />
    </svg>
  )
}
