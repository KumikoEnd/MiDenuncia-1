import React from "react";
import '../hojasDeEstilo/RegistroUsuario.css'

import { useForm} from 'react-hook-form';
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom'


function RegistroUsuario() {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = valor =>{
        console.log(valor)

    }

    return (
        <div className="contenedor registroUsuarios-contenedor">
            <div  className="contenedor registroUsuarios">

                <div className="contenedor contenedor-top">
                    <h2 className="tituloLoginRegistre">MI DENUNCIA</h2>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="contenedor formulario-registrar" >

                    <label ><AiOutlineUser className="iconsFrom iconRegister"/>
                        <input {...register("nombre",{required: "hola"})} type="text" className="inputsForm inputRegister" placeholder="Nombre" />
                    </label>

                    <label ><AiOutlineUser className="iconsFrom iconRegister"/>
                        <input {...register("apellido")} type="text" className="inputsForm inputRegister" placeholder="Apellido" />
                    </label>

                    <label ><AiOutlineUser className="iconsFrom iconRegister"/>
                        <input {...register("nombreUsuario")} type="text" className="inputsForm inputRegister" placeholder="Nombre Usuario" />
                    </label>

                    <label ><AiOutlineUser className="iconsFrom iconRegister"/>
                        <input {...register("correo")} type="text" className="inputsForm inputRegister" placeholder="Correo" />
                    </label>

                    <label ><AiOutlineUser className="iconsFrom iconRegister"/>
                        <input {...register("contraseña")} type="text" className="inputsForm inputRegister" placeholder="Contraseña" />
                    </label>

                    <label ><AiOutlineUser className="iconsFrom iconRegister"/>
                        <input {...register("contraseñaConfirmar")} type="text" className="inputsForm inputRegister" placeholder="Confirmar Contraseña" />
                    </label>
 
                    <div className="contenedor contenedor-boton">
                        <button type="submit" className="btn btnResgistrar">Registrarse</button>
                    </div>
                </form>

                <div className="contenedor contenedor-bottom-registro">
                        <p className="textoLogin">¿Ya estas Registrado? <samp><Link to="/login">Inicar Sesión</Link></samp></p>
                </div>
            </div>  
        </div>
    )
}

export default RegistroUsuario;