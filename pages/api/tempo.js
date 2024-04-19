async function tempo(request, response){
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subscribersResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiSecret}`);
    const subscribersResponseJson = await subscribersResponse.json();
    const dia = subscribersResponseJson.date;

    response.json({
        date: dynamicDate.toGMTString(),
        data: dia
    });
}

export default tempo;

//https://api.nasa.gov/planetary/apod?api_key=7dMPn2A8LlX8dmIchnpv5hyDLnBDvd4fwmmVIThg