export async function getAddress(ip = '8.8.8.8') {
    const response = await fetch(`
        https://geo.ipify.org/api/v1?apiKey=at_G2xUx1MhmZD219lwVjxnPe2XyHIUm&ipAddress=${ip}`);

    return await response.json();
}