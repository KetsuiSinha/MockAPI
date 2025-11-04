"use client"
import { Plus, Trash2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface ParamSectionProps {
  params: { key: string; value: string }[]
  setParams: React.Dispatch<React.SetStateAction<{ key: string; value: string }[]>>
  headers: { key: string; value: string }[]
  setHeaders: React.Dispatch<React.SetStateAction<{ key: string; value: string }[]>>
  body: string
  setBody: React.Dispatch<React.SetStateAction<string>>
}

export function ParamSection({ params, setParams, headers, setHeaders, body, setBody }: ParamSectionProps) {
  const addHeader = () => setHeaders([...headers, { key: "", value: "" }])
  const removeHeader = (i: number) => setHeaders(headers.filter((_, x) => x !== i))
  const updateHeader = (i: number, f: string, v: string) => {
    const newHeaders = [...headers]
    newHeaders[i][f] = v
    setHeaders(newHeaders)
  }

  const addParam = () => setParams([...params, { key: "", value: "" }])
  const removeParam = (i: number) => setParams(params.filter((_, x) => x !== i))
  const updateParam = (i: number, f: string, v: string) => {
    const newParams = [...params]
    newParams[i][f] = v
    setParams(newParams)
  }

  return (
    <div className="flex flex-col flex-1 min-h-0 w-full bg-white">
      <Tabs defaultValue="params" className="flex flex-col h-full w-full">
        <TabsList className="w-full justify-start rounded-none border-b bg-gray-50 px-4 sticky top-0 z-10">
          <TabsTrigger value="params">Params</TabsTrigger>
          <TabsTrigger value="headers">Headers</TabsTrigger>
          <TabsTrigger value="body">Body</TabsTrigger>
        </TabsList>

        {/* Params */}
        <TabsContent value="params" className="flex-1 p-0 h-full">
          <ScrollArea className="h-full p-4">
            <div className="space-y-3">
              {params.map((param, index) => (
                <div key={index} className="flex gap-2 items-center bg-gray-50 p-2 rounded-md">
                  <Input
                    placeholder="Key"
                    value={param.key}
                    onChange={(e) => updateParam(index, "key", e.target.value)}
                    className="flex-1"
                  />
                  <Input
                    placeholder="Value"
                    value={param.value}
                    onChange={(e) => updateParam(index, "value", e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeParam(index)}
                    className="hover:bg-red-100"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={addParam} className="gap-2 mt-2">
                <Plus className="w-4 h-4" />
                Add Param
              </Button>
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </TabsContent>

        {/* Headers */}
        <TabsContent value="headers" className="flex-1 p-0 h-full">
          <ScrollArea className="h-full p-4">
            <div className="space-y-3">
              {headers.map((header, index) => (
                <div key={index} className="flex gap-2 items-center bg-gray-50 p-2 rounded-md">
                  <Input
                    placeholder="Key"
                    value={header.key}
                    onChange={(e) => updateHeader(index, "key", e.target.value)}
                    className="flex-1"
                  />
                  <Input
                    placeholder="Value"
                    value={header.value}
                    onChange={(e) => updateHeader(index, "value", e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeHeader(index)}
                    className="hover:bg-red-100"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={addHeader} className="gap-2 mt-2">
                <Plus className="w-4 h-4" />
                Add Header
              </Button>
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </TabsContent>

        {/* Body */}
        <TabsContent value="body" className="flex-1 p-0 h-full">
          <ScrollArea className="h-full p-4">
            <Textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Request body (JSON)"
              className="font-mono text-sm resize-none w-full min-h-[250px]"
            />
            <ScrollBar orientation="vertical" />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}
