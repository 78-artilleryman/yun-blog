"use client";

import { useState } from "react";
import { DemoContainer, DemoButton } from "@/components/DemoContainer";

// 데모에서 잘라낼 대상 박스. 그라디언트 배경 위에 텍스트를 얹는다.
function TargetBox({ clipPath }: { clipPath: string }) {
  return (
    <div
      className="flex h-40 w-64 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 text-lg font-semibold text-white shadow-lg"
      style={{
        clipPath,
        transition: "clip-path 0.6s cubic-bezier(0.32, 0.72, 0, 1)",
      }}
    >
      clip-path
    </div>
  );
}

const PRESETS = [
  { label: "전체 보기", value: "inset(0 0 0 0)" },
  { label: "위 50% 숨기기", value: "inset(50% 0 0 0)" },
  { label: "원", value: "circle(35% at 50% 50%)" },
  {
    label: "별",
    value:
      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  },
] as const;

export function ClipPathPresetDemo() {
  const [preset, setPreset] = useState<(typeof PRESETS)[number]>(PRESETS[0]);

  return (
    <DemoContainer>
      <TargetBox clipPath={preset.value} />
      <div className="flex flex-wrap justify-center gap-2">
        {PRESETS.map((p) => (
          <DemoButton
            key={p.label}
            active={preset.label === p.label}
            onClick={() => setPreset(p)}
          >
            {p.label}
          </DemoButton>
        ))}
      </div>
    </DemoContainer>
  );
}

export function InsetSliderDemo() {
  const [inset, setInset] = useState(0);
  const [round, setRound] = useState(0);

  return (
    <DemoContainer resettable>
      <div
        className="flex h-40 w-64 items-center justify-center bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 text-white shadow-lg"
        style={{ clipPath: `inset(${inset}% round ${round}px)` }}
      >
        <code className="text-sm font-medium">
          inset({inset}% round {round}px)
        </code>
      </div>
      <div className="flex w-64 flex-col gap-3 text-sm text-neutral-600 dark:text-neutral-300">
        <label className="flex items-center gap-3">
          <span className="w-12 shrink-0">inset</span>
          <input
            type="range"
            min={0}
            max={45}
            value={inset}
            onChange={(e) => setInset(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </label>
        <label className="flex items-center gap-3">
          <span className="w-12 shrink-0">round</span>
          <input
            type="range"
            min={0}
            max={80}
            value={round}
            onChange={(e) => setRound(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </label>
      </div>
    </DemoContainer>
  );
}
