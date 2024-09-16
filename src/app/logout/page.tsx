"use client";
import React, { use } from 'react'
import { AuthService } from '../lib/authService';
import Link from 'next/link';

const page = () => {
  AuthService.delSession();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Hemos cerrado tu sesión.</h1>
      <Link href="/login" className="text-blue-500 font-bold">Iniciar Sesión</Link>
      <Link href="/login" className="text-blue-500 font-bold">Ir al Inicio</Link>
    </div>
  )
}

export default page
