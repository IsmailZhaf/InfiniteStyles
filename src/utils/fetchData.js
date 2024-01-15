// File utilitas atau fungsi hook async
export async function fetchData(productId) {
    console.log(productId);
    const response = await fetch(`https://v1.appbackend.io/v1/rows/HPKXSTv3dGlW/${productId}`);
    const data = await response.json();
    return data;
}