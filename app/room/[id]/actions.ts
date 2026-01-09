'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function bookRoom(formData: FormData) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/signin')
  }

  const roomId = formData.get('roomId')
  const checkIn = formData.get('checkIn')
  const checkOut = formData.get('checkOut')
  const pricePerNight = Number(formData.get('pricePerNight'))

  if (!roomId || !checkIn || !checkOut || !pricePerNight) {
      throw new Error("Missing required fields");
  }

  // Calculate total price
  const start = new Date(checkIn as string)
  const end = new Date(checkOut as string)
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  
  if (days <= 0) {
      throw new Error("Invalid dates");
  }

  const totalPrice = days * pricePerNight

  const { error } = await supabase
    .from('reservations')
    .insert({
      user_id: user.id,
      room_id: roomId,
      check_in_date: checkIn,
      check_out_date: checkOut,
      total_price: totalPrice,
      status: 'pending'
    })

  if (error) {
    console.error(error)
    throw new Error(error.message)
  }

  revalidatePath('/myreservation')
  redirect('/myreservation')
}
