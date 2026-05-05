import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, XIconBrand } from "@/components/ui/BrandIcons";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-6 md:flex-row lg:px-0">
        <p className="text-sm text-zinc-600">© 2026 Lanke Kiran Teja.</p>
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <Link href="/about" className="transition-colors duration-200 ease-out hover:text-zinc-300">
            About
          </Link>
          <Link href="/services" className="transition-colors duration-200 ease-out hover:text-zinc-300">
            Services
          </Link>
          <Link href="/#contact" className="transition-colors duration-200 ease-out hover:text-zinc-300">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {[
            {
              href: "https://x.com/KiranTejz20005",
              label: "Twitter",
              render: () => <XIconBrand size={14} />,
            },
            {
              href: "mailto:kiranlanke824@gmail.com",
              label: "Email",
              render: () => <Mail size={14} strokeWidth={2} />,
            },
            {
              href: "https://github.com/KiranTejz20005",
              label: "GitHub",
              render: () => <GithubIcon size={14} />,
            },
          ].map(({ href, label, render }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800/80 bg-zinc-900/40 text-zinc-500 transition-all duration-200 ease-out hover:border-zinc-700/80 hover:bg-zinc-800/50 hover:text-zinc-300"
            >
              {render()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
