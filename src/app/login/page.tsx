"use client";
import { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { fetchLoginPhone, fetchLoginPin } from '@/app/lib/data';
import {AuthService} from '@/app/lib/authService';

/* interface PhoneValidationFormProps {
  onSubmitPhone: (phoneNumber: string) => void
  onSubmitPin: (phoneNumber: string, pin: string) => void
} */

export default function Page() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [stage, setStage] = useState<'phone' | 'pin'>('phone');
  const router = useRouter();

  if (AuthService.validateSession()) {
    router.push('/dashboard');
  }

  const handlePhoneSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!phoneNumber) {
      setError('Por favor, ingresa un número de teléfono.');
      return
    }
    const response = await fetchLoginPhone(phoneNumber);
    if (response === null) {
      setError('Error desconocido al enviar el teléfono.');
      return
    }
    setStage('pin');
  }

  const handlePinSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!pin) {
      setError('Por favor, ingresa el PIN.');
      return;
    }

    if (pin.length !== 4) {
      setError('El PIN debe tener 4 dígitos.');
      return;
    }

    const response = await fetchLoginPin(phoneNumber, pin);
    if (response === null) {
      setError('Error desconocido al enviar el PIN.');
      return;
    }
    setError('PIN exitoso.');

    router.push('/dashboard');

  }

  const handleChangePhone = () => {
    setStage('phone')
    setPin('')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-900">Validación de Usuario</h2>
          <p className="text-center text-gray-600">
            {stage === 'phone' ? 'Ingresa tu número de teléfono' : 'Ingresa el PIN de validación'}
          </p>
          {stage === 'phone' ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Número de Teléfono
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Enviar Número
              </button>
            </form>
          ) : (
            <form onSubmit={handlePinSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
                  PIN de Validación
                </label>
                <input
                  id="pin"
                  type="number"
                  placeholder="0000"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  required
                  min="0000"
                  max="9999"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Validar PIN
              </button>
              <button
                type="button"
                onClick={handleChangePhone}
                className="w-full px-4 py-2 text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Cambiar Número de Teléfono
              </button>
            </form>
          )}
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            {stage === 'pin' && 'Ingresa el PIN que recibiste por mensaje de texto.'}
          </p>
        </div>
        <div className="px-6 py-4">
          <p className="text-center text-sm text-gray-600">Volver a la <Link href="/" className="text-blue-600 hover:text-blue-800">página principal</Link>.</p>
        </div>
      </div>

    </div>
  )
}