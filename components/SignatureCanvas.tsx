"use client";

import {
  useRef,
  useEffect,
  useCallback,
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

    const getPos = useCallback(
      (
        e: MouseEvent | TouchEvent,
      ): { x: number; y: number } | null => {
        const canvas = canvasRef.current;
        if (!canvas) return null;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        if ("touches" in e) {
          const touch = e.touches[0];
          if (!touch) return null;
          return {
            x: (touch.clientX - rect.left) * scaleX,
            y: (touch.clientY - rect.top) * scaleY,
          };
        }
        return {
          x: (e.clientX - rect.left) * scaleX,
          y: (e.clientY - rect.top) * scaleY,
        };
      },
      [],
    );

    const startDraw = useCallback(
      (e: MouseEvent | TouchEvent) => {
        e.preventDefault();
        isDrawing.current = true;
        const pos = getPos(e);
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx && pos) {
          ctx.beginPath();
          ctx.moveTo(pos.x, pos.y);
        }
      },
      [getPos],
    );

    const draw = useCallback(
      (e: MouseEvent | TouchEvent) => {
        if (!isDrawing.current) return;
        e.preventDefault();
        const pos = getPos(e);
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx && pos) {
          ctx.lineTo(pos.x, pos.y);
          ctx.stroke();
          hasDrawn.current = true;
        }
      },
      [getPos],
    );

    const endDraw = useCallback(() => {
      if (isDrawing.current) {
        isDrawing.current = false;
        onDrawEnd?.();
      }
    }, [onDrawEnd]);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * 2;
      canvas.height = rect.height * 2;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.strokeStyle = "#C9AC2A";
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.scale(2, 2);
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
    }, [startDraw, draw, endDraw]);

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
