"use client";

import { useEffect, useRef } from "react";

type ShapeKind = "server" | "computer" | "cloud" | "code";

type Shape = {
  kind: ShapeKind;
  x: number;
  y: number;
  size: number;
  speed: number;
  phase: number;
  snippet?: string;
};

const snippets = [
  "device.enroll()",
  "policy.sync",
  "const cloud = secure",
  "GET /status 200",
  "mdm.profile.apply",
  "<server />",
  "audit.log.write",
];

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawCloud(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = "rgba(190, 233, 255, 0.16)";
  ctx.strokeStyle = "rgba(190, 233, 255, 0.58)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(size * 0.24, size * 0.45, size * 0.2, Math.PI, 0);
  ctx.arc(size * 0.48, size * 0.34, size * 0.28, Math.PI, 0);
  ctx.arc(size * 0.74, size * 0.47, size * 0.2, Math.PI, 0);
  ctx.lineTo(size * 0.78, size * 0.66);
  ctx.lineTo(size * 0.2, size * 0.66);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawServer(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.save();
  ctx.translate(x, y);
  for (let i = 0; i < 4; i += 1) {
    const top = i * size * 0.2;
    roundedRect(ctx, 0, top, size * 1.18, size * 0.14, 5);
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    ctx.strokeStyle = "rgba(125, 211, 252, 0.62)";
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = i % 2 === 0 ? "#7dd3fc" : "#fda4af";
    ctx.beginPath();
    ctx.arc(size * 0.12, top + size * 0.07, 3, 0, Math.PI * 2);
    ctx.arc(size * 0.22, top + size * 0.07, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(226, 246, 255, 0.54)";
    ctx.fillRect(size * 0.42, top + size * 0.06, size * 0.56, 2);
  }
  ctx.restore();
}

function drawComputer(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.save();
  ctx.translate(x, y);
  roundedRect(ctx, 0, 0, size * 0.86, size * 0.56, 7);
  ctx.fillStyle = "rgba(5, 38, 68, 0.42)";
  ctx.strokeStyle = "rgba(190, 233, 255, 0.62)";
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "rgba(125, 211, 252, 0.28)";
  ctx.fillRect(size * 0.12, size * 0.12, size * 0.62, size * 0.25);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.36)";
  ctx.beginPath();
  ctx.moveTo(size * 0.34, size * 0.56);
  ctx.lineTo(size * 0.3, size * 0.74);
  ctx.lineTo(size * 0.58, size * 0.74);
  ctx.lineTo(size * 0.52, size * 0.56);
  ctx.stroke();
  ctx.restore();
}

function drawCode(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  snippet: string,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.font = `${Math.max(11, size * 0.15)}px Consolas, "Courier New", monospace`;
  ctx.fillStyle = "rgba(224, 247, 255, 0.68)";
  ctx.fillText(snippet, 0, 0);
  ctx.fillStyle = "rgba(125, 211, 252, 0.24)";
  ctx.fillRect(0, 8, size * 1.7, 1);
  ctx.restore();
}

export function TechBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationId = 0;
    let shapes: Shape[] = [];
    let width = 0;
    let height = 0;

    const reset = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const base = [
        ["cloud", 0.12, 0.2, 116, 0.17],
        ["server", 0.74, 0.17, 112, 0.12],
        ["computer", 0.22, 0.68, 92, 0.16],
        ["cloud", 0.82, 0.54, 128, 0.14],
        ["server", 0.52, 0.72, 98, 0.13],
        ["computer", 0.63, 0.35, 100, 0.18],
        ["code", 0.08, 0.48, 118, 0.2],
        ["code", 0.6, 0.84, 126, 0.22],
        ["code", 0.38, 0.16, 118, 0.19],
      ] as const;
      shapes = base.map(([kind, x, y, size, speed], index) => ({
        kind,
        x: x * width,
        y: y * height,
        size,
        speed,
        phase: index * 0.8,
        snippet: snippets[index % snippets.length],
      }));
    };

    const drawLanes = (time: number) => {
      ctx.save();
      ctx.lineWidth = 1;
      for (let i = 0; i < 7; i += 1) {
        const y = ((height / 7) * i + time * (0.18 + i * 0.02)) % height;
        ctx.strokeStyle =
          i % 2 === 0 ? "rgba(125, 211, 252, 0.18)" : "rgba(251, 113, 133, 0.12)";
        ctx.beginPath();
        ctx.moveTo(-40, y);
        ctx.lineTo(width + 40, y + Math.sin(time * 0.002 + i) * 36);
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(190, 233, 255, 0.14)";
      shapes.slice(0, 6).forEach((shape, index) => {
        const next = shapes[(index + 2) % 6];
        ctx.beginPath();
        ctx.moveTo(shape.x, shape.y);
        ctx.lineTo(next.x, next.y);
        ctx.stroke();
      });
      ctx.restore();
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      drawLanes(time);

      shapes.forEach((shape, index) => {
        const drift = reduceMotion.matches
          ? 0
          : Math.sin(time * 0.001 * shape.speed + shape.phase) * 14;
        const x = shape.x + drift;
        const y = shape.y + Math.cos(time * 0.001 * shape.speed + shape.phase) * 9;

        if (shape.kind === "cloud") {
          drawCloud(ctx, x, y, shape.size);
        } else if (shape.kind === "server") {
          drawServer(ctx, x, y, shape.size);
        } else if (shape.kind === "computer") {
          drawComputer(ctx, x, y, shape.size);
        } else {
          const slide = reduceMotion.matches ? 0 : (time * 0.018 + index * 70) % (width + 240);
          drawCode(ctx, slide - 180, y, shape.size, shape.snippet ?? snippets[0]);
        }
      });

      if (!reduceMotion.matches) {
        animationId = requestAnimationFrame(render);
      }
    };

    const observer = new ResizeObserver(() => {
      reset();
      render(performance.now());
    });

    reset();
    observer.observe(canvas);
    render(performance.now());

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="tech-backdrop" aria-hidden="true" />;
}
