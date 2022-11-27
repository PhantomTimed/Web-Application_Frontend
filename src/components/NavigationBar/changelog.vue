<template>
        <b-nav-item @click="changelog">Changelog</b-nav-item>
</template>



<script>
import Swal from "sweetalert2";

/* eslint-disable */
function convertBlocklyHTMLElementToDisplayableContent(path, width, height) {
    let newPath = path
    newPath = path.replace(/transform="translate\([0-9\.\-]*,[0-9\.\-]*\)">/mi, `transform="translate(0,0)">`)
    let returned = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" width="${width}px" height="${height}px" style="display: inline;position: inherit;fill: white;font: bold 11px Helvetica Neue, Segoe UI, Helvetica, sans-serif">` + newPath
    returned += "</svg>"
    return returned
}

export default {
    name: "Changelog",
    methods: {
        changelog() {
            Swal.fire({
                position: 'center',
                width: "900px",
                html: `
                  <style>
                    h2, h3 {
                      font-weight: bold;
                    }

                    .past-changeBTN {
                      text-align: center;
                      font-weight: bold;
                    }

                    .past-changes {
                      height: 30em;
                      overflow: auto;
                    }

                    details * {
                      text-align: left;
                    }

                    time {
                      font-size: 80%;
                      
                    }

                    .latest-change, .past-changes > div {
                      border: solid 2px;
                      padding: 1em;
                      border-radius: 0.25em;
                      margin: 0.5em 0;
                    }

                    details img {
                      margin-left: auto;
                      margin-right: auto;
                      display: block;
                    }

                    .img-size1 {
                      width: 80%;
                    }

                    .img-size2 {
                      width: 45%;
                    }
                  </style>
                  <h2>Changelog</h2>
                  </div>
                  <p style="font-weight: bold;">Detailed logs are posted in our official <a style="color: #5865F2;" href="https://discord.gg/gandi">Discord</a> Server</p>
                  
                  <div class="latest-change">
                      <div>
                  <time datetime="09/11/2022">09/11/2022 - JeremyGamer13</time>
                    <h3>made the website ig</h3>
                    <img src="https://cdn.discordapp.com/attachments/935597297528610856/1018421563202228274/unknown.png" alt="Updated popups" class="img-size2"></img> 
                  </div>
                  </div>
                  <details>     
                </details>
                `,
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
            })
        },
    }
}
</script>
