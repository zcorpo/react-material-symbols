import type { SVGProps } from 'react'

export default function CopyAllFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-234v-95h94v95H95Zm0-180v-95h94v95H95Zm0-180v-94h94v94H95ZM274-55v-94h95v94h-95Zm0-179v-672h552v672H274ZM454-55v-94h94v94h-94ZM95-55v-94h94v94H95Zm538 0v-94h95v94h-95ZM95-773v-95h94v95H95Z" />
    </svg>
  )
}
