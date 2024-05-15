import ImgAbout from "@/../public/aboutImg.png";
import Image from "next/image";

export default function page() {
  return (
    <section className=" w-full h-[60rem] overflow-hidden xs:h-max">
      <h3 className="text-3xl text-center font-semibold xs:text-xl xs:text-start">
        ¿Te está costando encontrar tu próximo hogar? <br /> Tranqui,{" "}
        <span className="text-strongMainBlue font-semibold">
          estoy para eso
        </span>
        .
      </h3>
      <div className="w-full grid place-items-center">
        <p className="w-[80%] text-lg mt-4 text-center text-gray-500 xs:text-start xs:w-full xs:pr-2">
          Imagínate después de un día largo, llegas a tu casa y suspiras:
          &quot;Ahh, por fin en casita...&quot;. Esa sensación de alivio y
          pertenencia es lo que todos buscamos.{" "}
        </p>
        <p className="w-[80%] text-lg mt-4 text-center text-gray-500 xs:text-start xs:w-full xs:pr-2">
          Mi objetivo es ayudarte a encontrar ese lugar especial que puedas
          llamar hogar, donde puedas relajarte, recargar energías y simplemente
          ser vos mismo. Ya sea un acogedor monoambiente o una espaciosa casa
          familiar, estamos para acompañarte en esta emocionante búsqueda hacia
          tu próximo hogar.
        </p>
      </div>

      <div className="w-full h-auto flex px-14 mt-10 xs:px-2 xs:flex-col gap-x-10 xs:gap-y-6">
        <div className="flex-1 relative flex justify-center">
          <Image
            src={ImgAbout}
            alt="Busca alquileres baratos en Puerto Madryn en Alquileando"
          />
        </div>
        <div className="w-1/3 flex  flex-col gap-y-5 text-start text-gray-500  h-max xs:w-full ">
          <h3 className="text-3xl text-strongMainBlue font-semibold ">
            Pero entonces... <br /> ¿Qué hacemos?
          </h3>
          <p className="text-xl">
            Nosotros hacemos el trabajo duro por vos, rastreamos la información
            de varías inmobiliarias Madrynenses y la actualizamos todos los
            días. Así que cuando vos estés listo para buscar, nosotros ya
            estamos preparados.
          </p>
          <p className="text-xl">
            Entonces, ¿qué decís? ¿Estas listo para la <del>pesadilla</del>{" "}
            aventura de encontrar tu próximo hogar? No importa si es un
            monoambiente chiquito o una casa grande para toda la familia, ¡para
            eso estamos!
          </p>
        </div>
      </div>
    </section>
  );
}
