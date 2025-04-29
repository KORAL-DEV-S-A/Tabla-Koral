'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const data = {
    "functions": {
        "Bandeja de entrada": "Captura todos los detalles vitales de los correos electrónicos, Slack y más directamente en tu bandeja de entrada de Koral Table.",
        "Planificador": "Sincroniza tu calendario y asigna franjas horarias específicas para aumentar la productividad.",
        "Automatización": "Automatiza las tareas y los flujos de trabajo con la automatización de Butler.",
        "Power-Ups": "Da alas a tus equipos vinculando sus herramientas favoritas con complementos de Koral Table.",
        "Plantillas": "Da a tu equipo la fórmula del éxito con plantillas fáciles de usar creadas por líderes del sector y la comunidad de Koral Table.",
        "Integraciones": "Encuentra las aplicaciones que tu equipo ya está utilizando o descubre nuevas formas de trabajar en Koral Table."
    },
    "solutions": {
        "Equipos de marketing": "Con Koral Table, los equipos de marketing tienen más fácil conseguir resultados, ya sea para lanzar un producto o una campaña, o para crear contenido.",
        "Gestión de productos": "Usa los tableros de gestión y las funciones de hoja de ruta de Koral Table para simplificar proyectos y procesos complejos.",
        "Equipos de ingeniería": "Envía más código con mayor rapidez y da a tus desarrolladores la libertad de ser más ágiles con Koral Table.",
        "Equipos de diseño": "Con Koral Table, los equipos de diseño pueden agilizar las solicitudes creativas y fomentar una colaboración más fluida entre los equipos.",
        "Empresas emergentes": "Desde conseguir objetivos de ingresos hasta gestionar flujos de trabajo, con Koral Table las pequeñas empresas llegan muy lejos.",
        "Equipos remotos": "Consigue que los miembros de tu equipo remoto sigan conectados y motivados estén donde estén."
    },
    "plans": {
        "SE FELIZ": "GRATIS"
    }
}
export default function Header() {
    const [headerState, setHeaderState] = useState('')
    const BackgroundGray = () => {
        return (
            <button onClick={() => setHeaderState('')} className='absolute w-screen h-screen bg-regal-blue left-0 top-0 z-2 hover:cursor-pointer'></button>
        )
    }
    return (
        <div className='absolute'>
            <div className='flex justify-between w-screen absolute h-[60px] shadow-2xl z-4 bg-white'>
                <div className='flex gap-16'>
                    <div>Koral table</div>
                    <button onClick={() => setHeaderState('functions')} className='hover:cursor-pointer'>functions</button>
                    <button onClick={() => setHeaderState('solutions')} className='hover:cursor-pointer'>solutions</button>
                    <button onClick={() => setHeaderState('plans')} className='hover:cursor-pointer'>plans</button>
                </div>
                <button>Iniciar</button>
            </div>
            {headerState &&
                <>
                    <div className='pt-[80px] z-3 absolute w-screen bg-white flex flex-wrap gap-2 justify-evenly pb-[20px]'>
                        {Object.entries(data[headerState]).map(([title, description]) => (
                            <div key={title} className="border p-4 rounded-lg shadow w-[25%]">
                                <h2 className="text-lg font-semibold">{title}</h2>
                                <p className="text-gray-700">{description}</p>
                            </div>
                        ))}
                    </div>
                    <BackgroundGray/>
                </>
            }
            {
                <>
                <div>
                    <h1>¡Hola!</h1>
                    <h3>Inicia session</h3>
                    <form>
                    <input/>
                    <input/>
                    <div><span>No recuerdas tu contraseña?</span>-<span>recuperar contraseña</span></div>
                    <button>Iniciar</button>
                    </form>
                    <button>google</button>
                    <div><p>No tienes una cuenta?</p>-<span>Registrate aqui</span></div>
                    
                </div>
                <BackgroundGray/>
                </>
            }
        </div>
    )
}
