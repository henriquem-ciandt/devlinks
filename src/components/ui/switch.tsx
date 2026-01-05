"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"

function Switch({}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <SwitchPrimitive.Root data-slot="switch" className="peer bg-surface hover:bg-surface-hover focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-6 w-16 shrink-0 items-center rounded-full border border-stroke 
    shadow-xs transition-all outline-none focus-visible:ring-[3px]" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <SwitchPrimitive.Thumb data-slot="switch-thumb" className="flex items-center justify-center bg-white text-black size-8 rounded-full hover:outline-highlight hover:outline-8 transition-transform 
      data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0">
        {theme === "dark" ? <MoonStar size={16} /> : <Sun size={16} />}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch }
