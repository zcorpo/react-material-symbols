import type { SVGProps } from 'react'

export default function PowerInputFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-356v-94h229v94H55Zm0-154v-95h811v95H55Zm289 154v-94h234v94H344Zm294 0v-94h228v94H638Z" />
    </svg>
  )
}
