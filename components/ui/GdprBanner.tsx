"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

export function GdprBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdpr-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("gdpr-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("gdpr-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Táto stránka používa cookies na zlepšenie vášho zážitku a analýzu návštevnosti.
            Viac informácií nájdete v našich{" "}
            <a
              href="/gdpr"
              className="text-zinc-900 dark:text-zinc-100 underline underline-offset-2 hover:text-amber-500 transition-colors"
            >
              zásadách ochrany súkromia
            </a>
            .
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={decline}
          >
            Odmietnuť
          </Button>
          <Button
            size="sm"
            onClick={accept}
            className="px-5 bg-amber-500 hover:bg-amber-600 text-white border-0"
          >
            Súhlasím
          </Button>
          <button
            onClick={decline}
            aria-label="Zavrieť"
            className="ml-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}