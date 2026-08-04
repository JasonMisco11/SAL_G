'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { cookies } from 'next/headers'

export async function login(formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  if (username === 'frankaffizie' && password === '2026SAFinterior@@') {
    (await cookies()).set('admin_auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });
    
    revalidatePath('/', 'layout')
    redirect('/admin')
  } else {
    redirect('/admin/login?error=Invalid username or password')
  }
}
