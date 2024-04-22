async function tempo(request, response){
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const dateResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiSecret}`);
    const dateResponseJson = await dateResponse.json();
    const dia = dateResponseJson.date;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
    
    response.json({
        date: dynamicDate.toGMTString(),
        nasa_date: dia
    });
}

export default tempo;
