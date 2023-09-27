<template>
    <div class="weather_result">
        <h2>Weather Information</h2>
        <P>Long: <b>{{ data.coord.lon }}</b></P>
        <P>Long: <b>{{ data.coord.lat }}</b></P>
        <P>Temp Feels like : <b>{{ data.main.feels_like }}</b></P>
        <p>Temp: <b>{{ data.main.temp }}</b></p>
    </div>
</template>

<script>
export default {
    name: 'WeatherResult',
    props: {
        'data': Object,
    }
}
</script>