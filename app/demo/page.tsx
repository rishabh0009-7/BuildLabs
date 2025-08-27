import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function DemoPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-4">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold text-white">Liquid Glass Button Demo</h1>
        <div className="space-y-6">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-gray-300">Liquid Glass Button</h2>
            <LiquidButton className="px-8 py-4 text-lg">
              Book a Call
            </LiquidButton>
          </div>
          
          <div className="pt-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-300">Different Sizes</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <LiquidButton size="sm" className="px-6">
                Small
              </LiquidButton>
              <LiquidButton size="default" className="px-8">
                Default
              </LiquidButton>
              <LiquidButton size="lg" className="px-10">
                Large
              </LiquidButton>
              <LiquidButton size="xl" className="px-12">
                X-Large
              </LiquidButton>
              <LiquidButton size="xxl" className="px-16">
                XX-Large
              </LiquidButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
