import type { SVGProps } from 'react'

export default function TabGroupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-160v-553.85h30.77v523.08h523.08V-160H140Zm101.54-101.54V-840H820v578.46H241.54Zm289.23-416.92h258.46v-130.77H530.77v130.77Z" />
    </svg>
  )
}
