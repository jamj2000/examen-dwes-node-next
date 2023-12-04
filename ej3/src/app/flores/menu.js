import Link from "next/link"

function Menu() {
    return (
        <div className='enlaces'>
            <Link href="/flores/delfinios_rosas">Delfinios rosas</Link>
            <Link href="/flores/tulipanes_rosas">Tulipanes rosas</Link>
            <Link href="/flores/camelia_blanca">Camelia blanca</Link>
            <Link href="/flores/tulipanes_amarillos">Tulipanes amarillos</Link>
            <Link href="/flores/camelias_rojas">Camelias rojas</Link>
            <Link href="/flores/clavel_bicolor">Clavel bicolor</Link>
        </div>
    )
}

export default Menu