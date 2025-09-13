import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createWhatsAppLink = (message: string) => {
  // GUNAKAN CARA INI untuk Vite
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  // Pengecekan ini penting untuk mencegah error jika variabel lupa diatur
  if (!phoneNumber) {
    console.error("Variabel VITE_WHATSAPP_NUMBER belum diatur di file .env.local");
    // Mengembalikan '#' agar aplikasi tidak crash dan link tetap ada
    return "#"; 
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};