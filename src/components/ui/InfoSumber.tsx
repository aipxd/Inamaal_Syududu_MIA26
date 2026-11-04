import { Icon } from "@iconify/react";

export const InfoSumber = () => {
  return (
    <div className="bg-white flex justify-center items-center gap-2 p-2 rounded-2xl border border-black/15 max-w-55 lg:max-w-none lg:rounded-4xl lg:p-4">
        <Icon icon="icon-park-outline:safe-retrieval" className="text-brand-icon text-xl lg:text-3xl"/>
        <span className="text-xs lg:text-lg">Data: Bapanas via Data.go.id</span>
    </div>
  )
}
