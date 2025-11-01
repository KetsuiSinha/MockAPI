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
    <Sidebar>
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
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenu>
                      {collection1Endpoints.map((endpoint) => (
                        <SidebarMenuItem key={endpoint.method + endpoint.url}>
                          <SidebarMenuButton asChild>
                            <a href="#" className="flex items-center gap-2">
                              <span className="text-xs font-semibold">{endpoint.method}</span>
                              <span className="text-sm">{endpoint.url}</span>
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
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenu>
                      {collection2Endpoints.map((endpoint) => (
                        <SidebarMenuItem key={endpoint.method + endpoint.url}>
                          <SidebarMenuButton asChild>
                            <a href="#" className="flex items-center gap-2">
                              <span className="text-xs font-semibold">{endpoint.method}</span>
                              <span className="text-sm">{endpoint.url}</span>
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