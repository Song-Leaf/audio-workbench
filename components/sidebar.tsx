import { cn } from "@/lib/utils"

import { SidebarButton } from "./sidebar-button"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  // active link
  // const { asPath } = useRouter()

  return (
    <div className={cn("min-w-28 pb-12", className)}>
      <div className="space-y-4 py-2">
        <div className="px-3 py-2">
          {/* <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2> */}
          <div className="space-y-1">
            <SidebarButton
              title="Introduction"
              link="/"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 size-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              }
            />
            <SidebarButton
              title="Playback"
              link="/playback"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 size-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              }
            />
            <SidebarButton
              title="Recording"
              link="/recording"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 size-4"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="M2 8h20" />
                  <circle cx="8" cy="14" r="2" />
                  <path d="M8 12h8" />
                  <circle cx="16" cy="14" r="2" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
