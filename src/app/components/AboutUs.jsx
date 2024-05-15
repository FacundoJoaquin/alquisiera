import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GmailIcon from './icons/GmailIcon'
import LinkedinIcon from './icons/LinkedinIcon'
import InstagramIcon from './icons/InstagramIcon'
import Couple from '@/../public/coup.png'

const AboutUs = () => {
    return (
        <section className=" w-full flex h-max mb-8 xs:flex-col tb:flex-col tb:items-center">
            <Image src={Couple} className="" alt="Ilustración de Indiana Garcia Pravos y Facundo Joaquin" />
            <div className="w-2/3 flex flex-col gap-y-2 px-16 mt-10 xs:w-full xs:px-2 xs:gap-y-4 tb:w-full tb:px-2 tb:gap-y-4">
                <h3 className="text-3xl text-strongMainBlue font-semibold">
                    ¿Quienes somos?
                </h3>
                <p className="text-xl">
                    Somos <span className="text-strongMainBlue font-semibold">Facu e Indi</span>, una pareja que <span className="text-strongMainBlue font-semibold">intentamos mezclar nuestras
                        pasiones</span> y terminamos acá, con la intención de ayudar a alguien a
                    encontrar su próximo hogar.
                </p>
                <p className="text-xl">
                    Cada detalle fue realizado con amor y esfuerzo, <span className="text-strongMainBlue font-semibold">con la esperanza de
                        que esta plataforma sea de utilidad para todos aquellos que buscan
                        una casita donde vivir</span>.
                </p>
                <p className="text-xl">
                    Esperamos que este proyecto sea útil para alguien. <span className="text-strongMainBlue font-semibold">Si te gustó nuestro trabajo y estás pensando en una futura colaboración, nos encantaría escuchar tu idea</span>. A continuación, te dejamos nuestros datos de contacto por si estás interesado en trabajar juntos o con alguno de nosotros.
                </p>

                <div className="w-full flex justify-around mt-10 gap-4 text-center">

                    <div className="text-xl flex flex-col gap-y-1">
                        <span className="text-strongMainBlue font-semibold">
                            Indi - Ilustradora
                        </span>
                        <div className="flex justify-center gap-x-6">

                            <Link className="hover:scale-[1.15] transition-all duration-200" href={'mailto:indigarciap@gmail.com'}><GmailIcon /></Link>
                            <Link className="hover:scale-[1.15] transition-all duration-200" href={'https://www.linkedin.com/in/indiana-garcia-pravos-8a0036293/'}><LinkedinIcon /></Link>
                            <Link className="hover:scale-[1.15] transition-all duration-200" href={'https://www.instagram.com/igp.tattoo/'}><InstagramIcon /></Link>

                        </div>
                    </div>

                    <div className="text-xl flex flex-col gap-y-1">
                        <span className="text-strongMainBlue font-semibold">
                            Facu - Desarrollador
                        </span>
                        <div className="flex justify-center gap-x-6">

                            <Link className="hover:scale-[1.15] transition-all duration-200" href={'mailto:facundojoaquinn@gmail.com'}><GmailIcon /></Link>
                            <Link className="hover:scale-[1.15] transition-all duration-200" href={'https://www.linkedin.com/in/facujoaquin/'}><LinkedinIcon /></Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs