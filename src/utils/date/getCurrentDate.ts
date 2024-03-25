
export const getCurrentDate = () => {
    const currentDate: Date = new Date()
    const formattedDateTR: string = currentDate.toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const formattedDateEN: string = currentDate.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const formattedTime: string = currentDate.toLocaleTimeString(['tr-TR', 'en-US'], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // 24 saat formatı için
    });

  return{
    formattedDateTR,
    formattedDateEN,
    formattedTime
  }

}