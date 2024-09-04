"use client";

import { useEffect, useState } from 'react';
import { fetchCustomerData } from '@/app/lib/data';



export const ProductCustomer = async () => {
  const [customerData, setCustomerData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCustomerData = async () => {
    try {
      setLoading(true);
      const customerData = await fetchCustomerData();
      setCustomerData(customerData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCustomerData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!customerData) return <div>No customer data</div>;

  const { customer, address, customerInfo } = customerData as {
    customer : {
      firstName: string;
      lastName: string;
      document_id: string;
      email: string;
    },
    address: {
      address: string;
      city_name: string;
      country_name: string;
      latitud: string;
      longitud: string;
    },
    customerInfo: {
      customer_id: string;
      //last_login: any;
      device: string;
      ip_address: string;
      action: string;
      //create_at: any;
    }
  };
 
  return (
    <>
      <div className='w-full'>
        <h2 className="text-xl font-bold mb-4">Datos del Cliente</h2>
        <p><strong>Nombre:</strong> {customer?.firstName+ " " + customer?.lastName}</p>
        <p><strong>Email:</strong> {customer?.email}</p>
        <p><strong>Dirección:</strong> {address?.address}</p>
        <p><strong>Ciudad:</strong> {address?.city_name}</p>
        <p><strong>País:</strong> {address?.country_name}</p>
        <p><strong>Teléfono:</strong> {"__-___.__.__"}</p>
        <h2 className="text-xl font-bold my-4">Actividad</h2>
        <p><strong>Fecha Creación:</strong> {/* customerInfo?.create_at */}</p>
        <p><strong>Fecha Login:</strong> {/* customerInfo?.last_login.date */}</p>
        <p><strong>Dispositivo:</strong> {customerInfo?.device}</p>
        <p><strong>Ip Address:</strong> {customerInfo?.ip_address}</p>
        <p><strong>Acción:</strong> {customerInfo?.action}</p>
      </div>
    </>
  )
}
