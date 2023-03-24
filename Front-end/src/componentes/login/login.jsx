import { React,useState } from "react";
import style from './login.module.css'
import axios from 'axios'


import { Link,useNavigate } from 'react-router-dom'
import { AiOutlineUser,AiOutlineLock,AiFillGoogleCircle } from "react-icons/ai";
import { useForm} from 'react-hook-form';

function Login() {

    const {register,handleSubmit,formState:{errors}} = useForm()
    const [error,setError] = useState(null)
    const navigate = useNavigate();

// FUNCION PARA HACER EN ENVIO DE LOS DATOS Y ESPERAMOS UNA RESPUESTA DEL BACK-END
    function llamarBd(envio) {

        axios.post("https://midenuncia-database-production.up.railway.app/signIn",envio)
        .then(res => { 
            if (res.status === 200) {
                navigate('/usuarioLog')
            }  })
        .catch(err => {
                setError(err.response.data.message) 
        })
    
    }
//------------------------------------------------------------------------------------------

    const onSubmit = value =>{
        llamarBd(value);    
    }

    return (
        <div className={`contenedor ${style.login_Contenedor}`}>
            <div className={`contenedor ${style.login}`}>

                <div className={`contenedor ${style.contenedor_top}`}>
                    <h2 className={style.tituloLogin}>MI DENUNCIA</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={`contenedor ${style.formulario_login}`}>

                    <label className={style.label}><AiOutlineUser className={style.iconLogin}/>
                        <input {...register("nickname",{
                            required: {
                                value: true,
                                message : "el usuario es requerido"
                            },
                            pattern: {
                                value : true,
                                message : "el usuario es requerido"
                            }
                        })} type="text" className={style.inputLogin} placeholder="Usuario o Correo" />
                        {errors.usuario && <span className={style.error}>{errors.usuario.message}</span>}
                    </label>

                    <label className={style.label}><AiOutlineLock className={style.iconLogin}/>
                        <input {...register("password",{
                            required: {
                                value: true,
                                message : "la contraseña es requerido"
                            },
                            pattern: {
                                value : true,
                                message : "la contraseña es requerido"
                            }
                        })} type="password" className={style.inputLogin}  placeholder="Contraseña"/>
                        {errors.password && <span className={style.error}>{errors.password.message}</span>}
                    </label>

                    <button type="submit" className={`btn ${style.btnLogin}`}>Iniciar Sesión</button>
                     
                </form>
                
                <div className={`contenedor ${style.contenedor_bottom}`}>
                    <div className={`contenedor ${style.cont_regiscontra}`}>
                        <p className={style.error}> {error} </p>
                        <p className={style.textoLogin}>¿No tienes Cuenta? <samp className={style.samp}><Link className={style.link} to="/RegistroUsuario"> REGISTRATE</Link></samp></p>
                        <p className={style.textoLogin}>¿Olvidaste tu <samp className={style.samp}><Link className={style.link} to="/RegistroUsuario">CONTRASEÑA</Link></samp>? </p>
                    </div>
                    <div className={`contenedor ${style.iniciar_google}`}> 
                        <AiFillGoogleCircle className={style.google}/>
                        <p>Iniciar sesión con Google</p> 
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Login;