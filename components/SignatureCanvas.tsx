"use client";

import {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface SignatureCanvasHandle {
  clear: () => void;
  isEmpty: () => boolean;
  toDataURL: () => string;
}

interface SignatureCanvasProps {
  height?: number;
  onDrawEnd?: () => void;
}

const SignatureCanvas = forwardRef<SignatureCanvasHandle, SignatureCanvasProps>(
  function SignatureCanvas({ height = 160, onDrawEnd }, ref) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawing = useRef(false);
    const hasDrawn = useRef(false);
    const onDrawEndRef = useRef(onDrawEnd);
    onDrawEndRef.current = onDrawEnd;

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 2;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.scale(dpr, dpr);
      ctx.strokeStyle = "#C9AC2A";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      function getPos(e: MouseEvent | TouchEvent): { x: number; y: number } | null {
        const r = canvas!.getBoundingClientRect();
        if ("touches" in e) {
          const touch = e.touches[0];
          if (!touch) return null;
          return { x: touch.clientX - r.left, y: touch.clientY - r.top };
        }
        return { x: e.clientX - r.left, y: e.clientY - r.top };
      }

      function startDraw(e: MouseEvent | TouchEvent) {
        e.preventDefault();
        isDrawing.current = true;
        const pos = getPos(e);
        if (ctx && pos) {
          ctx.beginPath();
          ctx.moveTo(pos.x, pos.y);
        }
      }

      function draw(e: MouseEvent | TouchEvent) {
        if (!isDrawing.current) return;
        e.preventDefault();
        const pos = getPos(e);
        if (ctx && pos) {
          ctx.lineTo(pos.x, pos.y);
          ctx.stroke();
          hasDrawn.current = true;
        }
      }

      function endDraw() {
        if (isDrawing.current) {
          isDrawing.current = false;
          onDrawEndRef.current?.();
        }
      }

      canvas.addEventListener("mousedown", startDraw);
      canvas.addEventListener("mousemove", draw);
      canvas.addEventListener("mouseup", endDraw);
      canvas.addEventListener("mouseleave", endDraw);
      canvas.addEventListener("touchstart", startDraw, { passive: false });
      canvas.addEventListener("touchmove", draw, { passive: false });
      canvas.addEventListener("touchend", endDraw);

      return () => {
        canvas.removeEventListener("mousedown", startDraw);
        canvas.removeEventListener("mousemove", draw);
        canvas.removeEventListener("mouseup", endDraw);
        canvas.removeEventListener("mouseleave", endDraw);
        canvas.removeEventListener("touchstart", startDraw);
        canvas.removeEventListener("touchmove", draw);
        canvas.removeEventListener("touchend", endDraw);
      };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useImperativeHandle(ref, () => ({
      clear: () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (canvas && ctx) {
          ctx.save();
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.restore();
          hasDrawn.current = false;
        }
      },
      isEmpty: () => !hasDrawn.current,
      toDataURL: () => canvasRef.current?.toDataURL("image/png") || "",
    }));

    return (
      <canvas
        ref={canvasRef}
        className="w-full cursor-crosshair touch-none rounded border border-slate bg-black-secondary"
        style={{ height: `${height}px` }}
      />
    );
  },
);

export default SignatureCanvas;
