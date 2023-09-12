import { TextInput } from "@tremor/react"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
function Navbar() {
    return (
        <div className="flex flex-col md:flex-row md:justify-between p-4 gap-4">
            <h1 className="text-slate-50 text-xl md:text-4xl">Dashboard</h1>
            <div>
                <TextInput icon={MagnifyingGlassIcon} placeholder="Search..." />
            </div>
        </div>
    )
}

export default Navbar
