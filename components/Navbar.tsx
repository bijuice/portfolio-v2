export default function Navbar() {
  return (
    <nav className="flex  absolute top-0 w-full h-20 z-10 justify-center">
      <div className="max-w-[1500px] w-full h-full px-32 flex items-center justify-between">
        <div></div>

        <div className="relative">
          <button>menu</button>

          {/* <NavMenu /> */}
        </div>
      </div>
    </nav>
  )
}

function NavMenu() {
  return (
    <div className="absolute -bottom-8 right-0 px-3 rounded-md bg-secondary nav-menu w-32 text-primary font-bold text-right">
      here
    </div>
  )
}
