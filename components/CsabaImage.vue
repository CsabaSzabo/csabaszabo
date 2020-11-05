<template>
  <v-avatar class="csabaimage" size="150">
    <img
      id="csabaszabo-image"
      alt="Csaba Szabo"
      src="/img/csaba_150@1x.jpg"
    />
  </v-avatar>
</template>

<style>

/* Animation */
.csabaimage {
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.csabaimage:hover {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

/*****
* Retina image handling
*/

/* Normal Resolution CSS */
#csabaszabo-image {
  content:url('/img/csaba_150@1x.jpg')
}

/* HD/Retina CSS */
@media
only screen and (-webkit-min-device-pixel-ratio: 1.25),
only screen and ( min--moz-device-pixel-ratio: 1.25),
only screen and ( -o-min-device-pixel-ratio: 1.25/1),
only screen and ( min-device-pixel-ratio: 1.25),
only screen and ( min-resolution: 200dpi),
only screen and ( min-resolution: 1.25dppx)
{
	#csabaszabo-image {
    content:url('/img/csaba_150@2x.jpg')
  }
}

</style>
