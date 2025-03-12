import { tabs } from './tabs'

export const AnimatedNavbarSkeleton = () => {
  return (
    <div className="relative hidden w-fit items-center justify-center gap-5 rounded-full p-2 backdrop-blur-2xl md:flex">
      {tabs.map((link, i) => (
        <button
          key={i}
          id={'uuu-btn-' + i}
          className="flex h-fit items-center justify-center rounded-full px-2 py-2 text-nowrap transition-colors duration-200"
        >
          <a href={link.href}>{link.title}</a>
        </button>
      ))}
    </div>
  )
}
