<template>
        <b-nav-item @click="credit">Credit</b-nav-item>
</template>

<script>
// import localforage from 'localforage';
import Swal from "sweetalert2";
export default {
    name: "credit",
    methods: {
        credit() {
            Swal.fire({
                position: 'center',
                icon: 'info',
                width: "1000px",
                html: `
                <h1><span>Developers of </span><span style="color:#15a9e8">Cocrea Code!</span></h1>
                    <h2><b>Preview 469:</b></h2>
                    <b><p>
                    <h2><b>Management:</b></h2>
                    <span style="color:#2aa9bd">PerlinNoise</span>
                    <h2><b>Developers:</b></h2>

                    </p></b>
                `,
                showConfirmButton: true
            })
        },
    }
}
/*
title: 'Androz, snowflake107 - Original S4D\n7coil - Discord Blocks\nJose and mrredo - Preview 454',
text: 'frostzzone, RetroBTW, cat soup, AHQ, JeremyGamer13, LimeNade, henpokpok, AlexCdDg, Eruption - Preview 469',
*/
</script>
