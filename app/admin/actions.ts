'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function signOut() {
  (await cookies()).delete('admin_auth');

  revalidatePath('/', 'layout')
  redirect('/admin/login')
}
