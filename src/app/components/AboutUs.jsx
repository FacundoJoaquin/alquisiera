import Image from 'next/image'
import Madryn from '@/../public/unnamed.jpg'
import Avatar from '@/../public/avatar.png'

export default function page() {
    return (
        <section className=" w-full h-[60rem] mb-10 overflow-hidden">
            <h3 className="text-3xl text-center font-semibold">¿Te está costando encontrar tu próximo hogar? <br /> Tranqui, <span className='text-strongMainBlue font-semibold'>estoy para eso</span>.</h3>
            <div className='w-full grid place-items-center'>
                <p className='w-[80%] text-lg mt-4 text-center text-gray-500'>Imagínate después de un día largo, llegas a tu casa y suspiras: &quot;Ahh, por fin en casita...&quot;. Esa sensación de alivio y pertenencia es lo que todos buscamos. </p>
                <p className="w-[80%] text-lg mt-4 text-center text-gray-500">Mi objetivo es ayudarte a encontrar ese lugar especial que puedas llamar hogar, donde puedas relajarte, recargar energías y simplemente ser vos mismo. Ya sea un acogedor monoambiente o una espaciosa casa familiar, estamos para acompañarte en esta emocionante búsqueda hacia tu próximo hogar.</p>
            </div>

            <div className='w-full flex px-20 mt-10'>
                <div className='flex-1 h-[30rem] relative flex justify-center'>
                    <Image src={Madryn} className='h-96 w-auto absolute rounded-2xl' alt='Ciudad de Puerto Madryn, lugar de la ballena franca austral' />
                    <div className='h-72 w-auto absolute rounded-2xl left-[55%] bottom-0 '>
                        <Image src={Avatar} className='h-72 w-auto ' alt='Ciudad de Puerto Madryn, lugar de la ballena franca austral' />
                    </div>

                </div>
                <div className='w-1/2 flex flex-col gap-y-5 text-start text-gray-500 mt-10'>
                    <h3 className='text-2xl text-strongMainBlue font-semibold text-center'>Pero entonces <br /> ¿Qué hacemos?</h3>
                    <p>Nosotros hacemos el trabajo duro por vos, rastreamos la información de varías inmobiliarias Madrynenses y la actualizamos todos los días. Así que cuando vos estés listo para buscar, nosotros ya estamos preparados.</p>
                    <p>
                        Entonces, ¿qué decís? ¿Estas listo para la <del>pesadilla</del> aventura de encontrar tu próximo hogar? No importa si es un monoambiente chiquito o una casa grande para toda la familia, ¡para eso estamos!

                    </p>

                </div>
            </div>

            

        </section>
    )
}