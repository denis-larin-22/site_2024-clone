export function getFutureDate(days: number): string {
    const today = new Date();
    today.setDate(today.getDate() + days);

    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();

    return `${day}.${month}.${year}`;
}