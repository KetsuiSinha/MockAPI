import { LogOut, ChevronDown } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// API endpoints for each collection
const collection1Endpoints = [
  {
    method: "GET",
    url: "/api/users",
  },
  {
    method: "POST",
    url: "/api/users",
  },
  {
    method: "DELETE",
    url: "/api/users/:id",
  },
]

const collection2Endpoints = [
  {
    method: "GET",
    url: "/api/products",
  },
  {
    method: "POST",
    url: "/api/products",
  },
  {
    method: "PATCH",
    url: "/api/products/:id",
  },
  {
    method: "DELETE",
    url: "/api/products/:id",
  },
]

export function AppSidebar() {
  return (
    <Sidebar style={{ height: '100%' }}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Your Collections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <span>Collection_1</span>
                      <ChevronDown style={{ marginLeft: 'auto', transition: 'transform 0.2s' }} className="group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenu>
                      {collection1Endpoints.map((endpoint) => (
                        <SidebarMenuItem key={endpoint.method + endpoint.url}>
                          <SidebarMenuButton asChild>
                            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2, 0.5rem)' }}>
                              <span style={{ fontSize: 'var(--font-size-xs, 0.75rem)', fontWeight: 'var(--font-weight-semibold, 600)' }}>{endpoint.method}</span>
                              <span style={{ fontSize: 'var(--font-size-sm, 0.875rem)' }}>{endpoint.url}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <span>Collection_2</span>
                      <ChevronDown style={{ marginLeft: 'auto', transition: 'transform 0.2s' }} className="group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenu>
                      {collection2Endpoints.map((endpoint) => (
                        <SidebarMenuItem key={endpoint.method + endpoint.url}>
                          <SidebarMenuButton asChild>
                            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2, 0.5rem)' }}>
                              <span style={{ fontSize: 'var(--font-size-xs, 0.75rem)', fontWeight: 'var(--font-weight-semibold, 600)' }}>{endpoint.method}</span>
                              <span style={{ fontSize: 'var(--font-size-sm, 0.875rem)' }}>{endpoint.url}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#logout">
                <LogOut />
                <span>Logout</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}